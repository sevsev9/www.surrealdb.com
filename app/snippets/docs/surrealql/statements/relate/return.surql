-- Don't return any result
RELATE person:l19zjikkw1p1h9o6ixrg->wrote->article:8nkk6uj4yprt49z7y3zm 
    SET time.written = time::now() 
    RETURN NONE;

-- Return the changeset diff
RELATE person:l19zjikkw1p1h9o6ixrg->wrote->article:8nkk6uj4yprt49z7y3zm 
    SET time.written = time::now() 
    RETURN DIFF;

-- Return the record before changes were applied
RELATE person:l19zjikkw1p1h9o6ixrg->wrote->article:8nkk6uj4yprt49z7y3zm 
    SET time.written = time::now() 
    RETURN BEFORE;

-- Return the record after changes were applied (the default)
RELATE person:l19zjikkw1p1h9o6ixrg->wrote->article:8nkk6uj4yprt49z7y3zm 
    SET time.written = time::now() 
    RETURN AFTER;

-- Return a specific field only from the updated records
RELATE person:l19zjikkw1p1h9o6ixrg->wrote->article:8nkk6uj4yprt49z7y3zm 
    SET time.written = time::now() 
    RETURN time;
