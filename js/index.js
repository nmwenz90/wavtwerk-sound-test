var lineX;
var song;
var button;
var amp;
var level;
var col;
var sliderMap;
var header;
var rad = 30;
var sliderVolume;
var slid;

var circleArray = [];
var singleCircle = 1;

function preload(){
song = loadSound('https://res.cloudinary.com/dvwvkt7iq/video/upload/br_128,q_80/v1522974434/onesixteentwerkn2018_p4alng.mp3');
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	lineX = 800;
	strokeWeight(5);
	
	amp = new p5.Amplitude();
    
	
	slid = createSlider(0,100,50);

	slid.position(50,150);
	push();
	
	translate(0,500);
	for(var i = 0; i < 4; i++){
		line(lineX,400 * i/8, lineX, 450 * i/6);

	}
    
    	button = createButton("PLAY");

	
	pop();
	
        
    header = createElement("h3", "WavTwerK");
    header.position(70,50);
    header.style("font-size", "35px");
    
    select('a').position(50,160);

	

}



function draw() {
	
		background("#A5F4FF");



	
	button.position(250,90);
	button.style("font-size", 30);
	button.style("background-color", "red");
	button.style("padding", "10px");
	button.style("border-style","solid");
	button.style("border-width", "5px")
	button.style("border-color", "black")
    button.style("border-radius", "10%");

    button.mousePressed(playSong);
    sliderVolume = slid.value();


	

		level = amp.getLevel();
	
	col = map(level, 0,1, 0, 250);
	
	push();	
	translate(770,350);
	
	for(j = 0; j < 10; j+=2){
		for(k = 0; k < j; k++){
			rotate(radians(rad+=.0001 * slid.value()));
			fill(col,200,100);
			ellipse(slid.value() + k,slid.value()+ j , 80 + slid.value(), 90);
		}
	}
	pop();
}

function playSong(){
    


	if(!song.isPlaying()){
    song.play();   
    song.setVolume(sliderVolume/100);
    button.html("PAUSE")
    }
    else{
    song.pause();
    button.html("PLAY")

    }
	

}
