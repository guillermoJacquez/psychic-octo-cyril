function person()
{
	this.id;
	this.status;
	this.firstName;
	this.lastName;
	this.gender;

	this.getFullName = function(){
		return this.firstName + " " + this.lastName;
	}

}