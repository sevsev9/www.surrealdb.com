IF ($something == true) THEN {
	-- It is important to note that RETURN will not break out of a block/transaction.
	-- In fact, you can add as many RETURN statements as you want, but only the result of the last one will actually be returned.
	RETURN false;
	RETURN "I am also executed!";
} END;
