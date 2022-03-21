# spec ./spec/models/notification_spec.rb
# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Notification, type: :model do
  let!(:user) { build(:user) }
  let!(:admin) { build(:admin) }
  let!(:other) { build(:other) }
  let!(:blockuser) { build(:blockuser) }

  let!(:notification1) { create(:notification1, sender_id: other.id, receiver_id: admin.id, coordinate_id: coordinate1.id) }
  let!(:notification2) { create(:notification2, sender_id: other.id, receiver_id: admin.id, coordinate_id: coordinate2.id) }
  let!(:notification3) { create(:notification3, sender_id: blockuser.id, receiver_id: admin.id, coordinate_id: coordinate3.id) }
  let!(:notification4) { create(:notification4, sender_id: blockuser.id, receiver_id: other.id, comment_id: comment4.id) }

  let!(:coordinate1) { create(:coordinate1, user_id: admin.id) }
  let!(:coordinate2) { create(:coordinate2, user_id: admin.id) }
  let!(:coordinate3) { create(:coordinate3, user_id: admin.id) }
  let!(:coordinate4) { create(:coordinate4, user_id: other.id) }
  let!(:coordinate5) { create(:coordinate5, user_id: other.id) }
  let!(:coordinate6) { create(:coordinate6, user_id: other.id) }
  let!(:coordinate7) { create(:coordinate7, user_id: blockuser.id) }
  let!(:coordinate8) { create(:coordinate8, user_id: blockuser.id) }
  let!(:coordinate9) { create(:coordinate9, user_id: blockuser.id) }

  pending "add some examples to (or delete) #{__FILE__}"
end
