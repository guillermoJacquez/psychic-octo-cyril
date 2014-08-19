function person()
{
	this.firstName = "";
	this.lastName = "";

	this.getFullName = function(){
		return this.firstName + " " + this.lastName;
	}

}