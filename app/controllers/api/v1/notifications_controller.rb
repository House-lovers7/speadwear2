module Api
  module V1
class NotificationsController < ApplicationController

  def index
    render json: {
      notifications: Notification.all.order("created_at DESC")
    }
  end

  def show
    @notification = Notification.find(params[:id])

    render json: {
      notification: @notification,
        }, status: :ok
  end

  def create
    @notification = Notification.new(notification_params)
    @notification.user_id = params[:user_id]

    if @notification.save!
      flash[:success] = 'Notificationを作成しました!'
      redirect_to notification_show_path(user_id: @notification.user.id, id: @notification.id)
      render json: {
        notification: @notification
      }, status: :ok
    else
      render json: {
        errors: @notification.erros
      }, status: 422
    end
  end

  def update
    @notification = Notification.find(params[:id])

    if @notification.update_attributes(notification_params)
      flash[:success] = '更新しました!!'
      redirect_to notification_show_path(user_id: params[:user_id], id: @notification.id)
      render json: {
        notification: @notification
      }
    else
      redirect_to request.referer
      render json: {
        erros: notification.errors,
      }, status: 422
    end
  end

  def destroy
    @notification = Notification.find(params[:id])
    # authorize! :delete, @notification, message: '他人のアイテムを削除する権限がありません。'
    # redirect_to request.referer if cannot? :destroy, @notification
    @notification.destroy
    flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :success
    redirect_to user_notification_path(user_id: @notification.user.id)
  end


private

def notification_params
  params.require(:notification).permit(:id, :user_id, :coordinate_id, :item_id, :season, :tpo, :rating, :color, :description, :price, :size, :gender,
                               :image, :content)
end

end
end
end
