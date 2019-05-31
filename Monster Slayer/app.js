new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            //Dealing damage to the monster
            this.monsterHealth -= this.calculateDamage(3,10);
            //checking if we won
            if (this.checkWin()) {//if this is true then we won
                return; // so do not execute code anymore
            }
            //Monster dealing damage
            this.monsterAttack();
        },
        specialAttack: function() {
            //Dealing damage to the monster
            this.monsterHealth -= this.calculateDamage(10,20);
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
            this.monsterAttack();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        monsterAttack: function() {
            this.playerHealth -= this.calculateDamage(5,12);
            this.checkWin();
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