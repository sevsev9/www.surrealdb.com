export default {

	name: 'prism',

	initialize(instance) {

		if (Prism) {

			Prism.languages.sql = {
				'comment': {
					pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
					lookbehind: true
				},
				'variable': [
					{
						pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
						greedy: true
					},
					/\$[\w.$]+/
				],
				'string': {
					pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
					greedy: true,
					lookbehind: true
				},
				'connector': /[.]|<->|<-|->/,
				'function': /\b(?:count|(?:(array|crypto|geo|http|is|math|parse|rand|string|time|type)::[\w]+))(?=\s*\()/i, // Should we highlight user defined functions too?
				'keyword': /\b(?:CONTENT|CREATE|DATABASE|DB|DEFINE|DELETE|DIFF|ES256|ES384|ES512|FETCH|FIELD|FOR|FROM|GROUP( BY)?|HS256|HS384|HS512|INDEX|INSERT|INTO|LET|LIMIT( BY)?|LOGIN|MERGE|NAMESPACE|NS|ON|ON DUPLICATE KEY UPDATE|ORDER( BY)?|PASSHASH|PASSWORD|PERMISSIONS|PS256|PS384|PS512|RELATE|REMOVE|REPLACE|RETURN|RS256|RS384|RS512|SCOPE|SELECT|SET|SPLIT( ON)?|START( AT)?|TABLE|THEN|TIMEOUT|TOKEN|TYPE|UPDATE|VALUE|VERSION|WHEN|WHERE)\b/i,
				'nothing': /\b(?:NONE|NULL|VOID)\b/i,
				'boolean': /\b(?:TRUE|FALSE)\b/i,
				'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
				'casts': /[<](bool|int|float|string|number|decimal|datetime|duration)[>]/,
				'operator': /==|!=|\*=|\?=|=|!~|\*~|\?~|~|<=|<|>=|>|\+|-|\*|×|∙|\/|÷|∋|∌|∈|∉|⊇|⊃|⊅|⊆|⊂|⊄|&&|\|\||\b(?:AND|OR|IS NOT|IS|CONTAINS ALL|CONTAINS NONE|CONTAINS SOME|CONTAINS NOT|CONTAINS|ALL INSIDE|NONE INSIDE|SOME INSIDE|NOT INSIDE|INSIDE|OUTSIDE|INTERSECTS)\b/i,
			};

		}

	},

}
