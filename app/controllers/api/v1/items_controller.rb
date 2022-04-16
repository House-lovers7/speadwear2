module Api
  module V1

class ItemsController < ApplicationController

  def index
    render json: {
      items: Item.all.order("created_at DESC")
    }
  end

  def show
    @item = Item.find(params[:id])

    render json: {
      item: @item,
      item_image: @item.item_image
        }, status: :ok
  end

  def create
    @item = Item.new(item_params)
    # @item.user_id = params[:user_id]


      if params[:item_image]
        blob = ActiveStorage::Blob.create_and_upload!(
          io: StringIO.new(decode(params[:item_image][:data]) + "\n"),
          filename: params[:item_image][:name]
          )
        @item.item_image.attach(blob)
      @item.save!
      render json: { item: @item }
    else
      render status: 422, json: { errors: @item.errors.full_messages } #手動でステータス入れないと200になるぽい
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
    # flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :ok
    # redirect_to user_item_path(user_id: @item.user.id)
  end


  def search

    @filter_item = Item.where(season: params[:season]) if params[:season] != nil
    @filter_item = @filter_item.where(tpo: params[:tpo]) if params[:tpo] != nil
    @filter_item = @filter_item.where(super_item: params[:super_item]) if params[:super_item] != nil
    @filter_item = @filter_item.where(rating: params[:rating]) if params[:rating] != nil

    @item = @filter_item

    render json: {
      item: @item,
        }, status: :ok

        binding.pry
  end


private

  def decode(str)
    Base64.decode64(str.split(',').last)
  end

  def item_params
    params.require(:item).permit(:user_id, :super_item, :season, :tpo, :color,:content, :gender, :size, :price, :description, :item_image, :rating)
  end

end
end
end
