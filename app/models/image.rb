class Image < ApplicationRecord
  mount_uploader :file, ImageUploader

  belongs_to :user
  has_many :image_comment, -> { order "created_at DESC"}
  def self.search(search)
    where("review LIKE ? OR title LIKE ? OR description LIKE ?", "%#{search}%", "%#{search}%", "%#{search}%") 
  end
end
