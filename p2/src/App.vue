<template>
  <div id="app">
    <header>
      <h2>Slot Machine</h2>
        <p>Enter a wager (default is $25.00)</p>
        <p>Click on the "Pull the Lever" button to try your luck, or just hit Enter!</p>
        <p>If you match two out of three slots, you keep half your wager.</p>
        <p>Jackpot wins 2.5 x wager.</p>
    </header>
    <slot-machine>
      </slot-machine>
    <div id = "hinge">
      <span>&#x2593;&#x2592;&#x2593;</span>
    </div>
    <div id = "lever">
      <button @click='pullTheLever'>Pull the Lever!</button>
    </div>
  </div>
 </template>

<script>
import SlotMachine from './components/SlotMachine.vue'

export default {
  data:function() {
    return {};
  },
  components: {
    SlotMachine
  },
  props: {
    items: {
      type: Array, 
      default: ["🍎", "➆", "♠", "🍒", "♥", "🍌"]
    }
  },

  methods: {
      /* Ascertain the outcome of the round, based on the degree of matching between the three slots
       Jackpot result score is 0-3; 0 = no matching slots; 1 or 2 = partial match; 3 = Jackpot;
       It's a crude but straightforward way to do the test. 
       Jackpot score determines wager outcome: total wager loss, 0.5 wager loss, jackpot win = 2.5 * wager.
    */
    betOutcome: function(slots) {   
      if (this.balance < 1) {
        this.playAgain();
      } else {
        var balanceChange;
        var newBalance = this.balance;
        var s1 = slots[0];
        var s2 = slots[1];
        var s3 = slots[2];

        var s1s2 = (s1 == s2);
        var s2s3 = (s2 == s3);
        var s1s3 = (s1 == s3);

        if(s1s2) {this.jackpot += 1}
        if(s2s3) {this.jackpot += 1}
        if(s1s3) {this.jackpot += 1}

        if (this.jackpot == 0) {
          balanceChange = (-1 * this.wager);

          this.outcomeMsg = "Loss: " + balanceChange.toFixed(2);
          this.lostMoney = true;
          
        }
        
        else if (this.jackpot == 1 || this.jackpot == 2) {
          balanceChange = ((-1 * this.wager)/2);
          this.outcomeMsg = "Loss: " +  balanceChange.toFixed(2);
          this.lostMoney = true;
        }
        
        else if (this.jackpot == 3) {
          balanceChange = (2.5 * this.wager);
          this.outcomeMsg = "Jackpot! You win " + (balanceChange.toFixed(2));
          this.lostMoney = false;
        } 
        
        else {
          this.outcomeMsg = "Jackpot code unknown";
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
      this.outcomeMsg = "Better Luck Next Time!";
      this.gameMode = "end";
    },


    resetGame : function () {
      this.balance = 500;
      this.wager = 25;
      this.wagerError = false;
      this.outcomeMsg = '';
      this.gameMode = "initial";
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>