const person = {
	firstName: "Ada",
	lastName: "Lovelace",
	  getFullName: function() {
		return `My name is ${this.firstName} ${this.lastName}`;
	  }

};
console.log(person.getFullName());
