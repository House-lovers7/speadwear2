# frozen_string_literal: true

FactoryBot.define do
  # factory :relationship1 do
  #   association :follower
  #   association :followed
  # end

  factory :relationship1, class: Relationship do
    follower_id { admin.id }
    followed_id { other.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :relationship2, class: Relationship do
    follower_id { blockuser.id }
    followed_id { admin.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :relationship3, class: Relationship do
    follower_id { other.id }
    followed_id { blockuser.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :relationship4, class: Relationship do
    follower_id { other.id }
    followed_id { admin.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
