# frozen_string_literal: true

FactoryBot.define do

  # factory :block do
  #   association :blocker
  #   association :blocked
  # end

  factory :block1, class: Block do
    blocker_id { admin.id }
    blocked_id { blockuser.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
