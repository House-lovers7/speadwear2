
# frozen_string_literal: true

class Likecoordinate < ApplicationRecord
  validates :user_id, presence: true
  validates :coordinate_id, presence: true
  has_many :notifications, dependent: :destroy
  belongs_to :coordinate
  belongs_to :user, class_name: 'User', foreign_key: 'user_id', optional: true
  belongs_to :follower, class_name: 'User', foreign_key: 'user_id',
                        optional: true
  belongs_to :followed, class_name: 'User', foreign_key: 'user_id',
                        optional: true
end
