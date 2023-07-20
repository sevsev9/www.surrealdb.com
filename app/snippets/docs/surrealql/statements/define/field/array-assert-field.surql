-- An ACL should be defined for any kind of resource (any record)
DEFINE FIELD resource ON TABLE acl TYPE record 
  ASSERT $value != NONE;
-- An ACL should be defined for a user
DEFINE FIELD user ON TABLE acl TYPE record (user)
  ASSERT $value != NONE;

-- A user can have multiple permissions on an ACL
DEFINE FIELD permissions ON TABLE acl TYPE array
  -- The array must not be empty because at least one permission is required
  ASSERT array::len($value) > 0;

-- Assigned permissions are identified by strings
DEFINE FIELD permissions.* ON TABLE acl TYPE string
  -- Allow only these values in the array
  ASSERT $value INSIDE ["create", "read", "write", "delete"];