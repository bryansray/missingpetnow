$(document).ready(function() {
	var ractive = new Ractive({
		el: '#container',
		template: '#main-template',

		data: {
			addNew: false,

			lostPets: lostPets,
			foundPets: foundPets,

			breed: undefined,
			breeds: [{ id: 1, name: "Boxer" }, { id: 2, name: "Rottweiler"} ]
		}
	});

	ractive.on({
		addNew: function( event, status ) {
			console.log(arguments);
			$("#new-pet-container").modal();
			$("#pet_name").focus();
			this.set('addNew', true);
			this.set('status', status);
		},

		submit: function( template ) {
			console.log( arguments );

			return false;
		},

		status: function( event, status ) {
			this.set('status', status);
		}
	});

	$("#new-pet-container").on("shown.bs.modal", function() {
		console.log("modal shown: ", $("#pet_name").focus());
	});


	// $(".card")
	// 	.velocity("slideDown", { duration: 800 })
	// 	.velocity("fadeIn", { duration: 1400, queue: false });
});