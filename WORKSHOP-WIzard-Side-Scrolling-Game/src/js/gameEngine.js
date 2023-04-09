function start(state, game){
    game.createWizard(state.wizard);

    window.requestAnimationFrame(timestamp => gameLoop(state, game, timestamp));
}

function gameLoop(state, game, timestamp){
    const { wizard } = state;
    const { wizardElement } = game;

    //Move wizard
    if(state.keys.KeyA && wizard.posX > 0){
        wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
    } 

    if(state.keys.KeyD){
        wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    } 

    if(state.keys.KeyW){
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
    }

    if(state.keys.KeyS){
        wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);
    } 

    if(state.keys.Space){
        game.wizardElement.style.backgroundImage = 'url("/src/images/wizard-fire.png")';
        game.createFireball(wizard, state);
    } else {
        game.wizardElement.style.backgroundImage = 'url("/src/images/wizard.png")';
    }

    //Spawn bugs
    if(timestamp > state.bugStats.nextSpawnTimeStamp){
        game.createBug(state.bugStats);
        state.bugStats.nextSpawnTimeStamp = timestamp + Math.random() * state.bugStats.maxSpawnInterval;
    }

    //Move bugs
    document.querySelectorAll('.bug').forEach(bug => {
        let posX = parseInt(bug.style.left);
        if (posX > 0){
            bug.style.left = (posX - state.bugStats.speed) + 'px'
        } else {
            bug.remove();
        }
    });

    //Render
    wizardElement.style.right = wizard.posX + 'px';
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';
    wizardElement.style.bottom = wizard.posY + 'px';
        

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}