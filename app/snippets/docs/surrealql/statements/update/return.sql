-- Don't return any result
UPDATE person SET interests += 'reading' RETURN NONE;

-- Return the changeset diff
UPDATE person SET interests += 'reading' RETURN DIFF;

-- Return the record before changes were applied
UPDATE person SET interests += 'reading' RETURN BEFORE;

-- Return the record after changes were applied (the default)
UPDATE person SET interests += 'reading' RETURN AFTER;

-- Return a specific field only from the updated records
UPDATE person:tobie SET interests = ['skiing', 'music'] RETURN name, interests;
