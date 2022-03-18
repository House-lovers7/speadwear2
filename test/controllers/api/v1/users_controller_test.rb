require "test_helper"

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get api/v1/items" do
    get api_v1_users_api/v1/items_url
    assert_response :success
  end
end
