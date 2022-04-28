class Player {
    constructor () {
        this.index = 0;
        this.name;
        this.rank = 0;
        this.score = 0;
        this.positionY = 0;
        this.positionX = 0;
       
        this.opponentName;
        this.opponentIndex;

        this.displayMessage;
        this.opponentMessage

        this.mEX = width/2; //messaging Elements X

        this.messagingInfo = createElement("h6")
            .position (this.mEX, height/2)
            .class ("greeting")
        ;
        
        this.messagingInput = createInput ("type your message here")
            .position(this.mEX, this.messagingInfo.y + 60)
            .class("customInput")
            .hide()
        ;
        
        this.messageButton = createButton("Send")
            .position(this.mEX, this.messagingInput.y + 60)
            .class("customButton")
            .hide ()
        ;
        
        this.messageSetupExecuted = false;
        this.opponentMS = 0;
    }

    trackPlayerCount () {
        var playersRef = firebase.ref ("playerCount");
        playersRef.on ("value", (data) => {
            playerCount = data.val ();
        })
    }

    updatePlayerCount () {
        var playerCountRef = firebase.ref ("/").update({
            playerCount: playerCount,
        });
    }      

    newPlayer () {
        this.index = playerCount;
        this.name = form.nameInput.value ();

        if (this.index == 1) {
            this.positionX = 115; // y = height - 60
            this.opponentIndex = 2;
        }   else {
            this.positionX = 2;
            this.opponentIndex = 1;
        }

        var playerInfoC = `players/player${this.index}`;

        firebase.ref (playerInfoC).set ({
            name: this.name,
            rank: 0,
            score: 0,
            positionX: this.positionX,
            positionY: this.positionY
        });

        console.log (`${this.index} ${this.positionX} ${this.name} ${playerCount}`);
    }
}