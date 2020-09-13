var myGamePiece;
var myObstacles = [];
var myScore;
//var myFloor;

function startGame() {
  myGameArea.start();
  myGamePiece = new component(30, 30, "red", 40, 200);
  myObstacle = new component(10, 100, "blue", 1300, 400);
  myScore = new component("20px", "Consolas", "black", 1050, 20, "text");
  //myFloor = new component(10, 10, "black", 30, 399);
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1300;
    this.canvas.height = 400;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 3);
    this.frameNo = 0;
    window.addEventListener("keydown", function (e) {
      myGameArea.keys = myGameArea.keys || [];
      myGameArea.keys[e.keyCode] = e.type == "keydown";
    });
    window.addEventListener("keyup", function (e) {
      myGameArea.keys[e.keyCode] = e.type == "keydown";
    });
  },

  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}

function component(width, height, color, x, y, type) {
  this.type = type;
  this.gamearea = myGameArea;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.gravity = 0.0001;
  this.gravitySpeed = 1;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };

  this.newPos = function () {
    if (myGamePiece.y >= 370) {
      this.gravitySpeed = 0;
    } else {
      this.gravitySpeed = 1;
    }

    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.y += this.speedY;
  };
  this.crashWith = function (otherobj) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  };
}

function updateGameArea() {
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      myGameArea.stop();
      return;
    }
  }

  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(500)) {
    x = myGameArea.canvas.width;
    minHeight = 200;
    maxHeight = 100;
    height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    minGap = 80;
    maxGap = 180;
    gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    //myObstacles.push(new component(10, height, "blue", x, 0));
    myObstacles.push(
      new component(5, x - height - gap, "blue", x, height + gap)
    );
  }
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }

  myScore.text = "SCORE: " + myGameArea.frameNo;
  myScore.update();
  myGamePiece.newPos();
  myGamePiece.update();
  //myFloor.update();

  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  //if (myGameArea.keys && myGameArea.keys[37]) {
  //myGamePiece.speedX = -1;
  //}
  //if (myGameArea.keys && myGameArea.keys[39]) {
  //myGamePiece.speedX = 1;
  //}
  if (myGameArea.keys && myGameArea.keys[32]) {
    myGamePiece.speedY = -4.5;
  }
  //if (myGameArea.keys && myGameArea.keys[40]) {
  //myGamePiece.speedY = 1;
  //}
}
