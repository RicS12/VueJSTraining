new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            //Dealing damage to the monster
            let damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;
            //Adding turn
            this.turns.unshift( { //adds as a first element, and shifts others to the right
                isPlayer: true,
                text: `Player hits the Monster for ${damage}`
            }) 

            //checking if we won
            if (this.checkWin()) {//if this is true then we won
                return; // so do not execute code anymore
            }
            //Monster dealing damage
            this.monsterAttack();
        },
        specialAttack: function() {
            //Dealing damage to the monster
            let damage = this.calculateDamage(10,20);
            this.monsterHealth -= damage;

            this.turns.unshift( {
                isPlayer: true,
                text: `Player hits the Monster hard for ${damage}`
            }) 
            if (this.checkWin()) {
                return; 
            }
            this.monsterAttack();
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift( {
                isPlayer: true,
                text: `Player heals for 10`
            }) 
            this.monsterAttack();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        monsterAttack: function() {
            let damage = this.calculateDamage(5,12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits Player for ${damage}`
            })
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min); //this will return a number between min and max.
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                if (confirm('You win, new game?')){ //javascript built in method, like an alert
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true; //we win
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                if (confirm('You lose, new game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});