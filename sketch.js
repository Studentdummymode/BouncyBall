const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground,ball;

function setup(){
    createCanvas(1200,1200);

    engine = Engine.create();
    world = engine.world;

    var object_option ={
        isStatic: true
    }

    object = Bodies.rectangle(600,100,100,50,object_option);
    World.add(world,object);

    var ground_option={
        isStatic: true
    }

    ground = Bodies.rectangle(600,900,600,20,ground_option);
    World.add(world,ground);

    var ball_option={
        restitution: 1
    }

    ball = Bodies.circle(600,100,60,ball_option);
    World.add(world,ball);
    console.log(ball);

}

function draw(){
    background("black");

    Engine.update(engine);

    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(ground.position.x,ground.position.y,600,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,60,60);
}