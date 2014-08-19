function person()
{
	this.ID = 0;
	this.status = 0;
	this.firstName = "";
	this.lastName = "";

	this.getFullName = function(){
		return this.firstName + " " + this.lastName;
	}

}