# frozen_string_literal: true

FactoryBot.define do
  factory :comment1, class: Comment do
    user_id { other.id }
    item_id {item1.id}
    coordinate_id { coordinate1.id }
    # sequence(:cordiante_id) { |n| coordinate#{n}.id }
    sequence(:comment) { |n| "これは#{n}個目のコメントです。" }
    association :coordinate
    user { coordinate.user }
  end

  factory :comment2, class: Comment do
    user_id { other.id }
    item_id {item2.id}
    coordinate_id { coordinate2.id }
    sequence(:comment) { |_n| 'ナイスな差し色!!' }
    association :coordinate
    user { coordinate.user }
  end

  factory :comment3, class: Comment do
    user_id { blockuser.id }
    item_id {item3.id}
    coordinate_id { coordinate3.id }
    sequence(:comment) { |n| "これは#{n}個目のコメントです。" }
    association :coordinate
    user { coordinate.user }
  end

  factory :comment4, class: Comment do
    user_id { admin.id }
    item_id {item4.id}
    coordinate_id { coordinate4.id }
    sequence(:comment) { |n| "これは#{n}個目のコメントです。" }
    association :coordinate
    user { coordinate.user }
  end

  factory :comment5, class: Comment do
    user_id { admin.id }
    item_id {item5.id}
    coordinate_id { coordinate5.id }
    sequence(:comment) { |n| "これは#{n}個目のコメントです。" }
    association :coordinate
    user { coordinate.user }
  end

  factory :comment6, class: Comment do
    user_id { blockuser.id }
    item_id {item6.id}
    coordinate_id { coordinate6.id }
    sequence(:comment) { |n| "これは#{n}個目のコメントです。" }
    association :coordinate
    association :item
    user { coordinate.user }
  end

  factory :comment7, class: Comment do
    user_id { other.id }
    item_id {item7.id}
    coordinate_id { coordinate7.id }
    sequence(:comment) { |n| "これは#{n}個目のコメントです。" }
    association :coordinate
    user { coordinate.user }
  end

  factory :comment8, class: Comment do
    user_id { other.id }
    item_id {item8.id}
    coordinate_id { coordinate8.id }
    sequence(:comment) { |n| "これは#{n}個目のコメントです。" }
    association :coordinate
    user { coordinate.user }
  end

  factory :comment9, class: Comment do
    user_id { other.id }
    item_id {item9.id}
    coordinate_id { coordinate9.id }
    sequence(:comment) { |n| "これは#{n}個目のコメントです。" }
    association :coordinate
    user { coordinate.user }
  end

  factory :comment10, class: Comment do
    user_id { other.id }
    item_id {item10.id}
    coordinate_id { coordinate10.id }
    sequence(:comment) { |n| "これは#{n}個目のコメントです。" }
    association :coordinate
    user { coordinate.user }
  end
end
