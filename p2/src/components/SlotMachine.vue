<template>
        <div id = "slotMachine">
            
          <div id = "wagerPanel">
            <label for ='wager'>Enter a wager: &nbsp;</label>
            <input type='number' min = "5" pattern = "[0-9]{1:4}" step = "5" id = 'wager' v-model.number='wager' @keyup.enter='pullTheLever' autofocus>
            
          </div>

          <div id = "fundAndWager">
            <div id = "funds">Funds: {{ balanceDisplay }}</div>
            <div id = "wager">Wager: {{wager}}</div>
          
            <div id = "slotsDisplay">
              
              <div id="slot1" class = "slot"> {{slot1}} </div>
              <div id="slot2" class = "slot"> {{slot2}} </div>
              <div id="slot3" class = "slot"> {{slot3}} </div>
              
            </div>
          </div>

          <hr>
          <div id="bottom-panel">
            <div id="output-message" v-bind:class = "{jackpotMsg:wonJackpot, error:lostMoney}">{{ outcomeMsg }}</div>
          </div>
          
        </div> <!-- End of 'slot machine'-->
</template>

<script>
export default {
  data: function() {
    return {};
  },

  props:{
    outcomeMsg: {
      type:String,
      default:"",
    },
    balanceDisplay: {
      type:Number,
      default:0
    },
    wagerDisplay: {
      type:Number,
      default:0,
    },
    wager: {
      type:Number,
      default:0,
    },
    wonJackpot: {
      type:Boolean,
      default:false,
    }, 
    lostMoney: {
      type:Boolean,
      default:false,
    },
    slot1: {
      type: String,
      default: " ",
    },
    slot2: {
      type: String,
      default: " "
    },
    slot3: {
      type: String,
      default: " "
    }
  }
}

</script>


<style>
#wagerPanel {
    margin: 10px;
    border-radius: 10px;
    padding: 15px;
    background: lightgray;
    display: inline-block;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#wagerPanel input {
  font-size: 20px; 
  font-family:'Courier New', Courier, monospace;
}
#fundAndWager {
  background: white;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.6em;
}
#slotMachine {
    width: 600px;
    margin-left: 100px;
    border: 5px dotted black;
    display: inline-block;
    background-color: red;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
}
.slot {
    display:inline-block;
    width:100px;
    overflow: hidden;
    background-color: yellow;
    font-family: Consolas;
    font-size: 48px;
    text-align: center;
    padding: 20px 20px;
    margin: 0px 10px;
    box-sizing: border-box;
    border: 1px solid lightgray;
}
#slotsDisplay {
    text-align:center;
    background-color: whitesmoke;
    border: 2px solid gray;
    margin: 10px;
    border-radius: 5px;

}
#output-message {
    height:35px;
    background:yellow;
    font-size: 20px;
    margin-top: 15px;
    font-family: 'Courier New', Courier, monospace;
}

</style>