var Pet = Backbone.Model.extend({
	initialize: function() {
	},

	urlRoot: '/pets'
});

var PetCollection = Backbone.Collection.extend({
	model: Pet,
	comparator: function(pet) {
		return -pet.get("created_at");
	}
});
