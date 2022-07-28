-- Use mathematical operators to calculate value
SELECT * FROM temperature WHERE (celsius * 1.8) + 32 > 86.0;

-- Use geospatial operator to detect polygon containment
SELECT * FROM restaurant WHERE location INSIDE {
	type: "Polygon",
	coordinates: [[
		[-0.38314819, 51.37692386], [0.1785278, 51.37692386],
		[0.1785278, 51.61460570], [-0.38314819, 51.61460570],
		[-0.38314819, 51.37692386]
	]]
};

-- Select all people whose tags contain "tag1" OR "tag2"
SELECT * FROM person WHERE tags CONTAINS ANY ["tag1", "tag2"];

-- Select all people who have any email address ending in 'gmail.com'
SELECT * FROM person WHERE emails.*.value ?= /gmail.com$/;
