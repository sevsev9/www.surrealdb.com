-- Update a document and increment a numeric value
UPDATE webpage:home SET click_count += 1;

-- Update a document and remove a tag from an array
UPDATE person:tobie SET interests -= 'Java';
