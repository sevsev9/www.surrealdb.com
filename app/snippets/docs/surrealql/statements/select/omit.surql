-- Omit the password field and security field in the options object
CREATE person:tobie SET name = 'Tobie', password = '123456', opts.security = 'secure';
CREATE person:jaime SET name = 'Jaime', password = 'asdfgh', opts.security = 'secure';
SELECT * OMIT password, opts.security FROM person;
SELECT * FROM person;
