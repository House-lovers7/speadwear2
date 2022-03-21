class CreateLikeItems < ActiveRecord::Migration[7.0]
  def change
    create_table :like_items do |t|
      t.integer :user_id
      t.integer :item_id
      t.timestamps
    end
  end
end
