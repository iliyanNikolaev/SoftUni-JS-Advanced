function cardsDeck(cards) {
    
    let arr = [];

    for (const cardAsStr of cards) {

        let face = cardAsStr.slice(0, -1);

        let suit = cardAsStr.slice(-1);

        try{
            let element = playingCards(face, suit);

            arr.push(element);
        } catch {

            arr = [];

            arr.push(`Invalid card: ${cardAsStr}`);
        }
    }

    console.log(arr.join(' '));

    function playingCards(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
        if(faces.indexOf(face) === -1){
            throw new Error('Invalid face! ' + face );
        }
    
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }
                
        if(suits[suit] === undefined){
            throw new Error('Invalid suit! ' + suit);
        }
    
    
        return {
            face: face,
            suit: suits[suit],
            toString(){
                return this.face + this.suit;
            }
        }
    }

}

cardsDeck(['AS', '10D', 'KH', '2C']);
cardsDeck(['5S', '3D', 'QD', '1C']);
