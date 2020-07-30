class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :owner
      t.string :animal_type
      t.string :mood
      t.string :phrase

      t.timestamps
    end
  end
end
