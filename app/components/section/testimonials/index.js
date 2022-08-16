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
			},
			{
				img: '/static/img/developers/juanmanuelverges.png',
				date: new Date('2022-06-25'),
				name: 'Juan Manuel Verges',
				user: '',
				text: "Researching the different repos out there, came to find this amazing project. I'm not sure how, but I want to get involved.",
			},
			{
				img: '/static/img/developers/_abdfnx.png',
				date: new Date('2022-02-22'),
				name: '',
				user: '@_abdfnx',
				text: "I'm so exited about your version 1.0.0, keep up your awesome work.",
			},
			{
				img: '/static/img/developers/thomascope.png',
				date: new Date('2022-07-23'),
				name: 'Thomas Cope',
				user: '',
				text: "Huge congratulations! Best database I've ever seen!",
			},
			{
				img: '/static/img/developers/gonzalogascameza.png',
				date: new Date('2022-07-23'),
				name: 'Gonzalo Gasca Meza',
				user: '',
				text: "Love this!",
			},
			{
				img: '/static/img/developers/mariomonteiro.png',
				date: new Date('2022-08-01'),
				name: 'Mário Monteiro',
				user: 'koakh',
				text: "I came across surrealdb today and it seems impressive, all the features in one solution like nosql, graphs, distributed, realtime, permissions, auth, rust and node driver, seem too good to be true. Now started playing with it 😀",
			},
			{
				img: '/static/img/developers/thmsobrmlr.png',
				date: new Date('2022-08-05'),
				name: 'Thomas',
				user: 'thmsobrmlr',
				text: "The database looks really cool and I'd love to try it out in a weekend project!",
			},
			{
				img: '/static/img/developers/zafaransari.png',
				date: new Date('2022-03-28'),
				name: 'Zafar Ansari',
				user: 'ansarizafar',
				text: "I have been searching for a SurrealDB like database for ages.",
			},
			{
				img: '/static/img/developers/makeshiftindie.png',
				date: new Date('2022-08-05'),
				name: 'Makeshift',
				user: 'makeshiftindie',
				text: "love this idea. I wonder how to apply it to my next ETL project",
			},
			{
				img: '/static/img/developers/ivanderbu2.png',
				date: new Date('2022-08-05'),
				name: '',
				user: 'ivanderbu2',
				text: "Checked your QL it does look much simpler compared to Neo4j at least for inserting data. I've no doubt that there is a huge demand for solution like SurrealDB.",
			},
			{
				img: '/static/img/developers/pdyc.png',
				date: new Date('2022-08-05'),
				name: '',
				user: 'pdyc',
				text: "My weekend is ruined since i will be playing with surrealdb this weekend :-)",
			},
			{
				img: '/static/img/developers/ghidra.png',
				date: new Date('2022-08-05'),
				name: '',
				user: 'Ghidra',
				text: "Very cool stuff for sure; it looks like a very interesting + useful product.",
			},
			{
				img: '/static/img/developers/martingronlund.png',
				date: new Date('2022-08-05'),
				name: 'Martin Grönlund',
				user: '',
				text: "This looks like a wonderful piece of tech, similar to what I've had in mind for a while!",
			},
			{
				img: '/static/img/developers/lukehamilton.png',
				date: new Date('2022-08-05'),
				name: 'Luke Hamilton',
				user: '',
				text: "Interesting, I am doing a poc now on using a graphDB for a project I'm planning. Been looking a lot at dgraph however I would prefer a rust based system due to our IoT requirements.",
			},
			{
				img: '/static/img/developers/kamyarinlanloo.png',
				date: new Date('2022-08-05'),
				name: 'Kamyar Inanloo',
				user: '',
				text: "Wow! Well done! I am thinking about creating more high performance products in Rust but you did it!",
			},
			{
				img: '/static/img/developers/mr_olafsson.png',
				date: new Date('2022-08-05'),
				name: '',
				user: 'mr_olafsson',
				text: "Wow that's hugely ambitious!! Your landing page looks amazing."
			},
			{
				img: '/static/img/developers/jwalker.png',
				date: new Date('2022-08-05'),
				name: 'Justin Walker',
				user: 'jwalker',
				text: "The site looks great and the docs are sooo clean... well done! I will definitely look into using this when I start on the dev work for my project!"
			},
			{
				img: '/static/img/developers/peterbloodsworth.png',
				date: new Date('2022-07-21'),
				name: 'Peter Bloodsworth',
				user: '',
				text: "Really pleased to see all of your hard work on the dissertation translate into an exciting product. Just shows what can be achieved - hearty congratulations and best wishes for the future growth of your business.",
			},
			{
				img: '/static/img/developers/zafaransari.png',
				date: new Date('2022-02-22'),
				name: 'Zafar Ansari',
				user: 'ansarizafar',
				text: "The SurrealDB management interface is simple and beautiful. I just can't wait to play with it.",
			},
		];
	}

}
