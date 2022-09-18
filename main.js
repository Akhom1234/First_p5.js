function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw () {
    image(video, 0 , 0, 640, 480);
    tint(tint_color);

    stroke(168, 10, 10);
    fill(168, 10, 10);

    circle(40,40,50);
    circle(550,40,50);
    circle(40,440,50);
    circle(550,440,50);

    stroke(50,168,82);
    fill(50,168,82);
    
    rect(63,27,465,25);
    rect(63,430,465,25);
    rect(27,63,25,355);
    rect(539,63,25,355);
}

function take_snapshot() {
    save('Frame.png')
}


