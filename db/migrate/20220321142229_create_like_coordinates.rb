class CreateLikeCoordinates < ActiveRecord::Migration[7.0]
  def change
    create_table :like_coordinates do |t|
      t.integer :user_id,null: false
      t.integer :coordinate_id,null: false
      t.timestamps
    end
  end
end
