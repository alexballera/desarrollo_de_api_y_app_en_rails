class FeedsController < ApplicationController

	def index
		render json: Feed.notices
	end

	def feed_notices
		render json: Feed.notices
	end

	def mashable_notices
		render json: Feed.mashable
	end

	def reddit_notices
		render json: Feed.reddit
	end

	def digg_notices
		render json: Feed.digg
	end

end
