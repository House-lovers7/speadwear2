class Api::V1::SessionsController < ApplicationController

  def index
    render json: {
      sessions: Session.all
    }
  end

  def show
    @session = Session.find(prams[:id])

    render json: {
      session: @session,
        }, status: :ok
  end

  def create
    @session = Session.new(session_params)
    @session.user_id = params[:user_id]

    if @session.save!
      flash[:success] = 'Sessionを作成しました!'
      redirect_to session_show_path(user_id: @session.user.id, id: @session.id)
      render json: {
        session: @session
      }, status: :ok
    else
      render json: {
        errors: @session.erros
      }, status: 422
    end
  end

  def update
    @session = Session.find(params[:id])

    if @session.update_attributes(session_params)
      flash[:success] = '更新しました!!'
      redirect_to session_show_path(user_id: params[:user_id], id: @session.id)
      render json: {
        session: @session
      }
    else
      redirect_to request.referer
      render json: {
        erros: session.errors,
      }, status: 422
    end
  end

  def destroy
    @session = Session.find(params[:id])
    # authorize! :delete, @session, message: '他人のアイテムを削除する権限がありません。'
    # redirect_to request.referer if cannot? :destroy, @session
    @session.destroy
    flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :success
    redirect_to user_session_path(user_id: @session.user.id)
  end


private

def session_params
  params.require(:session).permit(:id, :user_id, :super_session, :season, :tpo, :storage, :rating, :color, :memo,
                               :picture, :content)
end

end
