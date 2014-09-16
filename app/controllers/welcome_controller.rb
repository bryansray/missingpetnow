class WelcomeController < ApplicationController
	def index
		@pets = Pet.where(active: true)
	end
end
