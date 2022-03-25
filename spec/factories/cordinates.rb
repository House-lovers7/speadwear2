# frozen_string_literal: true

FactoryBot.define do
  factory :coordinate1, class: Coordinate do
    user_id { admin.id }
    season { 2 }
    tpo { 1 }
    rating { 3 }
    gender {0}
    size {2}
    price {3000}
    si_tops { 1 }
    si_bottoms { 2 }
    si_shoes { 3 }
    # comment_id { 1 }
    sequence(:description) { |n| "これは#{n}個目のコーディネートです" }
    association :user
    image do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/coordinate1.jpg'))
    end
    # userならできるのにownerはできないのはどうしてか？
    # association :owner
    # image
    # user { item.user }
  end

  factory :coordinate2, class: Coordinate do
    user_id { admin.id }
    season { 2 }
    tpo { 1 }
    rating { 3 }
    gender {0}
    size {2}
    price {2000}
    si_tops { 4 }
    si_bottoms { 5 }
    si_shoes { 6 }

    sequence(:description) { |n| "これは#{n}個目のコーディネートです" }
    association :user
    image do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/coordinate2.jpg'))
    end
  end

  factory :coordinate3, class: Coordinate do
    user_id { admin.id }
    season { 2 }
    tpo { 1 }
    rating { 3 }
    gender {0}
    size {2}
    price {3500}
    si_outer { 7 }
    si_tops { 8 }
    si_bottoms { 9 }
    si_shoes { 10 }
    sequence(:description) { |n| "これは#{n}個目のコーディネートです" }
    association :user
    image do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/coordinate3.jpg'))
    end
  end

  factory :coordinate4, class: Coordinate do
    user_id { other.id }
    season { 2 }
    tpo { 1 }
    rating { 3 }
    gender {0}
    size {2}
    price {4000}
    si_outer { 11 }
    si_tops { 12 }
    si_bottoms { 13 }
    si_shoes { 14 }
    sequence(:description) { |n| "これは#{n}個目のコーディネートです" }
    association :user
    image do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/coordinate4.jpg'))
    end
  end

  factory :coordinate5, class: Coordinate do
    user_id { other.id }
    season { 2 }
    tpo { 1 }
    rating { 3 }
    gender {0}
    size {2}
    price {2000}
    si_outer { 15 }
    si_tops { 16 }
    si_bottoms { 17 }
    si_shoes { 18 }
    sequence(:description) { |n| "これは#{n}個目のコーディネートです" }
    association :user
    image do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/coordinate5.jpg'))
    end
  end

  factory :coordinate6, class: Coordinate do
    user_id { other.id }
    season { 0 }
    tpo { 3 }
    rating { 3 }
    gender {0}
    size {2}
    price {5000}
    si_outer { 19 }
    si_tops { 20 }
    si_bottoms { 21 }
    si_shoes { 22 }
    sequence(:description) { |n| "これは#{n}個目のコーディネートです" }
    association :user
    image do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/coordinate6.jpg'))
    end
  end

  factory :coordinate7, class: Coordinate do
    user_id { blockuser.id }
    season { 0 }
    tpo { 1 }
    rating { 4 }
    gender {0}
    size {2}
    price {4000}
    si_outer { 23 }
    si_tops { 24 }
    si_bottoms { 25 }
    si_shoes { 26 }
    sequence(:description) { |n| "これは#{n}個目のコーディネートです" }
    association :user
    image do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/coordinate7.jpg'))
    end
  end

  factory :coordinate8, class: Coordinate do
    user_id { blockuser.id }
    season { 2 }
    tpo { 1 }
    rating { 3 }
    gender {0}
    size {2}
    price {2000}
    si_outer { 7 }
    si_tops { 8 }
    si_bottoms { 9 }
    si_shoes { 10 }
    sequence(:description) { |n| "これは#{n}個目のコーディネートです" }
    association :user
    image do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/coordinate8.jpg'))
    end
  end

  # testuser用

  factory :coordinate9, class: Coordinate do
    user_id { testuser.id }
    season { 2 }
    tpo { 1 }
    rating { 3 }
    gender {1}
    size {1}
    price {3000}
    si_tops { 1 }
    si_bottoms { 2 }
    si_shoes { 3 }
    # si_outer {  }
    # comment_id { 1 }
    sequence(:description) { |n| "これは#{n}個目のコーディネートです" }
    association :user
    image do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/coordinate1.jpg'))
    end
    # userならできるのにownerはできないのはどうしてか？
    # association :owner
    # image
    # user { item.user }
  end

  factory :coordinate10, class: Coordinate do
    user_id { testuser.id }
    season { 2 }
    tpo { 1 }
    rating { 3 }
    gender {1}
    size {2}
    price {3000}
    si_tops { 1 }
    si_bottoms { 2 }
    si_shoes { 3 }
    # si_outer {  }
    # comment_id { 1 }
    sequence(:description) { |n| "これは#{n}個目のコーディネートです" }
    association :user
    image do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/coordinate1.jpg'))
    end
    # userならできるのにownerはできないのはどうしてか？
    # association :owner
    # image
    # user { item.user }
  end
end
