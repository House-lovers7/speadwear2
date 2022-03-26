# frozen_string_literal: true
# Load the Rails application.
require_relative 'application'
# Initialize the Rails application.
Rails.application.initialize!

# 本番環境設定用
# if Rails.env.production?
#   CarrierWave.configure do |config|
#     config.fog_credentials = {
#       # Amazon S3用の設定
#       provider: 'AWS',
#       region: ENV['S3_REGION'],  # S3に設定したリージョン。
#       bucket: ENV['S3_BUCKET_NAME'],
#       aws_access_key_id: ENV['S3_ACCESS_KEY_ID'],
#       aws_secret_access_key: ENV['S3_SECRET_ACCESS_KEY']
#     }
#     config.fog_directory = ENV['S3_BUCKET']
#   end
# end
