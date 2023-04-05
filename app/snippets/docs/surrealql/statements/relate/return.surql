-- Don't return any result
RELATE user:tobie->write->article:surreal SET time.written = time::now() RETURN NONE;

-- Return the changeset diff
RELATE user:tobie->write->article:surreal SET time.written = time::now() RETURN DIFF;

-- Return the record before changes were applied
RELATE user:tobie->write->article:surreal SET time.written = time::now() RETURN BEFORE;

-- Return the record after changes were applied (the default)
RELATE user:tobie->write->article:surreal SET time.written = time::now() RETURN AFTER;

-- Return a specific field only from the updated records
RELATE user:tobie->write->article:surreal SET time.written = time::now() RETURN time;
