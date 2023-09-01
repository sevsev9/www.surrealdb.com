// Where you previously had to manually assert that a field does not contain NONE or NULL
DEFINE FIELD age ON person TYPE number ASSERT $value != NONE AND $value != NULL;

// You can now simply set the type and be ensured that only a number will be stored in that field.
DEFINE FIELD age ON person TYPE number;

// To make types optional, you can use the newly introduced "option<type>" type.
// This guarantees the field to be either empty (NONE), or a number.
DEFINE FIELD age ON person TYPE option<number>;

// We also introduces some new types!
DEFINE FIELD ratings 		ON movie 	TYPE array<number>;
DEFINE FIELD best_ratings 	ON movie 	TYPE array<number, 5>;
DEFINE FIELD unique_ratings ON movie 	TYPE set<number, 5>;

// And we made sure that the record type is also in-line with this new format
DEFINE FIELD author 		ON book 	TYPE record<person>;

// Lastly, it is now possible to set a union type.
DEFINE FIELD title 			ON article 	TYPE string | number;
// They can also be used in "nested" types
DEFINE FIELD description 	ON article 	TYPE option<string | number>;
DEFINE FIELD author 		ON article 	TYPE record<person | admin>;
