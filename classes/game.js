class Game {
    constructor () {
        this.message;
        this.opponentMessage;
    } 

    trackState () {
        var stateRef = firebase.ref ("gameState");
        stateRef.on ("value", (data) => {
            gameState = data.val ();
        });
    }

    initializeGame () {
        player = new Player ();
        if (playerCount <= 2) {
            this.trackState ();
            player.trackPlayerCount ();
    
            form = new Form ();
            form.buttonClicked ();
        }   else {
            
            var sorryMessage = createElement ("h6")
                .html(
                    `Sorry, two players have already joined the session</br>
                    please join the session later`
                )
                .position (width/2 - 500, height/2 - 100)
                .class ("greeting")
            ;
        }

        // setup references before entering form
    }

    messaging () {

    }
}