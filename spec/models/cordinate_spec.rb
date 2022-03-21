# rspec ./spec/models/coordinate_spec.rb
# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Coordinate, type: :model do
  let!(:user) { create(:user) }
  let!(:admin) { create(:admin) }
  let!(:item1) { build(:item1, user_id: admin.id, coordinate_id: coordinate1.id) }
  let!(:coordinate1) { build(:coordinate1, user_id: admin.id) }
  let!(:coordinate2) { build(:coordinate2, user_id: admin.id) }

  let!(:item1) { build(:item1, user_id: admin.id, coordinate_id: coordinate1.id) }
  let!(:item2) { build(:item2, user_id: admin.id, coordinate_id: coordinate1.id) }

  let!(:comment1)  { build(:comment1, user_id: user.id, coordinate_id: coordinate1.id) }
  let!(:comment2)  { build(:comment2, user_id: user.id, coordinate_id: coordinate1.id) }

  let!(:likecordiante1) { build(:likecoordinate1, user_id: user.id, coordinate_id: coordinate1.id) }

  describe '存在性チェック' do
    # SCCESS!!
    it 'buildデータが有効であること ' do
      expect(coordinate1).to be_valid
    end

    # SCCESS!!
    it 'seasonがなければ無効な状態であること' do
      coordinate1.season = nil
      coordinate1.valid?
      expect(coordinate1.errors[:season]).to include('を入力してください')
    end

    # SCCESS!!
    it 'tpoがなければ無効な状態であること' do
      coordinate1.tpo = nil
      coordinate1.valid?
      expect(coordinate1.errors[:tpo]).to include('を入力してください')
    end

    # ratingがなければ無効な状態であること
    # FAILER!!! デフォルトの設定があるからか？？
    it 'is invalid without a rating' do
      coordinate1.rating = nil
      coordinate1.valid?
      expect(coordinate1.errors[:rating]).to include('を入力してください')
    end

    # SCCESS!!
    describe 'メモの長さ' do
      it '141文字のメモは無効であること' do
        coordinate1.memo = 'あ' * 141
        coordinate1.valid?
        expect(coordinate1.errors[:memo]).to include('は140文字以内で入力してください')
      end

      it '140文字のメモは有効であること' do
        coordinate1.title = 'あ' * 140
        expect(coordinate1).to be_valid
      end
    end

    describe '削除の依存関係' do
      before do
        coordinate1.save
      end

      it '削除すると、紐づくcommentも全て削除されること' do
        coordinate1.save
        comment1.save
        comment2.save
        expect do
          delete coordinate_delete_path(coordinate1)
        end.to change(Comment.all, :count).by(-2)
      end

      it '削除すると、紐づくlikecoordinateも全て削除されること' do
        likecordiante1.save
        expect do
          delete coordinate_delete_path(coordinate1)
        end.to change(Likecoordinate.all, :count).by(-1)
      end
    end
  end
end

# coordinate_delete_path	DELETE	/users/:user_id/coordinates/:id(.:format)
# coordinates#destroy
