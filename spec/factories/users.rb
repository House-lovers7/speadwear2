# frozen_string_literal: true

FactoryBot.define do
  factory :admin, class: User do
    sequence(:id, &:to_s)
    sequence(:email) { |n| "admin#{n}@example.com" } # シーケンスを使う
    name { 'Admin' }
    # email { 'admin@example.com' }
    password { 'admin_pass' }
    # password_digest {User.digest("admin_pass" )}
    admin { true }
    picture do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/satan.png'))
    end
    activated { true }
    activated_at { Time.zone.now }
  end

  factory :other, class: User do
    id { 2 }
    name { 'Other' }
    email { 'others@example.com' }
    password { 'others_pass' }
    admin { false }
    picture do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/fox.jpg'))
    end
    activated { true }
    activated_at { Time.zone.now }
  end

  factory :blockuser, class: User do
    id { 3 }
    name { 'Blockuser' }
    email { 'block@example.com' }
    password { 'SecureRandom.urlsafe_base64' }
    admin { false }
    picture do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/guy.png'))
    end
    activated { true }
    activated_at { Time.zone.now }
  end

  factory :guestuser, class: User do
    id { 4 }
    name { 'Guest' }
    email { 'guest@example.com' }
    password { 'SecureRandom.urlsafe_base64' }
    admin { false }
    picture do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/guest.png'))
    end
    activated { true }
    activated_at { Time.zone.now }
  end

  factory :testuser, class: User do
    id { 5 }
    name { 'Testuser' }
    email { 'test@example.com' }
    password { 'SecureRandom.urlsafe_base64' }
    admin { false }
    picture do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/woman.png'))
    end
    activated { true }
    activated_at { Time.zone.now }
  end

  factory :user, class: User do
    id { 6 }
    name { 'user' }
    sequence(:email) { |n| "user#{n}@example.com" } # シーケンスを使う
    sequence(:password) { |n| "user#{n}_pass" } # シーケンスを使う
    admin { false }
    # picture do
    #   Rack::Test::UploadedFile.new(File.join(Rails.root,
    #                                          'spec/fixtures/guy2.png'))
    # end
    activated { true }
    activated_at { Time.zone.now }
  end

  factory :friend, class: User do
    id {  7 }
    name { 'Friend' }
    email { 'friend@example.com' }
    password { 'friend_pass' }
    # password_digest {User.digest("admin_pass" )}
    admin { false }
    friend { true }
    picture do
      Rack::Test::UploadedFile.new(File.join(Rails.root,
                                             'spec/fixtures/fish.png'))
    end
    activated { true }
    activated_at { Time.zone.now }
  end
end
end
