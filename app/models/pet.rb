class Pet
	attr_accessor :name, :description, :image

	def initialize(name, description, image)
		@name = name
		@description = description
		@image = image
	end
end