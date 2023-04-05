-- Create a new event whenever a user changes their email address
DEFINE EVENT email ON TABLE user WHEN $before.email != $after.email THEN (
	CREATE event SET user = $value.id, time = time::now(), value = $after.email, action = 'email_changed'
);
