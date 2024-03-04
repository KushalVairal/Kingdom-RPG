let player = new Player();

function Player(classType, health, strength, intelligence, speed) {
    this.classType = classType;
    this.health = health;
    this.strength = strength;
    this.intelligence = intelligence;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function() {
        console.log(player);
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        // console.log("Player speed:", getPlayerSpeed, "Enemy speed:", getEnemySpeed);

        // player attacks
        let playerAttack = function() {
            let calcBaseDamage ;
            if (player.health > 0) {
                calcBaseDamage = player.strength * player.health / 1000;
            } else {
                calcBaseDamage = player.strength * player.intelligence / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            let numberOfHits = Math.floor(Math.random() * player.intelligence / 10 / 2) + 1;
            let attackValues =[calcOutputDamage, numberOfHits]
            return attackValues;
        };

        // enemy attacks
        let enemyAttack = function() {
            let calcBaseDamage ;
            if (enemy.health > 0) {
                calcBaseDamage = enemy.strength * enemy.health / 1000;
            } else {
                calcBaseDamage = enemy.strength * enemy.intelligence / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            let numberOfHits = Math.floor(Math.random() * enemy.intelligence / 10 / 2) + 1;
            let attackValues =[calcOutputDamage, numberOfHits]
            return attackValues;
        };

        // get the player and enemy health later in the game
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        // player health is more than enemy
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");

            if (enemy.health <= 0) {
                alert("You won!! Refresh the game to play again");
                getPlayerHealth.innerHTML = 'Health : ' + player.health;
                getEnemyHealth.innerHTML = 'Health : 0';
            } else {
                getEnemyHealth.innerHTML = 'Health : ' + enemy.health;
                // enemy attacks
                let enemyAttackValues = enemyAttack();
                totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy hits " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

                if (player.health <= 0) {
                    alert("You lost!! Refresh the game to play again");
                    getPlayerHealth.innerHTML = 'Health : 0';
                    getEnemyHealth.innerHTML = 'Health : ' + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = 'Health : ' + player.health;
                }
            }
        } else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health -= totalDamage;
            alert("Enemy hits " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

            if (player.health <= 0) {
                alert("You lost!! Refresh the game to play again");
                getPlayerHealth.innerHTML = 'Health : 0';
                getEnemyHealth.innerHTML = 'Health : ' + enemy.health;
            } else {
                getPlayerHealth.innerHTML = 'Health : ' + player.health;
                // player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health -= totalDamage;
                alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                if (enemy.health <= 0) {
                    alert("You won!! Refresh the game to play again");
                    getPlayerHealth.innerHTML = 'Health : ' + player.health;
                    getEnemyHealth.innerHTML = 'Health : 0';
                } else {
                    getEnemyHealth.innerHTML = 'Health : ' + enemy.health;
                }
            }
        }
    }
};
