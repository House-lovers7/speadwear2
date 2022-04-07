class CreateLikeItems < ActiveRecord::Migration[7.0]
  def change
    create_table :like_items do |t|
      t.integer :user_id,null: false
      t.integer :item_id,null: false
      t.timestamps
    end
  end
end
