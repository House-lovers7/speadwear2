class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.integer :user_id,null: false
      t.integer :coordinate_id
      t.integer :super_item,null: false
      t.integer :season,null: false
      t.integer :tpo,null: false
      t.integer :color,null: false
      t.integer :content,null: false
      t.integer :gender,null: false
      t.integer :size,null: false
      t.integer :price,null: false
      t.text :description
      t.string :image
      t.float :rating,null: false

      t.timestamps
    end
  end
end
