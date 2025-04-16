class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 50;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 20;

        this.leftLegX = this.bodyX - 50;
        this.leftLegY = this.bodyY + 150;

        this.rightLegX = this.bodyX + 50;
        this.rightLegY = this.bodyY + 150;

        this.leftArmX = this.bodyX - 80;
        this.leftArmY = this.bodyY + 50;

        this.rightArmX = this.bodyX + 80;
        this.rightArmY = this.bodyY + 50;
        
        this.rightEarX = this.bodyX + 60;
        this.rightEarY = this.bodyY - 90;

        this.leftEarX = this.bodyX - 60;
        this.leftEarY = this.bodyY - 90;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteF.png");
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_cute_light.png");

        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.smile.visible = false;
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthJ.png");
        my.sprite.fangs.visible = false;

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_whiteD.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_whiteD.png");
        
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_whiteB.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_whiteB.png");
       
        my.sprite.leftEar = this.add.sprite(this.leftEarX, this.leftEarY, "monsterParts", "detail_white_ear_round.png");
        my.sprite.leftEar.flipX = true;
        my.sprite.rightEar = this.add.sprite(this.rightEarX, this.rightEarY, "monsterParts", "detail_white_ear_round.png");

        this.keys = this.input.keyboard.addKeys("S,F,A,D");
    }   

    

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(Phaser.Input.Keyboard.JustDown(this.keys.S)){
            my.sprite.smile.visible = true;
            my.sprite.mouth.visible = false;
            my.sprite.fangs.visible = false;
        }

        if(Phaser.Input.Keyboard.JustDown(this.keys.F)){
            my.sprite.smile.visible = false;
            my.sprite.mouth.visible = false;
            my.sprite.fangs.visible = true;
        }

        if(this.keys.A.isDown){
            for(let part in my.sprite){
                my.sprite[part].x -= 3;
            }
        }

        if(this.keys.D.isDown){
            for(let part in my.sprite){
                my.sprite[part].x += 3;
            }
        }

        
    }

}