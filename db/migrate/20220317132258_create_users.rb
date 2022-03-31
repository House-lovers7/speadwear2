class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name,null: false
      t.string :email,null: false
      t.string :image
      t.string :gender,null: false
      t.integer :coordinate_id
      t.integer :item_id
      t.integer :comment_id
      t.boolean :admin
      t.string :password_digest
      t.string :remember_digest
      t.string :reset_digest
      t.string :activation_digest
      t.boolean :activated
      t.datetime :activated_at

      t.timestamps
    end
  end
end
