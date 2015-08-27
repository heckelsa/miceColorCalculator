var coatColorCollection = [
	/* Agouti: A- B- C- D- E- P- */
	{"geneCode":"AABBCCDDEEPP", "coatColor":"Agouti"},
	{"geneCode":"AaBbCcDdEePP", "coatColor":"Agouti"},
	{"geneCode":"AaBBCCDDEEPP", "coatColor":"Agouti"},
	{"geneCode":"AABbCCDDEEPP", "coatColor":"Agouti"},
	{"geneCode":"AABBCcDDEEPP", "coatColor":"Agouti"},
	{"geneCode":"AABBCCDdEEPP", "coatColor":"Agouti"},
	{"geneCode":"AABBCCDDEePP", "coatColor":"Agouti"},

	/* Cinnamon: A- bb C- D- E- P- */
	{"geneCode":"AAbbCCDDEEPP", "coatColor":"Cinnamon"},
	{"geneCode":"AabbCcDdEePP", "coatColor":"Cinnamon"},
	{"geneCode":"AabbCCDDEEPP", "coatColor":"Cinnamon"},
	{"geneCode":"AAbbCcDDEEPP", "coatColor":"Cinnamon"},
	{"geneCode":"AAbbCCDdEEPP", "coatColor":"Cinnamon"},
	{"geneCode":"AAbbCCDDEePP", "coatColor":"Cinnamon"},

	/* Blue Agouti: A- B- C- dd E- P- */
	{"geneCode":"AABBCCddEEPP", "coatColor":"Blue Agouti"},

	/* Rezessive Yellow: A- B- C- D- ee P- */
	{"geneCode":"AABBCCDDeePP", "coatColor":"Rezessive Yellow"},

	/* Argente: A- B- C- D- E- pp */
	{"geneCode":"AABBCCDDEEpp", "coatColor":"Argente"},

	/* Black: aa B- C- D- E- P- */
	{"geneCode":"aaBBCCDDEEPP", "coatColor":"Black"}
];

var coatColor = function(geneCode) {
							
	for (var key in coatColorCollection) {
		if (coatColorCollection.hasOwnProperty(key)) {

			if(coatColorCollection[key].geneCode == geneCode){
				return coatColorCollection[key].coatColor;
			}
		}
	}
};

var ViewModel = function(agouti1, agouti2, black1, black2, albino1, albino2, dilution1, dilution2, 
							extension1, extension2, pinkeyed1, pinkeyed2) {
		
	this.agouti1 = ko.observable(agouti1);
	this.agouti2 = ko.observable(agouti2);

	this.black1 = ko.observable(black1);
	this.black2 = ko.observable(black2);

	this.albino1 = ko.observable(albino1);
	this.albino2 = ko.observable(albino2);

	this.dilution1 = ko.observable(dilution1);
	this.dilution2 = ko.observable(dilution2);

	this.extension1 = ko.observable(extension1);
	this.extension2 = ko.observable(extension2);

	this.pinkeyed1 = ko.observable(pinkeyed1);
	this.pinkeyed2 = ko.observable(pinkeyed2);
	
	this.currentCoatColor = ko.computed(function() {
			this.currentGeneCode = this.agouti1() + this.agouti2() + this.black1() + this.black2() + 
								this.albino1() + this.albino2() + this.dilution1() + 
								this.dilution2() + this.extension1() + this.extension2() + 
								this.pinkeyed1() + this.pinkeyed2();

			var currentCoatColor = coatColor(this.currentGeneCode);

			return currentCoatColor;
	}, this);
	
};

ko.applyBindings(new ViewModel());



