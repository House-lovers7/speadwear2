class Api::V1::PasswordResetsController < ApplicationController

  def index
    render json: {
      passwordresets: Passwordreset.all
    }
  end

  def show
    @passwordreset = PasswordReset.find(params[:id])

    render json: {
      passwordReset: @passwordreset,
        }, status: :ok
  end

  def create
    @passwordreset = PasswordReset.new(passwordreset_params)
    @passwordreset.user_id = params[:user_id]

    if @passwordReset.save!
      flash[:success] = 'PasswordResetを作成しました!'
      redirect_to passwordReset_show_path(user_id: @passwordreset.user.id, id: @passwordreset.id)
      render json: {
        passwordReset: @passwordreset
      }, status: :ok
    else
      render json: {
        errors: @passwordreset.erros
      }, status: 422
    end
  end

  def update
    @passwordreset = PasswordReset.find(params[:id])

    if @passwordreset.update_attributes(passwordreset_params)
      flash[:success] = '更新しました!!'
      redirect_to passwordreset_show_path(user_id: params[:user_id], id: @passwordreset.id)
      render json: {
        passwordreset: @passwordreset
      }
    else
      redirect_to request.referer
      render json: {
        erros: passwordreset.errors,
      }, status: 422
    end
  end

  def destroy
    @passwordreset = PasswordReset.find(params[:id])
    # authorize! :delete, @passwordReset, message: '他人のアイテムを削除する権限がありません。'
    # redirect_to request.referer if cannot? :destroy, @passwordReset
    @passwordreset.destroy
    flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :success
    redirect_to user_passwordreset_path(user_id: @passwordreset.user.id)
  end


private

def passwordreset_params
  params.require(:passwordreset).permit(:id, :user_id, :super_passwordreset, :season, :tpo, :storage, :rating, :color, :description, :price, :size, :gender,
                               :image, :content)
end

end
