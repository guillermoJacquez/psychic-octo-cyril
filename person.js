function person()
{
	this.ID = 0;
	this.firstName = "";
	this.lastName = "";
	this.middleName = "";

	this.getFullName = function(){
		return this.firstName + " " + this.middleName + " "  + this.lastName;
	}
	
}