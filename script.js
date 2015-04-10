
// fat arrow methods and object desctructuring
const multi = (x, y) => x * y;
const [first, second] = [5, 3];
console.log(multi(first, second));

// generator
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let it = foo();

console.log(it.next());
console.log(it.next());
console.log(it.next());

// property value & method shorthand
const preferences = { notifications: true };
const user = {
	name: 'luke',
	preferences,
	showPrefs() {
		console.log('Hi ' + this.name);
		if (this.preferences.notifications)
		{
			console.log('Your have enabled notifications.	')
		}
	}
};
console.log(user.preferences.notifications);
user.showPrefs();

// template strings
console.log(`This is convenient ${user.name}`);

console.log('-'.repeat(30));

let sentence = `Well this could be 
quite a long string
with multiple lines`;

console.log(sentence);


// classes
class Company {
  constructor(options) {
    this.name = options.name;
  }
}

const acmeInc = new Company({
  name: 'acme'
});
