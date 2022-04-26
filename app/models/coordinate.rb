# frozen_string_literal: true
class Coordinate < ApplicationRecord
  mount_uploader :image, ImageUploader
  has_one_attached :coordinate_image
  belongs_to :user, dependent: :destroy
  has_many :items
  has_many :comments, dependent: :destroy
  has_many :notifications, dependent: :destroy
  has_many :like_coordinates, dependent: :destroy
  # liked_usersによってcoordinateが誰にいいねされているのかを簡単に取得できるようにする
  has_many :liked_users, through: :like_coordinates, source: :user
  validates :season, presence: true
  validates :tpo, presence: true
  validates :gender, presence: true
  validates :size, presence: true
  validates :price, presence: true
  validates :description, length: { maximum: 140 }
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
