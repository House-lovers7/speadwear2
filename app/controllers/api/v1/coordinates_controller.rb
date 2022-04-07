module Api
  module V1

class CoordinatesController < ApplicationController

  def index
    render json: {
      coordinates: Coordinate.all.order("created_at DESC")
    }
  end

  def show
    @coordinate = Coordinate.find(params[:id])

    render json: {
      coordinate: @coordinate,
        }, status: :ok
  end

  def create
    @coordinate = Coordinate.new(coordinate_params)
    @coordinate.user_id = params[:user_id]

    if @coordinate.save!
      flash[:success] = 'Coordinateを作成しました!'
      redirect_to coordinate_show_path(user_id: @coordinate.user.id, id: @coordinate.id)
      render json: {
        coordinate: @coordinate
      }, status: :ok
    else
      render json: {
        errors: @coordinate.erros
      }, status: 422
    end
  end

  def update
    @coordinate = Coordinate.find(params[:id])

    if @coordinate.update_attributes(coordinate_params)
      flash[:success] = '更新しました!!'
      redirect_to coordinate_show_path(user_id: params[:user_id], id: @coordinate.id)
      render json: {
        coordinate: @coordinate
      }
    else
      redirect_to request.referer
      render json: {
        erros: coordinate.errors,
      }, status: 422
    end
  end

  def destroy
    @coordinate = Coordinate.find(params[:id])
    # authorize! :delete, @coordinate, message: '他人のアイテムを削除する権限がありません。'
    # redirect_to request.referer if cannot? :destroy, @coordinate
    @coordinate.destroy
    flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :success
    redirect_to user_coordinate_path(user_id: @coordinate.user.id)
  end


private

def coordinate_params
  params.require(:coordinate).permit(:id, :user_id, :item_id, :comment_id, :likecoordinate_id, :season, :tpo, :gender, :size, :price, :image, :rating, :si_shoes, :si_bottoms, :si_tops, :si_outer, :description, :rating )
end

end
end
end
