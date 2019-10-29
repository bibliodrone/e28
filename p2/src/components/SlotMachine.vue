<template>
<div>
      <br>
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

          <div v-if = 'gameMode == "initial"'>
            <div id = "fundAndWager" class = "display">
                <div id = "funds">Funds: {{ balanceDisplay }}</div>
                <div id = "wager">Wager: {{wager}}</div>
              </div>
                <div class="display" id = "slotsDisplay">
                    <div id="slot1" class = "slot"> </div>
                    <div id="slot2" class = "slot"> </div>
                    <div id="slot3" class = "slot"> </div>
                </div>
          </div>

          <div id="slots">
            <div v-if = 'gameMode == "play"'>
              <div id = "fundAndWager" class = "display">
                <div id = "funds">Funds: {{ balanceDisplay }}</div>
                <div id = "wager" v-bind:class = "{error: wagerError}">Wager: {{ wagerDisplay }}</div>
              </div>
                <div class="display" id = "slotsDisplay">
                    <div id="slot1" class = "slot">{{slot1}}</div>
                    <div id="slot2" class = "slot">{{slot2}}</div>
                    <div id="slot3" class = "slot">{{slot3}}</div>
                </div>
            </div>

            <div v-if = 'gameMode == "end"'>
              <div id = "fundAndWager" class = "display">
                  <div id = "funds">Funds: {{balanceDisplay}} </div>
                  <div id = "wager" >Wager: XXX </div>
                </div>
                  <div class="display" id = "slotsDisplay">
                      <div id="slot1" class = "slot">{{slot1}}</div>
                      <div id="slot2" class = "slot">{{slot2}}</div>
                      <div id="slot3" class = "slot">{{slot3}}</div>
                  </div>
            </div>
          </div>

          <hr>
          <div id="bottom-panel">
            <div id="output-message" v-bind:class = "{jackpotMsg:wonJackpot, error:lostMoney}">{{ outcomeMsg }}</div>
          </div>
          
        </div> <!-- End of 'slot machine'-->
        <div id = "hinge">
          <span>&#x2593;&#x2592;&#x2593;</span>
        </div>
        <div id = "lever">
            <button @click='pullTheLever'>Pull the Lever!</button>
        </div>
      </div>
      <footer>
        &#169;2019 Waldovision
      </footer>
    </div><!-- End of 'app' -->          
</template>

<script>
export default {
  data:function() {
      return{};
  },
  props: {
    data: {
        items: ["🍎", "➆", "♠", "🍒", "♥", "🍌"],
        jackpot: 0,
        wager: 25.00,
        wagerError: false,
        balance: 500.00,
        slot1:'?',
        slot2:'?',
        slot3:'?',
        gameMode: "initial",
        outcomeMsg: '',
        lostMoney: false,
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
