class PetsController < ApplicationController
	def new
		@pet = Pet.new
	end

	def show
	end

	def create
		@pet = Pet.new(pet_params)

		if @pet.valid? and @pet.save
			redirect_to :root
		else
			render :new
		end
	end

	private
		def pet_params
			params[:pet].permit(:name, :breed, :description, :email, :phone, :area_code, :city, :state)
		end
end