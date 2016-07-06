	var drumkitPath = "assets/Dubsounds-DR-55";
	var kick, snare, hat, rim;
	var bgColor = 64;

	function preload(){
		kickSound = loadSound(drumkitPath + '/DR-55_KICK-02.wav');
		hatSound = loadSound(drumkitPath + '/DR-55_HAT-01.wav');
		rimSound = loadSound(drumkitPath + '/DR-55_RIM-01.wav');
		snareSound = loadSound(drumkitPath + '/DR-55_SNARE-01.wav')
	}

	function setup(){
		// createCanvas(windowWidth, windowHeight);
		createCanvas(400, 300);
		kick = new Drum("kick", kickSound, color('magenta'), 150, {x:225, y:202});
		hat = new Drum("hat", hatSound, color(255, 204, 0), 80, {x:120, y:150}); //yellow
		rim = new Drum("rim", rimSound, color(128, 229, 255), 80, {x:288, y:102}); //blue
		snare = new Drum("snare", snareSound, color(0, 230, 115), 100, {x:191, y:81}); //green
	}

	function draw(){
		background(bgColor);
		//drumMachine();
		kick.display(); //displays drum
		hat.display(); 
		rim.display();
		snare.display();
		// grid();
		bgColor = 64;

	}

	function grid(){ 
		for(var i = 0; i < width; i+=10){
			line(i, 0, i, height)
			for(var j = 0; j < height; j+=10){
				line(0, j, width, j);
			}
		}

	}

	var Drum = function(name, sound, colorize, size, pos){
		this.name = name;
		this.sound = sound;
		this.colorize = colorize;
		this.size = size;
		this.pos = pos;
	}

	Drum.prototype.play = function(){
		this.sound.play();
	}

	Drum.prototype.display = function(){
		push(); //start/save new drawing settings
		fill(this.colorize);
		strokeWeight(4);
		ellipse(this.pos.x, this.pos.y, this.size, this.size); //kick
		pop(); //restore original settings
	}

	Drum.prototype.hit = function(){
		var result = dist(mouseX, mouseY, this.pos.x, this.pos.y) < this.size/2;
		return result;
	}

	function mousePressed(){
		if(kick.hit()){
			kick.play();
			bgColor = kick.colorize;

		}
		else if(hat.hit()){
			hat.play();
			bgColor = hat.colorize;
		}
		else if(rim.hit()){
			rim.play();
			bgColor = rim.colorize;
		}
		else if(snare.hit()){
			snare.play();
			bgColor = snare.colorize;
		}
	}