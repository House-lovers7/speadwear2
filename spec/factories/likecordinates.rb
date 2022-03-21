# frozen_string_literal: true

FactoryBot.define do
  factory :likecoordinate1, class: Likecoordinate do
    user_id { other.id }
    coordinate_id { coordinate1.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate2, class: Likecoordinate do
    user_id { other.id }
    coordinate_id { coordinate2.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate3, class: Likecoordinate do
    user_id { blockuser.id }
    coordinate_id { coordinate3.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate4, class: Likecoordinate do
    user_id { blockuser.id }
    coordinate_id { coordinate4.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate5, class: Likecoordinate do
    user_id { blockuser.id }
    coordinate_id { coordinate5.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate6, class: Likecoordinate do
    user_id { admin.id }
    coordinate_id { coordinate6.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate7, class: Likecoordinate do
    user_id { other.id }
    coordinate_id { coordinate7.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end

  factory :likecoordinate8, class: Likecoordinate do
    user_id { other.id }
    coordinate_id { coordinate8.id }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end

# create_table "likecoordinates", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
#   t.integer "user_id"
#   t.integer "coordinate_id"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.index ["coordinate_id"], name: "index_likecoordinates_on_coordinate_id"
#   t.index ["user_id", "coordinate_id"], name: "index_likecoordinates_on_user_id_and_coordinate_id", unique: true
#   t.index ["user_id"], name: "index_likecoordinates_on_user_id"
# end
