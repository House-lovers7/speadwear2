module Api
  module V1

class CommentsController < ApplicationController

  def index
    render json: {
      comments: Comment.all.order("created_at DESC")
    }
  end

  def show
    @comment = Comment.find(params[:id])

    render json: {
      comment: @comment,
        }, status: :ok
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = params[:user_id]

    if @comment.save!
      flash[:success] = 'Commentを作成しました!'
      redirect_to comment_show_path(user_id: @comment.user.id, id: @comment.id)
      render json: {
        comment: @comment
      }, status: :ok
    else
      render json: {
        errors: @comment.erros
      }, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update_attributes(comment_params)
      flash[:success] = '更新しました!!'
      redirect_to comment_show_path(user_id: params[:user_id], id: @comment.id)
      render json: {
        comment: @comment
      }
    else
      redirect_to request.referer
      render json: {
        erros: comment.errors,
      }, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    # authorize! :delete, @comment, message: '他人のアイテムを削除する権限がありません。'
    # redirect_to request.referer if cannot? :destroy, @comment
    @comment.destroy
    flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :success
    redirect_to user_comment_path(user_id: @comment.user.id)
  end

private

def comment_params
  params.require(:comment).permit(:id, :user_id,:item_id,:coordinate_id, :comment)
end

end
end
end
