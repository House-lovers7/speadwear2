module Api
  module V1
class BlocksController < ApplicationController

  def index
    render json: {
      blocks: Block.all
    }
  end

  def show
    @block = Block.find(params[:id])

    render json: {
      block: @block,
        }, status: :ok
  end

  def create
    @block = Block.new(block_params)
    @block.user_id = params[:user_id]

    if @block.save!
      flash[:success] = 'Blockを作成しました!'
      redirect_to block_show_path(user_id: @block.user.id, id: @block.id)
      render json: {
        block: @block
      }, status: :ok
    else
      render json: {
        errors: @block.erros
      }, status: 422
    end
  end

  def update
    @block = Block.find(params[:id])

    if @block.update_attributes(block_params)
      flash[:success] = '更新しました!!'
      redirect_to block_show_path(user_id: params[:user_id], id: @block.id)
      render json: {
        block: @block
      }
    else
      redirect_to request.referer
      render json: {
        erros: block.errors,
      }, status: 422
    end
  end

  def destroy
    @block = Block.find(params[:id])
    # authorize! :delete, @block, message: '他人のアイテムを削除する権限がありません。'
    # redirect_to request.referer if cannot? :destroy, @block
    @block.destroy
    flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :success
    redirect_to user_block_path(user_id: @block.user.id)
  end


private

def block_params
  params.require(:block).permit(:id, :user_id, :super_block, :season, :tpo, :storage, :rating, :color, :description, :price, :size, :gender,
                               :image, :content)
end

end
end
end
