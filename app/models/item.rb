class Item < ApplicationRecord
  belongs_to :user
  belongs_to :cordinate, optional: true
  validates :super_item, presence: true
  validates :season, presence: true
  validates :tpo, presence: true
  validates :color, presence: true
  validates :content, presence: true
  validates :memo, length: { maximum: 140 }
  validates :image

end
