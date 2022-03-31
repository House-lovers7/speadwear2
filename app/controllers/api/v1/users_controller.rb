module Api
  module V1
class UsersController < ApplicationController

def index

  @users = User.all

  render json: {
    users: @users
  }, status: :ok

end

  def show
    @user = User.find(params[:id])
    @users = User.all
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
end
