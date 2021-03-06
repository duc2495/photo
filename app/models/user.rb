class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  #mount_uploader :avatar, ImageUploader
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100#" ,}, :default_url => "/images/:style/profile-default-avatar.png"
  has_many :images
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
end
