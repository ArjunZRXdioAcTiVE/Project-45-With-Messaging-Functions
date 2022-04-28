// Functions

messagingSetup () {
    firebase.ref(`players/player${this.opponentIndex}/name`).on ("value", (data) => {
        this.opponentInfo = data.val ();
        console.log (this.opponentInfo); 
    })

    this.messagingInfo.html (`You can now chat with ${this.opponentInfo}, your opponent`);
    this.messagingInput.show ();
    this.messageButton.show ();
    this.messageButtonClicked ();
    this.messageRecieved ();
}

messageButtonClicked () {
    this.messagesSent += 1;

    firebase.ref (`messages/player${this.index}message${this.messagesSent}`).set ({
       message : this.messagingInput.value(),
    })
}

messageRecieved () {
    var opponentMessage;

    this.opponentMS += 1;

    database.ref ("/").on ("value", function (data) {
        opponentMessage = `messages/player${this.opponentIndex}/message${this.opponentMS}`
    })

    var displayMessage = ceateElement ("h6").html(opponentMessage).position(this.mEX, this.messageButton.y + 20);
}

// Calling
player.messagingSetup ()
player.messageSetupExecuted = true;

// Properties

this.messagingInfo = createElement("h6").position (this.mEX, height/2 + 50).class ("greeting");
        this.messagingInput = createInput ("").attribute("placeholder", "Type Your Message Here").position(this.mEX, this.messagingInfo.y + 50).class("customInput").hide();
        this.messageButton = createButton("Send").position(this.mEX, this.messagingInput.y + 50).class("customButton").hide ();
        this.messageSetupExecuted = false;
        this.opponentMS = 0;
        
        this.messagesSent = 0;
