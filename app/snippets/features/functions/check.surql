SELECT email, string::is::email(email) AS valid FROM user;
