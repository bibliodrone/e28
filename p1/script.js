let app = new Vue({
  el: '#app',
  data: {
    items: ["🍎", "➆", "♠", "🍒", "♥", "🍌"],
    jackpot: 0,
    wager: 5.00,
    wagerError: false,
    balance: 500.00,
    slot1:'?',
    slot2:'?',
    slot3:'?',
    gameMode: "initial",
    outcomeMsg: '',
    busted: false,
  },
  computed: {
    balanceDisplay: function () {
      return this.balance.toFixed(2);
    },
    wagerDisplay: function() {
      return this.wager.toFixed(2);
    },
    wonJackpot : function() {
      return this.jackpot == 3;
    }
  }, 

  watch: {
    balance: function() {
      if (this.balance < 1) {
        this.playAgain();
      }
    }
  },

  methods: {
    pullTheLever: function() {
      if (this.wager > this.balance && this.balance > 0) {
        this.wagerError = true;
        this.wager = this.balance;
      }  else if (this.balance < 1) {
        this.playAgain();
      } else {
        this.wagerError = false;
        this.jackpot = 0;
        this.gameMode = "play";
        var slots = [];
        for (var i = 0; i < 3; i++) {
          let randomNumber = Math.floor(Math.random() * (this.items.length));
          slots.push(randomNumber);
        }
        this.slot1 = this.items[slots [0]];
        this.slot2 = this.items[slots [1]];
        this.slot3 = this.items[slots [2]];
        //console.log(slots);
        //this.balance -= this.wager;
  
        this.betOutcome(slots);
      }
    },

    betOutcome: function(slots) {
      if (this.balance < 1) {
        this.playAgain();
      } else {
        var balanceChange;
        var newBalance = this.balance;
        var s1 = slots[0];
        var s2 = slots[1];
        var s3 = slots[2];

        //console.log(s1 + " " + s2 + "  " + s3);
        var s1s2 = (s1 == s2);
        var s2s3 = (s2 == s3);
        var s1s3 = (s1 == s3);
        //console.log(s1s2, s2s3, s1s3);

        if(s1s2) {this.jackpot += 1};
        if(s2s3) {this.jackpot += 1};
        if(s1s3) {this.jackpot += 1};

        console.log("Jackpot status " + this.jackpot.toFixed(2));
      
        if (this.jackpot == 0) {
          balanceChange = (-1 * this.wager);

          this.outcomeMsg = "Loss: " + balanceChange.toFixed(2);

          //document.getElementById("output-message").textContent = "Better luck next time...";
        }
        else if (this.jackpot == 1 || this.jackpot == 2) {
          balanceChange = ((-1 * this.wager)/2);
          this.outcomeMsg = "Loss: " +  balanceChange.toFixed(2);
          //document.getElementById("output-message").textContent = "Partial match...";
        }
        else if (this.jackpot == 3) {
          balanceChange = (1.5 * this.wager);
          this.outcomeMsg = "Jackpot! You win " + (balanceChange.toFixed(2));
          //document.getElementById("output-message").textContent = "Jackpot!";
        } 
        else {
          this.outcomeMsg = "Jackpot code: " + jackpot;
        }
        newBalance = newBalance + balanceChange;
        if(newBalance < 1) {
          this.playAgain();
        }
        this.balance = newBalance;
      }
    },

    playAgain : function () {
      this.balance = 0;
      this.wager = 0;
      this.outcomeMessage = "Better Luck Next Time!";
      this.gameMode = "end";
    },


    resetGame : function () {
      this.balance = 500;
      this.wager = 5;
      this.wagerError = false;
      this.outcomeMsg = '';
      this.gameMode = "initial";
    }
  }
});