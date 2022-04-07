class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      t.integer :sender_id
      t.integer :receiver_id
      t.integer :coordinate_id
      t.integer :item_id
      t.integer :comment_id
      t.integer :likecoordinate_id
      t.integer :likeItem_id
      t.string :action
      t.boolean :checked
      t.timestamps
    end
  end
end
