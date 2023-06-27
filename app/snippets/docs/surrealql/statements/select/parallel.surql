-- Fetch and process the person, purchased and product targets in parallel
-- Select every product that was purchased by a person that purchased a product that person tobie also purchased
SELECT ->purchased->product<-purchased<-person->purchased->product FROM person:tobie PARALLEL;
