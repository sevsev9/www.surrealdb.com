-- Focusing on Tobie
person:tobie

-- Which products did he purchase?
->purchased->product

-- which persons also purchased those products?
<-purchased<-person

-- and what did they purchase?
->purchased->product