function address(type){
	
	// Address type [home, shipping]
	this.type = type;
	
	// Address Lines
	this.line1;
	this.line2;
	this.line3;
	
	// City State Zip
	this.city;
	this.state;
	this.zipCode;
	
	// Country
	this.country
	
	// Get First Line
	this.getAddress = function(){
		return this.line1 + " " + this.line2 + " " + this.line3;
	}
	
	// Get City State Zip
	this.getCityStateZip = function(){
		return this.city + " " + this.state + ", " + this.zipCode;
	}
	
}