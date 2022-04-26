# frozen_string_literal: true

FactoryBot.define do
  factory :notification1, class: Notification do
    sender_id { other.id }
    receiver_id { admin.id }
    coordinate_id { coordinate1.id }
    likecoordinate_id { 1 }
    action { 'likeCoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification2, class: Notification do
    sender_id { other.id }
    receiver_id { admin.id }
    coordinate_id { coordinate2.id }
    likecoordinate_id { 2 }
    action { 'likeCoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification3, class: Notification do
    sender_id { blockuser.id }
    receiver_id { admin.id }
    coordinate_id { coordinate3.id }
    likecoordinate_id { 3 }
    action { 'likeCoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification4, class: Notification do
    sender_id { blockuser.id }
    receiver_id { other.id }
    item_id { item4.id }
    likeItem_id { 4 }
    action { 'likeItem' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification5, class: Notification do
    sender_id { blockuser.id }
    receiver_id { other.id }
    item_id { item5.id }
    likeItem_id { 5 }
    action { 'likeItem' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification6, class: Notification do
    sender_id { admin.id }
    receiver_id { other.id }
    item_id { item6.id }
    likeItem_id { 6 }
    action { 'likeItem' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification7, class: Notification do
    sender_id { other.id }
    receiver_id { blockuser.id }
    coordinate_id { coordinate7.id }
    item_id { item7.id }
    likecoordinate_id { 7 }
    action { 'likeCoordinate' }
    checked { true }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :notification8, class: Notification do
    sender_id { other.id }
    receiver_id { blockuser.id }
    coordinate_id { coordinate8.id }
    item_id { item9.id }
    likecoordinate_id { 8 }
    action { 'likeCoordinate' }
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

end
