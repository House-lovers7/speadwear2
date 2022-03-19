class CreateCoordinates < ActiveRecord::Migration[7.0]
  def change
    create_table :coordinates do |t|

      t.timestamps
    end
  end
end
