$(()=>{
    hero = new Hero(150, 10);
    heroInfoCont = new VisualController("Герой: " + hero.health + " хп.", "heroinfo");
    zombie = new Zombie(100, 5);
    zombieInfoCont = new VisualController("Зомби: " + zombie.health + " хп.", "zombieinfo"); 
})

class Entity{
    constructor(health, power){
        this.health = health;
        this.power = power;
    }
}

class Hero extends Entity{
    constructor(health, power, abilities){
        super(health, power);
        this.abilities = abilities;
    }
}

class Zombie extends Entity{
    constructor(health, power){
        super(health, power)
    }
}

class Battle{
    constructor(participants, visualControllers){
        this.participants = participants;
        this.visualControllers = visualControllers;
        this.turns();
    }

    updateVisual(){
        this.visualControllers.forEach(element => {
            element.update();
        });
    }
}

class VisualController{
    constructor(text, id){
        this.text = text;
        this.id = id;
        this.update();
    }

    update(){
        $("#"+this.id).text(this.text);
    }
}