db.blogs.drop();
db.photos.drop();
db.demos.drop();

db.blogs.insert({
	"title": "How to create your first Express App",
	body: "Open termianl console on your PC. Choose a "path" which you want to start your project. Then type "express helloExpress(ex.)", after this, you will find a folder called "helloExpress". The next step is installing all the dependencies. Jump into helloExpress folder and input "npm install". Finally, try "node app" to run your first Express App!",
	tag: "IT",
	date: new Date()
});

db.blogs.insert({
	"title": "Test",
	body: "This is blog test. /p Hope it works",
	tag: "IT",
	date: new Date()
});

db.photos.insert({
	"title" : "Purple Flower",
	"comment" : "A beautiful mood",
	"path" : "/images/photos/1.jpg"
});

db.photos.insert({
	"title" : "Love Stone",
	"comment" : "Love stay alone forever",
	"path" : "/images/photos/2.jpg"
});

db.photos.insert({
	"title" : "Moon Yearn",
	"comment" : "Expect every nice night",
	"path" : "/images/photos/3.jpg"
});

db.photos.insert({
	"title" : "Little Puppy",
	"comment" : "Do you want a cute puppy",
	"path" : "/images/photos/4.jpg"
});

db.photos.insert({
	"title" : "Lazy Cat",
	"comment" : "Cat tell you how to relax",
	"path" : "/images/photos/5.jpg"
});

db.photos.insert({
	"title" : "Lamborghini",
	"comment" : "Just awesome!!!",
	"path" : "/images/photos/6.jpg"
});

db.photos.insert({
	"title" : "Venice",
	"comment" : "The city in your dream",
	"path" : "/images/photos/7.jpg"
});

db.photos.insert({
	"title" : "Setting Sun",
	"comment" : "Enjoy the last time of daylight",
	"path" : "/images/photos/8.jpg"
});

db.photos.insert({
	"title" : "Water Fall",
	"comment" : "Amazing natural power",
	"path" : "/images/photos/9.jpg"
});

db.photos.insert({
	"title" : "Cottage",
	"comment" : "Winter is coming",
	"path" : "/images/photos/10.jpg"
});

db.photos.insert({
	"title" : "Red Flower",
	"comment" : "Where is my love??",
	"path" : "/images/photos/11.jpg"
});

db.photos.insert({
	"title" : "Sweet Donut",
	"comment" : "Did you have breakfast yet?",
	"path" : "/images/photos/12.jpg"
});


db.demos.insert({
	"title" : "Canvas Mathcing Game",
	"intro" : "A HTML5 web game base on KineticJS Canvas Framework. Game is very easy, try to find two cards with same pattern and get highest score.",
	"background_img" : "/images/demos/demo_1/bg.png",
	"screen_shoots": {
		"ss_1": "/images/demos/demo_1/ss_1.png",
		"ss_2": "/images/demos/demo_1/ss_2.png",
		"ss_3": "/images/demos/demo_1/ss_3.png"
	}
});

db.demos.insert({
	"title": "Action Script Game",
	"intro": "A shooting Flash game with Action Script 3.0. Using direction keysto control cannon. Destroy the final boss after 2 mins you will save your plant.",
	"background_img": "/images/demos/demo_2/bg.png",
	"screen_shoots": {
		"ss_1": "/images/demos/demo_2/ss_1.png",
		"ss_2": "/images/demos/demo_2/ss_2.png",
		"ss_3": "/images/demos/demo_2/ss_3.png"
	}
});