const person = {
	name: "jordan",
	age: 28,
	address: {
		city: "Lagos",
		country: "Nigeria"
	}
};
console.log(person.name);
console.log(person.age);
console.log(person.address.city);

console.log(person ['address']['city']);
