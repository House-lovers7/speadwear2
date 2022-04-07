class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :item_id
      t.integer :coordinate_id
      t.string :comment, null: false

      t.timestamps
    end
  end
end
