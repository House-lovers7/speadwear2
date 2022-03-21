# frozen_string_literal: true

require 'rails_helper'
require 'cancan/matchers'

RSpec.describe 'Abilities', type: :request do
  context 'ユーザーがadminの時' do
    let!(:admin) { FactoryBot.build(:admin) }
    let!(:other) { FactoryBot.build(:other) }
    # このスコープ内ではAbilityの生成コードを毎回書かなくても良いようにsubject化
    subject { Ability.new(admin) }
    it { is_expected.to be_able_to(:create, Item.new) }
    it { is_expected.to be_able_to(:destroy, Item.new) }
  end

  context 'ユーザーがadminではない時' do
    let!(:other) { FactoryBot.build(:other) }
    subject { Ability.new(other) }
    it { is_expected.to be_able_to(:create, Item.new) }
    it { is_expected.to_not be_able_to(:destroy, Item.new) }
  end
end

# rspec ./spec/requests/abilities_request_spec.rb
