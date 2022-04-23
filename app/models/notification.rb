# frozen_string_literal: true
class Notification < ApplicationRecord
  default_scope -> { order(created_at: :desc) }
  belongs_to :coordinate, class_name: 'Coordinate', optional: true
  belongs_to :item, class_name: 'Item', optional: true
  belongs_to :comment, class_name: 'Comment', optional: true
  belongs_to :like_coordinate, class_name: 'LikeCoordinate', optional: true
  belongs_to :like_item, class_name: 'LikItem', optional: true
  belongs_to :sender, class_name: 'User', optional: true
  belongs_to :receiver, class_name: 'User', optional: true
end
