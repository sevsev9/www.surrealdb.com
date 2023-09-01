-- This field is required, as indicated by it's type.
DEFINE FIELD age ON person TYPE number;

-- This field can now optionally store the age.
-- This means that the value can be either a number or NONE.
DEFINE FIELD age ON person TYPE option<number>;

-- Notice how the previous example does not allow for NULL.
-- This is because NULL is consider to be a value, but the option type allows either an empty field (NONE), or the passed type.
-- If you want to allow NULL, we also introduced union types in v1.0.0-beta.10!
DEFINE FIELD age ON person TYPE number | null;			-- number and NULL
DEFINE FIELD age ON person TYPE option<number | null>;	-- number, NULL and NONE
