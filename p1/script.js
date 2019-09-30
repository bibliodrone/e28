var app = new Vue({
  el: '#app', 

  methods: {
    slotMachine() {
      let jackpot = 0; // will remain 0 until two or more slots yield the same symbol
  
      const items = ["🍎", "➆", "♠", "🍒", "♥", "🍌"];
  
      let slots = document.getElementsByClassName("slot");
      let results = [];
  
      for (var n = 0; n < slots.length; n++) {
        let randomNumber = Math.floor(Math.random() * (items.length));
        slots[n].innerText = items[randomNumber];
        results.push(items[randomNumber])
      }
  
      if (results[0] == results[1]) { // if one and two match
        if (results[1] == results[2]) { // then if two and three also match
          jackpot = 2; // all three match ... jackpot!
        } else {
          jackpot = 1; // only 2 of 3 match -- partial jackpot
        }
      } else {
        if (results[1] == results[2] || results[0] == results[2]) { //if only two and three or one and three match
          jackpot = 1; // only a partial 2 of 3 jackpot
        }
      }
  
      if (jackpot == 0) {
        document.getElementById("output-message").textContent = "Better luck next time...";
      }
      if (jackpot == 1) {
        document.getElementById("output-message").textContent = "Partial match...";
      }
      if (jackpot == 2) {
        document.getElementById("output-message").textContent = "Jackpot!";
      }
  
    }
  }
/*
  let lever = document.getElementById("lever");

  lever.addEventListener("click", slotMachine);

  
  */
});