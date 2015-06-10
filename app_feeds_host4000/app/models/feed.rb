class Feed < ActiveRecord::Base
	def mashable
		@mashable = Mashable.notices
	end
end
