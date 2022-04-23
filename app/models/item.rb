# frozen_string_literal: true
class Item < ApplicationRecord
  mount_uploader :image, ImageUploader
  has_one_attached :item_image
  has_many :notifications, dependent: :destroy
  has_many :like_items, dependent: :destroy
  has_many :liked_users, through: :like_items, source: :user
  belongs_to :user
  belongs_to :coordinate, optional: true
  validates :super_item, presence: true
  validates :season, presence: true
  validates :tpo, presence: true
  validates :color, presence: true
  validates :content, presence: true
  validates :gender, presence: true
  validates :size, presence: true
  validates :price, presence: true
  validates :description, length: { maximum: 140 }

  enum super_item: %w[アウター トップス ボトムス シューズ]
  enum season: %w[春 夏 秋 冬]
  enum tpo: %w[デート リラックス スポーツ おでかけ 仕事]
  enum gender: %w[ユニセックス メンズ レディース]
  enum size: %w[S M L]
  enum content: %w[Tシャツ Yシャツ ポロシャツ パーカー スウェット セーター パンツ デニムパンツ ジャケット コート スニーカー ローファー レザーシューズ ブーツ ビジネス そのほか お仕事]
  enum color: %w[ブラック ホワイト グレー レッド ネイビー ライトブルー イエロー グリーン オレンジ オリーブ ネオン ボーダー 水たま デニム 他のカラー]
  # Itemのseasonカラムにそれぞれの季節を入れるメソッドを定義する
  def self.spring
    Item.where(season: :春)
  end

  def self.summer
    Item.where(season: :夏)
  end

  def self.winter
    Item.where(season: :冬)
  end

  def self.autmun
    Item.where(season: :秋)
  end

  # ItemのtpoカラムにそれぞれのTPOを入れるメソッドを定義する
  def self.dating
    @item = Item.where(tpo: :デート)
  end

  def self.relax
    Item.where(tpo: :リラックス♪)
  end

  def self.sports
    Item.where(tpo: :スポーツ)
  end

  def self.town
    Item.where(tpo: :おでかけ)
  end

  # Itemのsuperitemカラムにそれぞれのsuper_itemを入れるメソッドを定義する
  def self.tops
    Item.where(super_item: :トップス)
  end

  def self.bottoms
    Item.where(super_item: :ボトムス)
  end

  def self.shoes
    Item.where(super_item: :シューズ)
  end

  def self.outer
    Item.where(super_item: :アウター)
  end

  private

  # アップロードされた画像のサイズをバリデーションする
  def picture_size
    errors.add(:image, 'should be less than 5MB') if image.size > 5.megabytes
  end
end
