class ApplicationController < ActionController::API
  skip_before_action :your_method_name, raise: false
  before_action :underscore_params!


  # helper_method :login!, :current_user


  def login!
      session[:user_id] = @user.id
  end

  def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  private

  def underscore_params!
    params.deep_transform_keys!(&:underscore)
  end

end
