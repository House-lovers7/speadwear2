class Api::V1::RelationshipsController < ApplicationController

  def index
    render json: {
      relationships: Relationship.all
    }
  end

  def show
    @relationship = Relationship.find(prams[:id])

    render json: {
      relationship: @relationship,
        }, status: :ok
  end

  def create
    @relationship = Relationship.new(relationship_params)
    @relationship.user_id = params[:user_id]

    if @relationship.save!
      flash[:success] = 'Relationshipを作成しました!'
      redirect_to relationship_show_path(user_id: @relationship.user.id, id: @relationship.id)
      render json: {
        relationship: @relationship
      }, status: :ok
    else
      render json: {
        errors: @relationship.erros
      }, status: 422
    end
  end

  def update
    @relationship = Relationship.find(params[:id])

    if @relationship.update_attributes(relationship_params)
      flash[:success] = '更新しました!!'
      redirect_to relationship_show_path(user_id: params[:user_id], id: @relationship.id)
      render json: {
        relationship: @relationship
      }
    else
      redirect_to request.referer
      render json: {
        erros: relationship.errors,
      }, status: 422
    end
  end

  def destroy
    @relationship = Relationship.find(params[:id])
    # authorize! :delete, @relationship, message: '他人のアイテムを削除する権限がありません。'
    # redirect_to request.referer if cannot? :destroy, @relationship
    @relationship.destroy
    flash[:success] = 'アイテムを削除しました!!'
    render json: {}, status: :success
    redirect_to user_relationship_path(user_id: @relationship.user.id)
  end


private

def relationship_params
  params.require(:relationship).permit(:id, :user_id, :super_relationship, :season, :tpo, :storage, :rating, :color, :memo,
                               :picture, :content)
end

end
