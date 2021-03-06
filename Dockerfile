FROM ruby:2.7
RUN apt-get update && apt-get install -y nodejs --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y postgresql-client --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /speadwear2

ADD Gemfile /speadwear2/Gemfile
ADD Gemfile.lock /speadwear2/Gemfile.lock

RUN gem install bundler
RUN bundle install

ADD . /speadwear
