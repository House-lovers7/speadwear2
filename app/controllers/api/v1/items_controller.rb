class Api::V1::ItemsController < ApplicationController

  def index
    render json: {
      items: Item.all
    }
  end

  def show
    @item = Item.find(params[:id])

    render json: {
      item: @item,
        }, status: :ok
  end

  def create
    @item = Item.new(item_params)
    @item.user_id = params[:user_id]

    if @item.save!
      flash[:success] = 'Itemを作成しました!'
      redirect_to item_show_path(user_id: @item.user.id, id: @item.id)
      render json: {
        item: @item
      }, status: :ok
    else
      render json: {
        errors: @item.erros
      }, status: 422
    end
  end

  def update
    @item = Item.find(params[:id])

    if @item.update_attributes(item_params)
      flash[:success] = '更新しました!!'
      redirect_to item_show_path(user_id: params[:user_id], id: @item.id)
      render json: {
        item: @item
      }
    else
      redirect_to request.referer
      render json: {
        erros: item.errors,
      }, status: 422
    end
  end

  def destroy
    @item = Item.find(params[:id])
    # authorize! :delete, @item, message: '他人のアイテムを削除する権限がありません。'
    # redirect_to request.referer if cannot? :destroy, @item
    @item.destroy
    flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :success
    redirect_to user_item_path(user_id: @item.user.id)
  end


private

def item_params
  params.require(:item).permit(:id, :user_id, :super_item, :season, :tpo, :storage, :rating, :color, :memo,
                               :picture, :content)
end

end
