SELECT email, string::is_email(email) AS valid FROM user;
