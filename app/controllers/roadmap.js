import Controller from '@ember/controller';
import { cache } from '@ascua/decorators';

export default class extends Controller {

	@cache get model() {
		return [
			{
				time: new Date('2022-09-01'),
				name: 'SurrealDB 1.0',
			},
			{
				time: new Date('2022-08-20'),
				text: 'SurrealDB launched on Reddit',
			},
			{
				time: new Date('2022-07-20'),
				text: 'SurrealDB LinkedIn community is live.',
			},
			{
				time: new Date('2022-07-11'),
				name: 'SurrealDB 1.0-beta',
				text: 'The beta version of SurrealDB will support a large amount of functionality, with the ability to run in-memory, on a single node, or in a highly-available, highly-scalable distributed environment. A highly-performant query language will enable use of many different data types, and javascript functions can be used for more complex functions and triggers.',
				tags: [
					'In-memory storage',
					'Single-node on-disk storage with support for multiple concurrent writers and readers',
					'Distributed highly-available storage',
					'SurrealQL advanced query language',
					'Schemafull or schemaless',
					'Embedded fields with arrays and objects',
					'Multi-table, multi-row ACID transactions',
					'Table field definitions and constraints',
					'Fully-defined type system with datetimes, decimals, durations, and geometry types',
					'Graph and nested field expressions',
					'Embedded JavaScript functions',
					'Pre-defined aggregate computed views',
					'Permissions, authentication and user scopes',
					'Support for 3rd party authentication',
					'REST API and WebSocket API',
					'Data import and export',
					'Command-line tool',
					'Support for amd64, arm64 on Linux and Darwin',
				]
			},
			{
				time: new Date('2021-12-01'),
				text: 'SurrealDB Discord community is created.',
			},
			{
				time: new Date('2021-11-01'),
				text: 'SurrealDB Ltd is formed in the United Kingdom.',
			},
			{
				time: new Date('2021-07-01'),
				name: 'Codebase open sourced',
				text: 'The decision is made to open source SurrealDB, making it available to other developers and organisations. Having learnt a great deal about building a future-ready database, the decision is made to re-build SurrealDB using Rust, in order to enforce data sharing guarantees.',
			},
			{
				time: new Date('2019-12-01'),
				text: 'SurrealDB private cloud is launched on Google Cloud Platform.',
			},
			{
				time: new Date('2017-07-01'),
				text: 'SurrealDB is used within a Software-as-a-Service system for the first time, offering a complete Backend-as-a-Service for realtime, collaborative applications, with support for structured and unstructured datasets, and relational, document, and graph querying semantics.',
			},
			{
				time: new Date('2016-02-01'),
				text: 'Development begins on SurrealDB with the intention of creating a scalable cloud graph database, built using Golang.',
			},
			{
				time: new Date('2015-09-01'),
				text: 'Conceptualisation and planning for the SurrealDB database requirements begins. Inspiration for SurrealDB features were taken from a range of databases including MySQL, OrientDB, CouchDB, InfluxDB, DynamoDB, MongoDB, RethinkDB, CockroachDB, Neo4j, and Firebase.',
			},
			{
				time: new Date('2015-06-01'),
				text: 'After years of building cloud-based Software-as-a-Service systems, with realtime APIs, complicated security permissions, and multiple separate database backends, Tobie questions whether there is a platform for building and scaling applications quicker, while still allowing for the storage and querying of data in a structured yet flexible manner.',
			},
		];
	}

}
