-- Fetch and process the person, purchased and product targets in parralel
SELECT ->purchased->product<-purchased<-person->purchased->product FROM person:tobie PARALLEL;
