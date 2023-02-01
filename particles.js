class Particle {
    constructor (game) {
        this. game = game; 
        this.markedForDeletion = false;
    }
    update(){
        this.x -= this.speedx+this.game.speed;
        this.y -= this.speedy;
        this.size *= 0.95;
        if (this.size < 0.5) this.markedForDeletion = true;
    }
}


export class Dust extends Particle {
    constructor (game, x, y){
        super(game);
        this.size = Math.random() * 10 + 15;
        this.x = x;
        this.y = y;
        this.speedx = Math.random();
        this.speedy = Math.random();
        this.color = 'Black';
    };

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill()
    }
}