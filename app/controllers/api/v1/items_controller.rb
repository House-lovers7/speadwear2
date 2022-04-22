module Api
  module V1

class ItemsController < ApplicationController
before_action :set_ransack_params, only: [:index, :search]

  def index
    render json: {
      items: @items
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
      @item.image = blob.key
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

    render json: {
      items: @item,
        }, status: :ok


binding.pry


  end


private

  def decode(str)
    Base64.decode64(str.split(',').last)
  end

  def set_ransack_params
    @filter_item = Item.where(season: params[:season]) if params[:season] != nil
    # パラメータがふくまれるのか、はじめての絞り込みか、または複数絞りこみか
    if params[:tpo] != nil && @filter_item != nil
      @filter_item = @filter_item.where(tpo: params[:tpo])
    elsif  @filter_item == nil &&  params[:tpo] != nil
      @filter_item = Item.where(tpo: params[:tpo])
    end

    if  params[:super_item] != nil && @filter_item != nil
      @filter_item = @filter_item.where(super_item: params[:super_item])
    elsif  @filter_item == nil &&  params[:super_item] != nil
      @filter_item = Item.where(super_item: params[:super_item])
    end

    if params[:rating] != nil && @filter_item != nil
      @filter_item = @filter_item.where(rating: params[:rating])
    elsif @filter_item == nil &&  params[:rating] != nil
      @filter_item = Item.where(rating: params[:rating])
    end

    # 全てのパラメータがnilでない時だけ代入する。
    if params[:season] != nil && params[:tpo] != nil && params[:super_item] != nil && params[:rating] != nil
      @items = @filter_item
    else
      @items = Item.all.order("created_at DESC")
    end

  end

  def item_params
    params.require(:item).permit(:user_id, :super_item, :season, :tpo, :color,:content, :gender, :size, :price, :description, :item_image, :rating)
  end

end
end
end
