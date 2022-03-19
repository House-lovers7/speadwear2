class Api::V1::ItemsController < ApplicationController

  def index
    render json: Item.all
  end

  def show
    render json: Item.find(params[:id])
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render json: item.erros, status: 422
    end
  end

  def update
    item = Item.find(params[:id])
    if item.update(item_params)
      render json: item
    else
      render json: item.errors, status: 422
    end
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy
    render json: item
  end

  private
    def item_params
      params.require(:item).permit(:name, :neko_type)
    end
end

end
