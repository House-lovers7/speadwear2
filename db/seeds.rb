# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# --- ここから追加する
4.times do |l|
  user = User.new(
    name: "ユーザー_#{l}",
    email: "test_user#{l}gmail.com",
    picture: ,
    time_required: 10,
    coment_id: ,
    admin: ,
    password_digest: ,
    remember_digest: ,
    reset_digest: ,
  )

  8.times do |m|
    user.items.build(
      cordinat_id: rand(1..3),
      # enumの表示方法
      super_item: ,
      seaason: ,
      tpo: ,
      color: ,
      content: ,
      memo: ,
      image: ,
      rating: rand(1..5),

      name: "フード名_#{m}",
      price: 500,
      description: "フード_#{m}の説明文です。"
    )
  item.save!
end
