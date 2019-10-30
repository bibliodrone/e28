<template>
    <div id="slots">
      <hr>
        <div id = "fundAndWager" class = "display">
        <div id = "funds">Funds: {{ balanceDisplay }}</div>
          <!-- initial:  -->
          <div v-if = 'gameMode == "initial"'>
            <div id = "wager">Wager: {{wager}}</div>
          </div>
          <!-- play:     -->
          <div v-if = 'gameMode=="play"'>
            <div id = "wager" v-bind:class = "{error: wagerError}">Wager: {{ wagerDisplay }}</div>
          </div>
          <!-- end:      -->
          <div v-if = 'gameMode == "end"'>
            <div id = "wager" >Wager: XXX </div>
          </div>
        </div>
        <div class="display" id = "slotsDisplay">
           <div id="slot1" class = "slot">{{slot1}}</div>
           <div id="slot2" class = "slot">{{slot2}}</div>
           <div id="slot3" class = "slot">{{slot3}}</div>
        </div>
        <hr>
        <div id = "background">
      <div id = "wagerMsg" v-if = 'wagerError == true'>If wager exceeds funds, wager will be set to max remaining funds.</div>
      <div id = "playAgain" v-if = 'gameMode == "end"'>
        <label for = "reset">Game Over. Reset funds and play another round?</label>
        <button id = "reset" @click='resetGame'>Yes!</button>
      </div>

      <div id = "slotMachine">
        <div id = "wagerPanel">
          <label for ='wager'>Enter a wager</label>
          <input type='number' min = "5" pattern = "[0-9]{1:4}" step = "5" id = 'wager' v-model.number='wager' @keyup.enter='pullTheLever' autofocus>
        </div>
      </div>
      <div id="bottom-panel">
      <div id="output-message" v-bind:class = "{jackpotMsg:wonJackpot, error:lostMoney}">{{ outcomeMsg }}</div>
    </div>
      </div>
    </div>
</template>

<script>
export default {
  data: function () {
      return{};
  },
  props: {
    jackpot: {type:Number, default:0},
    wager: {type:Number, default:25.00},
    wagerError: {type:Boolean, default:false},
    balance: {type:Number, default:500.00},
    slot1: {type:String, default:'?'},
    slot2: {type:String, default:'?'},
    slot3: {type:String, default:'?'},
    gameMode: {type:String, default:'initial'},
    outcomeMsg: {type:String, default:''},
    lostMoney: {type:Boolean, default:false},
  },
  computed: {
    balanceDisplay: function () {
      return this.balance.toFixed(2);
    },
    wagerDisplay: function() {
      return this.wager.toFixed(2);
    },
    wonJackpot : function() {
      return this.jackpot == 3; //Applies styling class to #outcome-message on Jackpot (jackpot: 3).
    }
  }, 
  watch: {
    balance: function() {
      if (this.balance < 1) {
        this.playAgain();
      }
    }
  },
  methods:{
    /* Validate input wager, set game-mode to play, generate random numbers to simulate
       the place where each slot comes to rest. 
    */
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
  
        this.betOutcome(slots);
      }
    },
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>