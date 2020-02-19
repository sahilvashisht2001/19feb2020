var msg = require('./message.js');
console.log(msg);

/*var msg = require('./Log.js');

msg.log('helloworld');
*/
var person=require('./data.js');
console.log(person.firstName+" "+person.lastName);

var msg=require('./log.js');
msg('helloworld')


var person = require('./person.js');

var person1 = new person('James', 'Bond');
console.log(person1.fullName());












