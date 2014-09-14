$(document).ready(function() {
	var pets = new PetCollection(petsJson);

	var ractive = new Ractive({
		el: '#container',
		template: '#main-template',

		data: {
			pets: pets.models,
			breeds: [{ id: 1, name: "Boxer" }, { id: 2, name: "Rottweiler"} ],

			pet: {
			},

			exclude: function(list, status) {
				return _.filter(list, function(item) { return item.get('status') !== status });
			}
		},

		adapt: ['Backbone']
	});

	ractive.on({
		addNew: function( event, status ) {
			$("#new-pet-container").modal();
			this.set('pet.status', status);
		},

		submit: function( event ) {
			event.original.preventDefault();

			var pet = new Pet(this.data.pet);
			pet.save();
			this.push('pets', pet);

			$("#new-pet-container").modal('hide');
		},

		status: function( event, status ) {
			this.set('pet.status', status);
		}
	});

	$("#new-pet-container").on("shown.bs.modal", function() {
		$("#pet_name").focus();
	});


	// $(".card")
	// 	.velocity("slideDown", { duration: 800 })
	// 	.velocity("fadeIn", { duration: 1400, queue: false });
});