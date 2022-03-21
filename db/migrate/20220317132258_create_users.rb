class CreateUsers < ActiveRecord::Migration[7.0]
  create_table :users do |t|
    t.string :name
    t.string :email
    t.string :picture
    t.integer :coordinate_id
    t.integer :item_id
    t.integer :comment_id
    t.boolean :admin
    t.string :password_digest
    t.string :remember_digest
    t.string :reset_digest
    t.timestamps
  end
  end
end
