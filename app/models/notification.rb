# frozen_string_literal: true

class Notification < ApplicationRecord
  default_scope -> { order(created_at: :desc) }
  belongs_to :coordinate, class_name: 'Coordinate', optional: true
  belongs_to :comment, class_name: 'Comment', optional: true
  belongs_to :likecoordinate, class_name: 'Likecoordinate', optional: true
  belongs_to :likeitem, class_name: 'Likitem', optional: true
  belongs_to :sender, class_name: 'User', optional: true
  belongs_to :receiver, class_name: 'User', optional: true
end
