class CreateCoordinates < ActiveRecord::Migration[7.0]
  def change
    create_table :coordinates do |t|
      t.integer :user_id
      t.integer :item_id
      t.integer :comment_id
      t.integer :likecoordinate_id
      t.integer :season,null: false
      t.integer :tpo,null: false
      t.integer :gender,null: false
      t.integer :size,null: false
      t.integer :price,null: false
      t.string :image
      t.integer :si_shoes
      t.integer :si_bottoms
      t.integer :si_tops
      t.integer :si_outer
      t.text :description
      t.float :rating
      t.timestamps
    end
  end
end
