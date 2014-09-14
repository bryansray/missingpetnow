class WelcomeController < ApplicationController
	def index
		@pets = Pet.where(active: true)
		@lost_pets = Pet.where(active: true, status: :lost)
		@found_pets = Pet.where(active: true, status: :found)
	end
end
