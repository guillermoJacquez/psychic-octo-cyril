function person(id, address)
{
	this.id = id;
	this.status;
	this.firstName;
	this.lastName;
	this.gender;
	this.address = address;
	this.birthday;
	this.type;

	this.getFullName = function(){
		return this.firstName + " " + this.lastName;
	}

}