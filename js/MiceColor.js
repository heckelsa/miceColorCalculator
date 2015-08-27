var coatColorCollection = [
		{"geneCode":"AABB", "coatColor":"Black"},
		{"geneCode":"AaBb", "coatColor":"Brown"},
		{"geneCode":"aaBB", "coatColor":"white"}
	];


var coatColor = function(agouti, black) {
	var geneCodeVariable = agouti + "" + black;
	for (var key in coatColorCollection) {
		if (coatColorCollection.hasOwnProperty(key)) {
			if(coatColorCollection[key].geneCode == geneCodeVariable){
				return coatColorCollection[key].coatColor;
			}
		}
	}
};

var ViewModel = function(agouti, black) {
		
	this.agouti = ko.observable(agouti);
	this.black = ko.observable(black);
	
	this.currentCoatColor = ko.computed(function() {
			var currentCoatColor = coatColor(this.agouti(), this.black());
			return currentCoatColor;
	}, this);
	
	
};



ko.applyBindings(new ViewModel("AA", "BB"));



