class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.winner = null;
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    checkWin() {
        if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2] && this.board[0][0] !== null) {
            this.winner = this.board[0][0];
        }

        if (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0] && this.board[0][2] !== null) {
            this.winner = this.board[0][2];
        }

        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2] && this.board[i][0] !== null) {
                this.winner = this.board[i][0];
            }
            if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i] && this.board[0][i] !== null) {
                this.winner = this.board[0][i];
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[columnIndex][rowIndex] === null) {
            this.board[columnIndex][rowIndex] = this.currentPlayerSymbol;
            this.checkWin();
            this.currentPlayerSymbol === 'x' ? this.currentPlayerSymbol = 'o' : this.currentPlayerSymbol = 'x';
        }
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.board.map(row => row.join('')).join('').length === 9;
    }

    isFinished() {
        return this.noMoreTurns() || this.winner !== null;
    }

    isDraw() {
        return this.noMoreTurns() && this.winner === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[colIndex][rowIndex];
    }
}

module.exports = TicTacToe;