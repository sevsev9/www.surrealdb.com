-- Return a simple value
RETURN 123;
RETURN "I am a string!";
RETURN {
	prop: "value"
};

-- Return the result of a query
RETURN SELECT * FROM person;
RETURN (CREATE person).id;
