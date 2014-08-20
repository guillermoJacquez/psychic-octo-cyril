function address(){
	
	this.line1;
	this.line2;
	this.line3;
	
	this.city;
	this.state;
	this.zipCode;
	
	this.getFullAddress = function(){
		return this.line1 + " " + this.line2;
	}
	
	this.getFullCityStateZip = function(){
		return this.city + " " + this.state + ", " + this.zipCode;
	}
	
}