-- Create a new event whenever a user changes their email address
-- One-statement event
DEFINE EVENT email ON TABLE user WHEN $before.email != $after.email THEN (
	CREATE event SET user = $value.id, time = time::now(), value = $after.email, action = 'email_changed'
);

-- Create a relation between a customer and a product whenever a purchase is made
-- Notice the subtle difference when we use multiple statements inside an event: 
-- we have to use {curly brackets} instead of (parenthesis)
DEFINE EVENT purchase ON TABLE purchase WHEN $before == NONE THEN {
    LET $from = (SELECT * FROM customer WHERE id == $after.customer);
    LET $to = (SELECT * FROM product WHERE id == $after.product);

    RELATE $from->purchases->$to CONTENT {
        quantity: $after.quantity,
        total: $after.total,
        status: 'Pending',
    };
};