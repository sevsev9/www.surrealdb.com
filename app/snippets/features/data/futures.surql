UPDATE product SET
	name = "SurrealDB",
	launch_at = "2021-11-01",
	countdown = <future> { launch_at - time::now() }
;
