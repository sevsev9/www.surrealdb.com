CREATE film SET
	ratings = [
		{ rating: 6, user: user:bt8e39uh1ouhfm8ko8s0 },
		{ rating: 8, user: user:bsilfhu88j04rgs0ga70 },
	],
	featured: fn::js -> function() {
		return this.ratings.filter(r => {
			return r >= 7;
		}).map(r => {
			return r * 10;
		});
	},
;
