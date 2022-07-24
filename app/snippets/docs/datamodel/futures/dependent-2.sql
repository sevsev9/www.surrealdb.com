CREATE person SET
	name: 'Jason',
	friends = [person:tobie, person:jaime],
	adult_friends = <future> { friends[WHERE age > 18].name }
;
