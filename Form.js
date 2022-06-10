class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }
  
  setElementPosition(){
    this.input.position(width/2-100,height/2-80)
    this.playButton.position(width/2-80,height/2-20)
    this.titleImg.position(120,160)
    this.greeting.position(width/2-200,height/2-80)
  }

  setElementStyle(){
    this.input.class("customInput")
    this.playButton.class("customButton")
    this.titleImg.class("gameTitle")
    this.greeting.class("greeting")
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed(){
     this.playButton.mousePressed(()=>{
      this.playButton.hide()
      this.input.hide()
      var message = `hello ${this.input.value()}
       </br> Wait for another player to join`
       this.greeting.html(message)
       playerCount += 1; 
       player.name = this.input.value()
       player.index = playerCount
       player.addPlayer()
       player.updateCount(playerCount)
     });
  }

  display(){
    this.setElementPosition()
    this.setElementStyle()
    this.handleMousePressed()
  }

}
