require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  if Rails.env.production?
    config.storage :fog
      config.fog_provider = 'fog/aws'
      config.fog_directory = ENV['S3_BUCKET_NAME']
      config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" }
      # config.asset_host = 'https://s3.amazonaws.com/speadwear-images'
      # config.asset_host = 'https://speadwear-images.s3.amazonaws.com'
      config.fog_public = false

      config.fog_credentials = {
        provider: 'AWS',
        aws_access_key_id: ENV['S3_ACCESS_KEY_ID'],
        aws_secret_access_key: ENV['S3_SECRET_ACCESS_KEY'],
        region: ENV['S3_REGION'],
        path_style: true
      }

    else # 本番環境以外の場合はアプリケーション内にアップロード
      config.asset_host = "http://localhost:3001"
      config.storage :file
      config.cache_storage = :file
      config.enable_processing = false if Rails.env.test?
    end
  end
