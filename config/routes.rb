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
      post 'items/search', to: 'items#search'
      get 'coordinates/all', to: 'coordinates#allcoordinates'
      # get 'likeCoordinates', to: 'likeCoordinates#index'
      # ransackのItem検索
      resources :items do
        collection do
          get 'search'
        end
      end
# ransackのCoordinate検索
      resources :coordinates do
        collection do
          get 'search'
        end
      end

      # users関連のURL開始
      resources :users do

        collection do
          get 'search'
        end
        # memberメソッド
        member do
          get :following, :followers, :blocking, :blockers
        end
        resources :coordinates do
          member do
            get :comments, :like_coordinates
          end
        end
        resources :items do
          resources :comments do
          end
          member do
            get :comments, :like_items
          end
        end

      end
        # users関連End
      resources :password_resets, only: %i[new create edit update]
      resources :account_activations, only: [:edit]
      resources :microposts, only: %i[create destroy]

    end
  end
end
