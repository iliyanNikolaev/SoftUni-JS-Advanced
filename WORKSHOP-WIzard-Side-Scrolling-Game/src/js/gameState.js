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
            height: 50
        },
        keys: {
            KeyA: false,
            KeyD: false,
            KeyW: false,
            KeyS: false
        }
    };

    return state;
}