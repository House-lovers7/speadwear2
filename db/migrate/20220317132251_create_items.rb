class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.integer :user_id,null: false
      t.integer :cordinate_id
      t.integer :super_item,null: false
      t.integer :season,null: false
      t.integer :tpo,null: false
      t.integer :color,null: false
      t.integer :content,null: false
      t.text :memo
      t.string :image
      t.float :rating,null: false

      t.timestamps
    end
  end
end
