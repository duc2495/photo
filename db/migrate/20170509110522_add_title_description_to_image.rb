class AddTitleDescriptionToImage < ActiveRecord::Migration[5.0]
  def change
    add_column :images, :title, :string
    add_column :images, :description, :string
  end
end
