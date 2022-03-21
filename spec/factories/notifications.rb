# frozen_string_literal: true

FactoryBot.define do
  factory :notification1, class: Notification do
    sender_id { other.id }
    receiver_id { admin.id }
    coordinate_id { coordinate1.id }
    likecoordinate_id { 1 }
    action { 'likecoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification2, class: Notification do
    sender_id { other.id }
    receiver_id { admin.id }
    coordinate_id { coordinate2.id }
    likecoordinate_id { 2 }
    action { 'likecoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification3, class: Notification do
    sender_id { blockuser.id }
    receiver_id { admin.id }
    coordinate_id { coordinate3.id }
    likecoordinate_id { 3 }
    action { 'likecoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification4, class: Notification do
    sender_id { blockuser.id }
    receiver_id { other.id }
    coordinate_id { coordinate4.id }
    likecoordinate_id { 4 }
    action { 'likecoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification5, class: Notification do
    sender_id { blockuser.id }
    receiver_id { other.id }
    coordinate_id { coordinate5.id }
    likecoordinate_id { 5 }
    action { 'likecoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification6, class: Notification do
    sender_id { admin.id }
    receiver_id { other.id }
    coordinate_id { coordinate6.id }
    likecoordinate_id { 6 }
    action { 'likecoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification7, class: Notification do
    sender_id { other.id }
    receiver_id { blockuser.id }
    coordinate_id { coordinate7.id }
    likecoordinate_id { 7 }
    action { 'likecoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification8, class: Notification do
    sender_id { other.id }
    receiver_id { blockuser.id }
    coordinate_id { coordinate8.id }
    likecoordinate_id { 8 }
    action { 'likecoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification9, class: Notification do
    sender_id { other.id }
    receiver_id { admin.id }
    action { 'follow' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification10, class: Notification do
    sender_id { admin.id }
    receiver_id { blockuser.id }
    action { 'follow' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification11, class: Notification do
    sender_id { other.id }
    receiver_id { blockuser.id }
    action { 'follow' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification12, class: Notification do
    sender_id { admin.id }
    receiver_id { other.id }
    action { 'follow' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification13, class: Notification do
    sender_id { other.id }
    receiver_id { admin.id }
    coordinate_id { coordinate1.id }
    comment_id { 1 }
    action { 'comment' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification14, class: Notification do
    sender_id { other.id }
    receiver_id { admin.id }
    coordinate_id { coordinate2.id }
    comment_id { 2 }
    action { 'comment' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification15, class: Notification do
    sender_id { blockuser.id }
    receiver_id { admin.id }
    coordinate_id { coordinate3.id }
    comment_id { 3 }
    action { 'comment' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification16, class: Notification do
    sender_id { admin.id }
    receiver_id { other.id }
    coordinate_id { coordinate4.id }
    comment_id { 4 }
    action { 'comment' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification17, class: Notification do
    sender_id { admin.id }
    receiver_id { other.id }
    coordinate_id { coordinate5.id }
    comment_id { 5 }
    action { 'comment' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification18, class: Notification do
    sender_id { blockuser.id }
    receiver_id { other.id }
    coordinate_id { coordinate6.id }
    comment_id { 6 }
    action { 'comment' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification19, class: Notification do
    sender_id { other.id }
    receiver_id { blockuser.id }
    coordinate_id { coordinate7.id }
    comment_id { 7 }
    action { 'comment' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification20, class: Notification do
    sender_id { other.id }
    receiver_id { blockuser.id }
    coordinate_id { coordinate8.id }
    comment_id { 4 }
    action { 'comment' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end

