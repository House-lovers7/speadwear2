class CreateLikeCoordinates < ActiveRecord::Migration[7.0]
  def change
    create_table :likecoordinates do |t|
      t.integer :user_id
      t.integer :coordinate_id
      t.timestamps
    end
  end
end
