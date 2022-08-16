import Component from '@glimmer/component';
import { cache } from '@ascua/decorators';
import { arg } from '@ascua/decorators';

export default class extends Component {

	@arg count = 100;

	@cache get testimonials() {
		return [
			{
				img: '/static/img/developers/zafaransari.png',
				date: new Date('2022-03-28'),
				name: 'Zafar Ansari',
				user: 'ansarizafar',
				text: "SurrealDB is like a dream database for every developer. The features set is too good to be true. Is it real???",
				link: 'https://discord.com/channels/902568124350599239/902568124350599242/958055360059547739',
			},
			{
				img: '/static/img/developers/juanmanuelverges.png',
				date: new Date('2022-06-25'),
				name: 'Juan Manuel Verges',
				user: '',
				text: "Researching the different repos out there, came to find this amazing project. I'm not sure how, but I want to get involved.",
				link: 'https://discord.com/channels/902568124350599239/970333598035112017/990273973793206292',
			},
			{
				img: '/static/img/developers/_abdfnx.png',
				date: new Date('2022-02-22'),
				name: '',
				user: '@_abdfnx',
				text: "I'm so exited about your version 1.0.0, keep up your awesome work.",
				link: 'https://mobile.twitter.com/_abdfnx',
			},
			{
				img: '/static/img/developers/thomascope.png',
				date: new Date('2022-07-23'),
				name: 'Thomas Cope',
				user: '',
				text: "Huge congratulations! Best database I've ever seen!",
				link: 'https://www.linkedin.com/feed/update/urn:li:activity:6955917039718825984/?commentUrn=urn%3Ali%3Acomment%3A(ugcPost%3A6955917039001608192%2C6956602267307278338)',
			},
			{
				img: '/static/img/developers/gonzalogascameza.png',
				date: new Date('2022-07-23'),
				name: 'Gonzalo Gasca Meza',
				user: '',
				text: "Love this!",
				link: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:6955917039001608192?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A6955917039001608192%2C6956130258752270336%29',
			},
			{
				img: '/static/img/developers/mariomonteiro.png',
				date: new Date('2022-08-01'),
				name: 'Mário Monteiro',
				user: 'koakh',
				text: "I came across surrealdb today and it seems impressive, all the features in one solution like nosql, graphs, distributed, realtime, permissions, auth, rust and node driver, seem too good to be true. Now started playing with it 😀",
				link: 'https://discord.com/channels/902568124350599239/970333598035112017/1003418467002744852',
			},
			{
				img: '/static/img/developers/thmsobrmlr.png',
				date: new Date('2022-08-05'),
				name: 'Thomas',
				user: 'thmsobrmlr',
				text: "The database looks really cool and I'd love to try it out in a weekend project!",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/zafaransari.png',
				date: new Date('2022-03-28'),
				name: 'Zafar Ansari',
				user: 'ansarizafar',
				text: "I have been searching for a SurrealDB like database for ages.",
				link: 'https://discord.com/channels/902568124350599239/902568124350599242/958072367484112996',
			},
			{
				img: '/static/img/developers/makeshiftindie.png',
				date: new Date('2022-08-05'),
				name: 'Makeshift',
				user: 'makeshiftindie',
				text: "love this idea. I wonder how to apply it to my next ETL project",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/ivanderbu2.png',
				date: new Date('2022-08-05'),
				name: '',
				user: 'ivanderbu2',
				text: "Checked your QL it does look much simpler compared to Neo4j at least for inserting data. I've no doubt that there is a huge demand for solution like SurrealDB.",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/pdyc.png',
				date: new Date('2022-08-05'),
				name: '',
				user: 'pdyc',
				text: "My weekend is ruined since i will be playing with surrealdb this weekend :-)",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/ghidra.png',
				date: new Date('2022-08-05'),
				name: '',
				user: 'Ghidra',
				text: "Very cool stuff for sure; it looks like a very interesting + useful product.",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/martingronlund.png',
				date: new Date('2022-08-05'),
				name: 'Martin Grönlund',
				user: '',
				text: "This looks like a wonderful piece of tech, similar to what I've had in mind for a while!",
				link: 'https://www.linkedin.com/feed/update/urn:li:groupPost:4973032-6961346750498447360?commentUrn=urn%3Ali%3Acomment%3A%28groupPost%3A4973032-6961346750498447360%2C6961367160866676738%29',
			},
			{
				img: '/static/img/developers/lukehamilton.png',
				date: new Date('2022-08-09'),
				name: 'Luke Hamilton',
				user: '',
				text: "Interesting, I am doing a poc now on using a graphDB for a project I'm planning. Been looking a lot at dgraph however I would prefer a rust based system due to our IoT requirements.",
				link: 'https://www.linkedin.com/feed/update/urn:li:activity:6961346751261802496/?commentUrn=urn%3Ali%3Acomment%3A(groupPost%3A4973032-6961346750498447360%2C6961676369349009408)',
			},
			{
				img: '/static/img/developers/kamyarinlanloo.png',
				date: new Date('2022-08-05'),
				name: 'Kamyar Inanloo',
				user: '',
				text: "Wow! Well done! I am thinking about creating more high performance products in Rust but you did it!",
				link: 'https://www.linkedin.com/feed/update/urn:li:groupPost:4973032-6961346750498447360?commentUrn=urn%3Ali%3Acomment%3A%28groupPost%3A4973032-6961346750498447360%2C6961384432641392640%29',
			},
			{
				img: '/static/img/developers/mr_olafsson.png',
				date: new Date('2022-08-05'),
				name: '',
				user: 'mr_olafsson',
				text: "Wow that's hugely ambitious!! Your landing page looks amazing.",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/jwalker.png',
				date: new Date('2022-08-05'),
				name: 'Justin Walker',
				user: 'jwalker',
				text: "The site looks great and the docs are sooo clean... well done! I will definitely look into using this when I start on the dev work for my project!",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/peterbloodsworth.png',
				date: new Date('2022-07-21'),
				name: 'Peter Bloodsworth',
				user: '',
				text: "Really pleased to see all of your hard work on the dissertation translate into an exciting product. Just shows what can be achieved - hearty congratulations and best wishes for the future growth of your business.",
				link: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:6955917039001608192?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A6955917039001608192%2C6962767300886151168%29',
			},
			{
				img: '/static/img/developers/zafaransari.png',
				date: new Date('2022-02-22'),
				name: 'Zafar Ansari',
				user: 'ansarizafar',
				text: "The SurrealDB management interface is simple and beautiful. I just can't wait to play with it.",
				link: 'https://discord.com/channels/902568124350599239/902568124350599242/982935417571639376',
			},
		];
	}

}
