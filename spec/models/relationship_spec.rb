# rspec ./spec/models/relationship_spec.rb
# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Relationship, type: :model do
  let!(:user) { build(:user) }
  let!(:admin) { build(:admin) }
  let!(:other) { build(:other) }
  let!(:blockuser) { build(:blockuser) }
  let!(:relationship1) { build(:relationship1, follower_id: admin.id, followed_id: other.id) }
  let!(:relationship2) { build(:relationship2, follower_id: admin.id, followed_id: blockuser.id) }
  let!(:relationship3) { build(:relationship3, follower_id: other.id, followed_id: blockuser.id) }

  # SUCCESS!!
  describe '存在性チェック' do
    it 'is valid with test data' do
      admin.save
      other.save
      expect(relationship1).to be_valid
    end
    # SUCCESS!!
    it 'follower_idがなければ無効な状態であること' do
      relationship1.follower_id = nil
      relationship1.valid?
      expect(relationship1.errors[:follower_id]).to include('を入力してください')
    end

    # SUCCESS!!
    it 'followed_idがなければ無効な状態であること' do
      relationship1.followed_id = nil
      relationship1.valid?
      expect(relationship1.errors[:followed_id]).to include('を入力してください')
    end
  end

  # FAILER!!
  it '自分自身をフォローできないこと' do
    relationship1.followed_id = admin.id
    relationship1.valid?
    expect(relationship1.errors[:followed_id]).to include('自分自身をフォローすることはできません')
  end

  # FAILER!!
  it '同じ人を2回以上フォローできないこと' do
    relationship = Relationship.new(followed_id: admin.id,
                                    follower_id: other.id)
    relationship.valid?
    expect(relationship.errors[:followed_id]).to include('はすでに存在します')
  end

  # FAILER!!
  it '作成と削除ができること' do
    relationship1 = Relationship.new(follower_id: admin.id, followed_id: other.id)
    expect do
    end.to change(Relationship.all, :count).by(1)
    expect do
      relationship1.destroy
    end.to change(Relationship.all, :count).by(-1)
  end
end
