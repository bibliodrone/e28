let app = new Vue({
    el: '#app',
    data: {
        words: [
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', 'Rushmore’s left edge'],
            ['pumpkin', 'Halloween’s favorite fruit'],
            ['football', 'Play with your hands or feet, depending on your location']
        ],
        gameMode: 'start',
        name: '',
        hint: '',
        word: '',
        guess: '',
        lastWord: '',
        feedback: false,
        correct: false,
    },
    computed: {
        displayWord: function () {
            var wordAsArray = this.word.split('');
            wordAsArray.sort(() => Math.random() - 0.5);
            return wordAsArray.join('');
        }
    },
    methods: {
        submitGuess: function () {
            this.correct = this.guess == this.word;
            this.feedback = true;
        },
        startGame: function () {
            this.gameMode = 'play';
            this.loadGame();
        },
        loadGame: function () {
            this.feedback = false;
            this.guess = '';

            while (this.word === this.lastWord) {
                this.choice = this.words[Math.floor(Math.random() * this.words.length)];
                this.word = this.choice[0];
                this.hint = this.choice[1];
            }

            this.lastWord = this.word;
        }
    }
});