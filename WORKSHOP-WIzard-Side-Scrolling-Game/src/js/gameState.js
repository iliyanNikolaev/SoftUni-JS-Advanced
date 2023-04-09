function initState() {
    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);

    let state = {
        player: 'ilich',
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 5
        },
        bugStats: {
            width: 50,
            height: 50,
            nextSpawnTimeStamp: 0,
            maxSpawnInterval: 5000,
            speed: 2
        },
        keys: {
            KeyA: false,
            KeyD: false,
            KeyW: false,
            KeyS: false,
            Space: false
        }
    };

    return state;
}