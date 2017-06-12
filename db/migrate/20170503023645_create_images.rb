class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer :user_id
      t.string :review
      t.string :file
      t.datetime :created_at
      t.integer :like

      t.timestamps
    end
  end
end
