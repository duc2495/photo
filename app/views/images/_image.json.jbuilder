json.extract! image, :id, :user_id, :review, :file, :created_at, :like, :title, :description,:created_at, :updated_at
json.url image_url(image, format: :json)
