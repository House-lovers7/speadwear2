# frozen_string_literal: true

# rspec ./spec/models/likecoordinate_spec.rb

require 'rails_helper'

RSpec.describe Likecoordinate, type: :model do
  # let(:user) { FactoryBot.create(:user) }
  # let(:likecoordinate) { FactoryBot.create(:likecoordinate) }

  # 有効なファクトリを持つこと
  # it "has a valid factory" do
  #   expect { FactoryBot.create(:likecoordinate)}.to change(Likecoordinate).all, :count).by(1)
  # end

  # user_id、coordinate_idの存在
  # describe "presence of user_id, coordinate_id" do
  #   # user_id、comment_idの両方があれば有効な状態であること
  #   it "is valid with a user_id and coordinate_id" do
  #     likecoordinate = Likecoordinate.new(user_id: user.id, coordinate_id: coordinate.id)
  #     expect(likecoordinate).to be_valid
  #   end

  # user_idがなければ無効な状態であること
  it 'is invalid without a user_id' do
    likecoordinate = Likecoordinate.new(user_id: nil, coordinate_id: coordinate.id)
    likecoordinate.valid?
    expect(likecoordinate.errors[:user_id]).to include('を入力してください')
  end

  # coordinate_idがなければ無効な状態であること
  it 'is invalid without a coordinate_id' do
    likecoordinate = Likecoordinate.new(user_id: user.id, coordinate_id: nil)
    likecoordinate.valid?
    expect(likecoordinate.errors[:coordinate_id]).to include('を入力してください')
  end
end

# # 同じコメントを2回以上いいね！できないこと
# it "can not create two likecoordinates for same comment" do
#   Likecoordinate.create(user_id: user.id, coordinate_id: coordinate.id)
#   likecoordinate = Likecoordinate.new(user_id: user.id, coordinate_id: coordinate.id)
#   likecoordinate.valid?
#   expect(likecoordinate.errors[:coordinate_id]).to include("はすでに存在します")
# end

# 作成と削除ができること
# it "can create and destroy" do
#   expect { FactoryBot.create(:likecoordinate) }.to change(Likecoordinate.all, :count).by(1)
#   expect { Likecoordinate.first.destroy }.to change(Likecoordinate.all, :count).by(-1)
# end
