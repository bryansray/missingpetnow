class WelcomeController < ApplicationController
	def index
		@lost_pets = Pet.where(active: true, status: :lost)
		@found_pets = Pet.where(active: true, status: :found)
		@pet = Pet.new
	end
end
