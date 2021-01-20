class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement('h2')
        title.html("CarRacingGame")
        title.position(480,100)

        this.input.position(480,260);
        
        this.button.position(480,300);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello"+player.name);
            this.greeting.position(480,260);
        })
    }
}
