module Api
  module V1
class UsersController < ApplicationController

def index

  @users = User.all.order("created_at DESC")

  render json: {
    users: @users
  }, status: :ok

end

def create
  @user = User.create!(user_params)
  # bucketを設定
  if params[:image]
          blob = ActiveStorage::Blob.create_after_upload!(
            io: StringIO.new(decode(params[:image][:data]) + "\n"),
            filename: params[:image][:filename]
          )
          @user.image.attach(blob)
        end
        @user.save
        render json: {user: @user}
      else
        render status: 422, json: { errors: @user.errors.full_messages } #手動でステータス入れないと200になるぽい
      end
    end

  def show
    @user = User.find(params[:id])
    @users = User.all.order("created_at DESC")
    @item = Item.where(user_id: params[:id])
    @coordinate = Coordinate.where(user_id: params[:id])

    # user_paginate
    # coordinate_ransack_setup
    # item_ransack_setup

    render json: {
      user:  @user,
      users: @users,
      item: @item,
      coordinate: @coordinate
    }, status: :ok

  end


end
end

private

# def user_params
#   params.permit(:name, :image_data)
# end

def decode(str)
  Base64.decode64(str.split(',').last)
end

end
