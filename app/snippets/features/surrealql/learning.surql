-- Add a field which is based on other fields when a value is not specified
DEFINE FIELD won ON opportunity TYPE boolean
	LEARN FROM
		confidence,
		person.tags,
		person->sent->email.body
;

-- We are specifying the 'won' field, so it will use this to learn
CREATE opportunity SET won = true, confidence = 7, person = person:valeria;

-- We are specifying the 'won' field, so it will use this to learn
CREATE opportunity SET won = false, confidence = 3, person = person:jonathan;

-- Here the 'won' field is calculated with machine learning
CREATE opportunity SET confidence = 6, person = person:steven;
