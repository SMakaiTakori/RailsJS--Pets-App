class AddIdToActivities < ActiveRecord::Migration[6.0]
  def change
    add_column :activities, :pet_id, :integer
  end
end
