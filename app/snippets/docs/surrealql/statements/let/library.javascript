let people = await surreal.query("SELECT * FROM article WHERE status INSIDE $status", {
	status: ["live", "draft"],
});
