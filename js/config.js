var
    WIDTH = document.getElementById("13canvas").width,
    HEIGHT = document.getElementById("13canvas").height,
    DOC = document,

    // status of the game
    s = 0,

    //new game controll
    newGame = true,

    score=0,
    historyScore,

    ctx = DOC.getElementById("13canvas").getContext("2d"),
    bg = new Image(),
    heroImg = new Image(),
    foodImg = new Image(),
    guardImg = new Image(),

    //////////////////////////////////game setting ///////////////////////////////
    //plus view
    plusView = 15;
    limitView = 50;
    limitUpView = 300;
    minusSpeed = 185;

    ////////main role setting
    //position of the hero
    x = 150,
    y = 150,
    hp = 5,
    view = 100,
    speed = 5,

    ////////food setting
    foodView = 50,
    //food number
    fnum = 1, //fixed

    ////////guard setting
    //guard number
    gnum = 4, 
    gnumRate = 2,
    gnumLimit = 25 ,

    guardSpeed = 1,
    guardSpeedUp = 0.1,
    guardSpeedLimit = 3,

    guardSpeed2 = 5,
    guardSpeedUp2 = 0.5,
    guardSpeedLimit2 = 15,

    guardTime = 5000, 
    guardTime2 = 5000,
    beginScore = 50,

//////////////////////////////////////////////////////////////////////////////
    //the size draw in the canvas
    heroSize = 30,
    guardSize = 30,
    foodSize = 20,

    heroDrawSize = 40,
    guardDrawSize = 40,
    foodDrawSize = 30,

    //The size of the png file
    heroPicSize = 30,
    guardPicSize = 30,
    foodPicSize = 20,

    ig = 0,
    ig2 = 0,

    keys = {},
    blood = false,

    //for the first page animate
    localX = 700,
    localX2 = -900,

    //description
    description = [
        "You are a man who has",
        "been lost in the nightmare.",
        "",
        "Try not to be beaten by",
        "your desperate and get ",
        "enough hope to survive."
    ]

    //request Animation Frame
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;


    //setting img
    bg.src = "src/bg-07-han.png";
    heroImg.src = "src/person.png";
    foodImg.src = "src/fire.png";
    guardImg.src = "src/monster.png";
