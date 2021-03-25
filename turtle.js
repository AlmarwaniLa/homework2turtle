
    float turtleX;
    float turtleY;
    float turtleHeading = 0;
    
    void setup() {
      size(300, 300);
      turtleX = width/2;
      turtleY = height/2;
      background(64);
    }
    
    void draw() {
    
      stroke(random(256), random(256), random(256));
      
      rotateTurtle(random(360));
      float length = random(0, 150);
      
      forward(length);
      rotateTurtle(90);
      
      forward(length);
      rotateTurtle(90);
      
      forward(length);
      rotateTurtle(90);
      
      forward(length);
    }
    
    void forward(float amount) {
      
      float newX = turtleX + cos(radians(turtleHeading)) * amount;
      float newY = turtleY + sin(radians(turtleHeading)) * amount;
    
      line(turtleX, turtleY, newX, newY);
      fill(0);
      
      turtleX = newX;
      turtleY = newY;
    }
    
    void rotateTurtle(float degrees) {
      turtleHeading += degrees;
    }
    float turtleX;
    float turtleY;
    float turtleHeading = 0;
    
    void setup() {
      size(100, 00);
      turtleX = width/2;
      turtleY = height/2;
      background(64);
    }
    
    void draw() {
    
      stroke(random(256), random(256), random(256));
      
      rotateTurtle(random(360));
      float length = random(0, 150);
      
      forward(length);
      rotateTurtle(50);
      
      forward(length);
      rotateTurtle(50);
      
      forward(length);
      rotateTurtle(50);
      
      forward(length);
    }
    
    void forward(float amount) {
      
      float newX = turtleX + cos(radians(turtleHeading)) * amount;
      float newY = turtleY + sin(radians(turtleHeading)) * amount;
    
      line(turtleX, turtleY, newX, newY);
      fill(0);
      
      turtleX = newX;
      turtleY = newY;
    }
    
    void rotateTurtle(float degrees) {
      turtleHeading += degrees;
    }
 
  float turtleX;
  float turtleY;
  float turtleHeading = 0;
  
  void setup() {
    size(100, 100);
    turtleX = width/2;
    turtleY = height/2;
    background(64);
  }
  
  void draw() {
  
    stroke(random(256), random(256), random(256));
    
    rotateTurtle(random(360));
    float length = random(0, 150);
    
    forward(length);
    rotateTurtle(90);
    
    forward(length);
    rotateTurtle(90);
    
    forward(length);
    rotateTurtle(90);
    
    forward(length);
  }
  
  void forward(float amount) {
    
    float newX = turtleX + cos(radians(turtleHeading)) * amount;
    float newY = turtleY + sin(radians(turtleHeading)) * amount;
  
    line(turtleX, turtleY, newX, newY);
    fill(0);
    
    turtleX = newX;
    turtleY = newY;
  }
  
  void rotateTurtle(float degrees) {
    turtleHeading += degrees;
  }
  float turtleX;
  float turtleY;
  float turtleHeading = 0;
  
  void setup() {
    size(30, 00);
    turtleX = width/2;
    turtleY = height/2;
    background(10);
  }
  
  void draw() {
  
    stroke(random(15), random(15), random(15));
    
    rotateTurtle(random(10));
    float length = random(0, 10);
    
    forward(length);
    rotateTurtle(10);
    
    forward(length);
    rotateTurtle(10);
    
    forward(length);
    rotateTurtle(50);
    
    forward(length);
  }
  
  void forward(float amount) {
    
    float newX = turtleX + cos(radians(turtleHeading)) * amount;
    float newY = turtleY + sin(radians(turtleHeading)) * amount;
  
    line(turtleX, turtleY, newX, newY);
    fill(0);
    
    turtleX = newX;
    turtleY = newY;
  }
  
  void rotateTurtle(float degrees) {
    turtleHeading += degrees;
  }