let people = await surreal.query("SELECT * FROM article WHERE status IN $status", {
	status: ["live", "draft"],
});
