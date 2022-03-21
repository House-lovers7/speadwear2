# frozen_string_literal: true

class Coordinate < ApplicationRecord
  belongs_to :user, dependent: :destroy, presence: true
  has_many :items, presence: true
  has_many :comments, dependent: :destroy
  has_many :notifications, dependent: :destroy
  has_many :likecoordinates, dependent: :destroy
  has_many :users, through: :likecoordinates

  validates :season, presence: true
  validates :tpo, presence: true
  validates :memo, length: { maximum: 140 }
  validate :picture_size

  has_many :liked_coordinate, through: :likecoordinates, source: :coordinate
  has_many :active_likecoordinates, class_name: 'Likecoordinate',
                                   foreign_key: 'coordinate_id',
                                   dependent: :destroy

  # liked_usersによってcoordinateが誰にいいねされているのかを簡単に取得できるようにする
  has_many :liked_users, through: :likecoordinates, source: :user
  mount_uploader :picture, PictureUploader

  accepts_nested_attributes_for :items
  enum super_item: %w[アウター トップス ボトムス シューズ]
  enum season: %w[春 夏 秋 冬]
  enum tpo: %w[デート リラックス♪ スポーツ おでかけ 仕事]
  enum rating: %w[1 2 3 4 5]

  private

  # アップロードされた画像のサイズをバリデーションする
  def picture_size
    errors.add(:picture, 'should be less than 5MB') if picture.size > 5.megabytes
  end
end
