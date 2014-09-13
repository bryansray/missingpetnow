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
		addNew: function( event, template ) {
			console.log(event, template, this);
			$("#new-pet-container").modal();
			this.set('addNew', true);
		}
	});


	// $(".card")
	// 	.velocity("slideDown", { duration: 800 })
	// 	.velocity("fadeIn", { duration: 1400, queue: false });
});