let GameManager = {
    setGameStart: function(classType) {
        let player;
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        
        switch (classType) {
             case "King":
                player = new Player(classType, 200, 200, 100, 50);
                break;
            case "Hunter":
                player = new Player(classType, 120, 100, 150, 200);
                break;
            case "Queen":
                player = new Player(classType, 130, 90, 200, 60);
                break;
            case "Wizard":
                player = new Player(classType, 200, 50, 200, 100);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/players/' + classType.toLowerCase() + '.jpg" class="img-avatar"></img><div class="stats"><h3>' + classType + '</h3><p class="health-player"> Health = ' + player.health + '</p> <p> Strength = ' + player.strength + '</p><p> Intelligence = ' + player.intelligence + '</p><p> Speed = ' + player.speed + '</p></div>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        getHeader.innerHTML = '<p>Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering, and futility exist!!!</p>';
        getActions.innerHTML = '<a href="#" class="btn-preFight" onclick="GameManager.setFight()">Search for Enemy!</a>';
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getEnemy = document.querySelector(".enemy");
        let getActions = document.querySelector(".actions");
        // create enemy
        let enemy01 = new Enemy("Demon", 180, 110, 90, 110);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;  
        }
        getHeader.innerHTML = '<h3>Be READY to fight!</h3>';
        getActions.innerHTML = '<a href="#" class="btn-preFight"  onclick="PlayerMoves.calcAttack()">Attack!!</a>';
        getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '" class="img-avatar"></img><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy"> Health = ' + enemy.health + '</p> <p> Strength = ' + enemy.strength + '</p><p> Intelligence = ' + enemy.intelligence + '</p><p> Speed = ' + enemy.speed + '</p></div>';
    }
}
