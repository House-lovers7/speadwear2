module Api
  module V1
class LikeCoordinatesController < ApplicationController

  def index
    render json: {
      likeCoordinates: LikeCoordinate.all.order("created_at DESC")
    }
  end

  def show
    @likeCoordinate = LikeCoordinate.find(params[:id])

    render json: {
      likeCoordinate: @likeCoordinate,
        }, status: :ok
  end

  def create
    @likeCoordinate = LikeCoordinate.new(likeCoordinate_params)
    @likeCoordinate.user_id = params[:user_id]

    if @likeCoordinate.save!
      flash[:success] = 'LikeCoordinateを作成しました!'
      redirect_to likeCoordinate_show_path(user_id: @likeCoordinate.user.id, id: @likeCoordinate.id)
      render json: {
        likeCoordinate: @likeCoordinate
      }, status: :ok
    else
      render json: {
        errors: @likeCoordinate.erros
      }, status: 422
    end
  end

  def update
    @likeCoordinate = LikeCoordinate.find(params[:id])

    if @likeCoordinate.update_attributes(likeCoordinate_params)
      flash[:success] = '更新しました!!'
      redirect_to likeCoordinate_show_path(user_id: params[:user_id], id: @likeCoordinate.id)
      render json: {
        likeCoordinate: @likeCoordinate
      }
    else
      redirect_to request.referer
      render json: {
        erros: likeCoordinate.errors,
      }, status: 422
    end
  end

  def destroy
    @likeCoordinate = LikeCoordinate.find(params[:id])
    # authorize! :delete, @likeCoordinate, message: '他人のアイテムを削除する権限がありません。'
    # redirect_to request.referer if cannot? :destroy, @likeCoordinate
    @likeCoordinate.destroy
    flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :success
    redirect_to user_likeCoordinate_path(user_id: @likeCoordinate.user.id)
  end


private

def likeCoordinate_params
  params.require(:likeCoordinate).permit(:id, :user_id, :super_likeCoordinate, :season, :tpo, :storage, :rating, :color, :description, :price, :size, :gender,
                               :image, :content)
end

end
end
end
