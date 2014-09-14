class PetsController < ApplicationController
	respond_to :html, :json

	def new
		@pet = Pet.new
	end

	def show
	end

	def create
		@pet = Pet.new(pet_params)

		if @pet.valid? and @pet.save
			respond_to do |format|
				# format.html { redirect_to @pet }
				format.json { render json: @pet }
			end
		else
			render :new
		end
	end

	private
		def pet_params
			params[:pet].permit(:name, :breed, :description, :email, :phone, :area_code, :city, :state, :status)
		end
end