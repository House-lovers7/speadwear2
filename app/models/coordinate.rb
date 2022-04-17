# frozen_string_literal: true

class Coordinate < ApplicationRecord
  belongs_to :user, dependent: :destroy
  has_many :items
  has_many :comments, dependent: :destroy
  has_many :notifications, dependent: :destroy
  has_many :like_coordinates, dependent: :destroy
  has_many :users, through: :like_coordinates

  validates :season, presence: true
  validates :tpo, presence: true
  validates :gender, presence: true
  validates :size, presence: true
  validates :price, presence: true
  validates :description, length: { maximum: 140 }

  has_one_attached :coordinate_image
  has_many :liked_coordinate, through: :like_coordinates, source: :coordinate
  has_many :active_like_coordinates, class_name: 'LikeCoordinate',
                                   foreign_key: 'coordinate_id',
                                   dependent: :destroy

  # liked_usersによってcoordinateが誰にいいねされているのかを簡単に取得できるようにする
  has_many :liked_users, through: :like_coordinates, source: :user
  mount_uploader :image, ImageUploader

  # accepts_nested_attributes_for :items
  enum season: %w[春 夏 秋 冬]
  enum tpo: %w[デート リラックス スポーツ おでかけ 仕事]
  enum gender: %w[ユニセックス メンズ レディース]
  enum size: %w[S M L]
  enum rating: %w[1 2 3 4 5]

  private

  # アップロードされた画像のサイズをバリデーションする
  def picture_size
    errors.add(:image, 'should be less than 5MB') if image.size > 5.megabytes
  end
end
