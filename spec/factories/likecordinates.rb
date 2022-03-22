# frozen_string_literal: true

FactoryBot.define do
  factory :likecoordinate1, class: LikeCoordinate do
    user_id { other.id }
    coordinate_id { coordinate1.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate2, class: LikeCoordinate do
    user_id { other.id }
    coordinate_id { coordinate2.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate3, class: LikeCoordinate do
    user_id { blockuser.id }
    coordinate_id { coordinate3.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate4, class: LikeCoordinate do
    user_id { blockuser.id }
    coordinate_id { coordinate4.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate5, class: LikeCoordinate do
    user_id { blockuser.id }
    coordinate_id { coordinate5.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate6, class: LikeCoordinate do
    user_id { admin.id }
    coordinate_id { coordinate6.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate7, class: LikeCoordinate do
    user_id { other.id }
    coordinate_id { coordinate7.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate8, class: LikeCoordinate do
    user_id { other.id }
    coordinate_id { coordinate8.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
