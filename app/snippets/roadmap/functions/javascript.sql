CREATE film SET
	ratings = [
		{ rating: 6, user: user:bt8e39uh1ouhfm8ko8s0 },
		{ rating: 8, user: user:bsilfhu88j04rgs0ga70 },
	],
	featured = fn::script -> function() {
		return this.ratings.filter(r => {
			return r.rating >= 7;
		}).map(r => {
			return { ...r, rating: r.rating * 10 };
		});
	}
;
