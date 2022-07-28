// Signin and retrieve a JSON Web Token
let jwt = fetch('https://api.surrealdb.com/signup', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'NS': 'google', // Specify the namespace
		'DB': 'gmail', // Specify the database
    },
	body: JSON.stringify({
		email: 'tobie@surrealdb.com',
		pass: 'a85b19*1@jnta0$b&!'
	}),
});
