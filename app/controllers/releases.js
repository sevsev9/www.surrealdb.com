import Controller from '@ember/controller';
import { cache } from '@ascua/decorators';

export default class extends Controller {

	@cache get model() {
		return [
			{
				name: 'In development',
				link: 'dev',
				hash: 'dev',
				data: [
					{
						name: 'Database functionality',
						text: [
							'GraphQL queries, modifications, and subscriptions',
							'Live queries for realtime, distributed notifications of data updates',
							'SurrealDB -> WASM build for running SurrealDB within a browser with persistant storage',
						]
					},
					{
						name: 'Scripting functionality',
						text: [
							{ category: 'scripting', text: 'Add <code>fetch</code> module for asynchronous HTTP requests' },
							{ category: 'scripting', text: 'Add <code>surrealdb</code> module for querying + modifying the database' },
							{ category: 'scripting', text: 'Add ability to define or import custom ES6 modules for user-defined functionality' },
						]
					},
					{
						name: 'Performance improvements',
						text: [
							{ category: 'performance', text: 'Zero-copy datastore key serialization and deserialization' },
							{ category: 'performance', text: 'Database index selection for improved performance when performing full-table scans' },
						]
					},
				]
			},
			{
				time: new Date('2022-08-29'),
				name: 'Release v1.0.0-beta.7',
				path: 'section/releases/v1-0-0-beta-7',
				link: 'v1.0.0-beta.7',
				hash: 'v1-0-0-beta-7',
				text: [
					'Add support for Objects and Arrays as Record IDs',
					'Add support for querying records using Record ID ranges',
					'Add SQL <code>session</code> functions for retrieving session variables',
					'Make <code>--ns</code> and <code>--db</code> arguments optional in command-line REPL',
					'Return an error when the specified datastore is not able to be initiated',
					'Enable root authentication for client libraries using WebSocket protocol',
					'Ensure <code>math::sum()</code> returns a number instead of a <code>NONE</code> value, when called on a non-array value',
					'Add ACID compliant, persistant, on-disk storage implementation, with multiple concurrent writers using RocksDB',
				]
			},
			{
				time: new Date('2022-08-13'),
				name: 'Release v1.0.0-beta.6',
				path: 'section/releases/v1-0-0-beta-6',
				link: 'v1.0.0-beta.6',
				hash: 'v1-0-0-beta-6',
				text: [
					'Add command-line SurrealQL REPL for quick querying of a database',
					'Log username at server startup when root authentication is enabled',
					'Enable SurrealDB server to be configured using environment variables',
					'Implement config definition key and value caching within a transaction',
					'Add <code>array::sort</code> functions for sorting of arrays and array fields',
					'Ensure an error is returned when selecting from a non-existent table in strict mode',
					'Allow polymorphic remote record constraints in <code>DEFINE FIELD</code> statements',
					'Fix bug with SQL export, where <code>DEFINE INDEX</code> statements were not exported',
					'Fix bug where multi-yield path expressions with multiple alias outputs were returning nested arrays',
					'Fix bug where aliased field was not output when fetching a multi-yield expressions with a final alias yield',
				]
			},
			{
				time: new Date('2022-08-01'),
				name: 'Release v1.0.0-beta.5',
				path: 'section/releases/v1-0-0-beta-5',
				link: 'v1.0.0-beta.5',
				hash: 'v1-0-0-beta-5',
				text: [
					'Temporarily disable HTTP response compression',
					'Improve <code>surreal import</code> and <code>surreal export</code> cli commands',
					'Fix bug where <code>GROUP BY</code> fields with an alias <code>AS</code> name were not output correctly',
					'Fix SQL syntax parsing bug when specifying <code>DEFINE INDEX</code> statements with <code>UNIQUE</code constraints',
				]
			},
			{
				time: new Date('2022-07-28'),
				name: 'Release v1.0.0-beta.4',
				path: 'section/releases/v1-0-0-beta-4',
				link: 'v1.0.0-beta.4',
				hash: 'v1-0-0-beta-4',
				text: [
					'Add new strict mode to SurrealDB server',
					'Ensure default table permissions are set to <code>NONE</code> not <code>FULL</code>',
					'Fix bug when defining <code>NS</code> and <code>DB</code> without first selecting a <code>NS</code> or <code>DB</code>',
					'Fix bug with <code>VALUE</code> and <code>ASSERT</code> clauses in <code>DEFINE FIELD</code> statements when fields are not present in query',
				]
			},
			{
				time: new Date('2022-07-24'),
				name: 'Release v1.0.0-beta.3',
				path: 'section/releases/v1-0-0-beta-3',
				link: 'v1.0.0-beta.3',
				hash: 'v1-0-0-beta-3',
				text: [
					'Enable years as a unit in durations (<code>1y</code>)',
					'Log root authentication configuration status on server startup',
					'Ensure CORS headers are set on all HTTP responses even when request fails with an error',
					'Improve syntax for defining futures: <code>fn::future -></code> changed to <code>&lt;future&gt;</code>',
					'Improve syntax for defining embedded functions: <code>fn::script -> () =></code> changed to <code>function()</code>',
					'Ensure root authentication is completely disabled when <code>-p</code> or <code>--pass</code> cli arguments are not specified',
				]
			},
			{
				time: new Date('2022-07-20'),
				name: 'Release v1.0.0-beta.2',
				path: 'section/releases/v1-0-0-beta-2',
				link: 'v1.0.0-beta.2',
				hash: 'v1-0-0-beta-2',
				text: [
					'Improve command-line logging output',
					'Enable new <code>--log</code> argument for specifying server log level',
					'Hide default randomly-generated server password',
					'Ensure correct version is displayed when running <code>surreal version</code> command',
				]
			},
			{
				time: new Date('2022-07-18'),
				name: 'Release v1.0.0-beta.1',
				path: 'section/releases/v1-0-0-beta-1',
				link: 'v1.0.0-beta.1',
				hash: 'v1-0-0-beta-1',
				text: [
					'Entire SurrealDB codebase re-written in Rust',
					'Single-node, in-memory storage for development use',
					'Highly-available, highly-scalable distributed storage for production use',
					'Improved SurrealQL query language with faster parsing, and embedded inspection of types',
					'Performance improvements with data parsing, and serialization and deserialization of records',
					'Added support for casting and converting between different data types',
					'Added a new data type for storing values which should only be computed in the future when selected for output',
					'Embedded JavaScript functions for writing complex functions and triggers, with runtime context isolation',
					'Addition of nested GeoJSON data types, including <code>Point</code>, <code>Line</code>, <code>Polygon</code>, <code>MultiPoint</code>, <code>MultiLine</code>, <code>MultiPolygon</code>, and <code>Collection</code> values',
				]
			},
			{
				time: new Date('2021-12-14'),
				name: 'Release v0.3.0',
				path: 'section/releases/v0-3-0',
				link: 'v0.3.0',
				hash: 'v0-3-0',
				text: [
					'Enable query and session parameters to be defined on a JSON-RPC connection',
					'Ensure subqueries can access encoding parent query and grand-parent queries',
					'Add diff-match-patch functionality when updating document records',
					'Separate authentication levels for Namespace and Database specific access',
					'Authentication scope definition and setup, with user-defined authentication logic for each scope',
				]
			},
			{
				time: new Date('2021-01-21'),
				name: 'Release v0.2.0',
				path: 'section/releases/v0-2-0',
				link: 'v0.2.0',
				hash: 'v0-2-0',
				text: [
					'Parameters can be used to store values or result sets',
					'Nested subquery functionality, with scoped parameters',
					'Nested field query notation allowing nested arrays and objects to be queried',
					'Mathematical operators for complex mathematical calculations in queries',
					'Advanced functions for working with arrays, strings, time, validation, parsing, and counting',
				]
			},
			{
				time: new Date('2019-12-08'),
				name: 'Release v0.1.0',
				path: 'section/releases/v0-1-0',
				link: 'v0.1.0',
				hash: 'v0-1-0',
				text: [
					'Multi-tenancy data separation, with namespaces and databases',
					'Schemafull or schemaless tables with limitless  document fields',
					'Multi-table, multi-row, serialisable ACID transactions',
					'Table fields, table change events, table indexes, and data constraints',
					'Advanced data model including empty values, strings, numbers, objects, arrays, durations, and datetimes',
				]
			},
		];
	}

}
