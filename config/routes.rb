# frozen_string_literal: true
Rails.application.routes.draw do
  # namespaceはlocationの設定
  namespace :api do
    namespace :v1 do
      # 認証設定
      post '/signup', to: 'registrations#signup'
      post '/login', to: 'sessions#login'
      delete '/logout', to: 'sessions#logout'
      get '/logged_in', to: 'sessions#logged_in?'

      get 'items/all', to: 'items#allitems'
      get 'coordinates/all', to: 'coordinates#allcoordinates'
      # users関連Start
      resources :users do
        # memberメソッド
        member do
          get :following, :followers, :blocking, :blockers
        end
        resources :coordinates
        resources :items
      end
        # users関連End
      resources :blocks, only: %i[create destroy]
      resources :relationships, only: %i[create destroy]
      resources :password_resets, only: %i[new create edit update]
      resources :account_activations, only: [:edit]
      resources :password_resets, only: %i[new create edit update]
      resources :microposts, only: %i[create destroy]

    end
  end
end
