class Api::V1::PasswordResetsController < ApplicationController

  def index
    render json: {
      passwordResets: PasswordReset.all
    }
  end

  def show
    @passwordReset = PasswordReset.find(prams[:id])

    render json: {
      passwordReset: @passwordReset,
        }, status: :ok
  end

  def create
    @passwordReset = PasswordReset.new(passwordReset_params)
    @passwordReset.user_id = params[:user_id]

    if @passwordReset.save!
      flash[:success] = 'PasswordResetを作成しました!'
      redirect_to passwordReset_show_path(user_id: @passwordReset.user.id, id: @passwordReset.id)
      render json: {
        passwordReset: @passwordReset
      }, status: :ok
    else
      render json: {
        errors: @passwordReset.erros
      }, status: 422
    end
  end

  def update
    @passwordReset = PasswordReset.find(params[:id])

    if @passwordReset.update_attributes(passwordReset_params)
      flash[:success] = '更新しました!!'
      redirect_to passwordReset_show_path(user_id: params[:user_id], id: @passwordReset.id)
      render json: {
        passwordReset: @passwordReset
      }
    else
      redirect_to request.referer
      render json: {
        erros: passwordReset.errors,
      }, status: 422
    end
  end

  def destroy
    @passwordReset = PasswordReset.find(params[:id])
    # authorize! :delete, @passwordReset, message: '他人のアイテムを削除する権限がありません。'
    # redirect_to request.referer if cannot? :destroy, @passwordReset
    @passwordReset.destroy
    flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :success
    redirect_to user_passwordReset_path(user_id: @passwordReset.user.id)
  end


private

def passwordReset_params
  params.require(:passwordReset).permit(:id, :user_id, :super_passwordReset, :season, :tpo, :storage, :rating, :color, :memo,
                               :picture, :content)
end

end
