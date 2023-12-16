class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (this.lives < 1) {
            throw new Error('life goes down');
        }

        if (n !== this.number) {
            this.lives -= 1;
            return false;
        } else {
            return true;
        }
    }
}
