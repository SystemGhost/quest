class TicTacToe {
    constructor() {
            this.matrix = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ];
            this.tempPlayer = 0;
            this.tempSymbol = 'x';
            this.turns = 0;
            this.finished = false;
            this.winnerSymbol = null;
    }

    getCurrentPlayerSymbol() {
        return this.tempSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if( this.checkFieldValue(rowIndex, columnIndex) && !this.finished ) {
            this.matrix[rowIndex][columnIndex] = this.tempSymbol;
            this.switchPlayer();
            this.turns++;       //количество ходов
            return false;
        }
        return true;
    }

    isFinished() {
        let symbolEnd = this.checkFillSymbol();
        if( symbolEnd != null || this.isDraw() ) {
            this.finished = true;
            this.winnerSymbol = symbolEnd;
            return  true;
        }
        return false;
    }

    getWinner() {
    	let symbolEnd = this.checkFillSymbol();
    	if( symbolEnd != null ) {
	    	this.finished = true;
	        this.winnerSymbol = symbolEnd;
        }
        return symbolEnd;
    }

    noMoreTurns() {
        if ( this.turns == 9 ) {
            this.finished = true;
            return true;
        } else
            return false;
    }

    isDraw() {
        if( this.noMoreTurns() && !this.getWinner() ) {
            return true;
        } else
        	return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }

    switchPlayer() {
        switch( this.tempPlayer ) {
            case 0:
                this.tempPlayer = 1;
                this.tempSymbol = 'o';
                break
            case 1:
                this.tempPlayer = 0;
                this.tempSymbol = 'x';
             	break
            default:
                this.tempPlayer = null;
                this.tempSymbol = null;
            }
    }

    checkFieldValue(rowIndex, columnIndex) {
        if( ( rowIndex >= 0 && columnIndex >= 0 ) && ( rowIndex < 3 && columnIndex < 3 ) )
        {
            if( this.matrix[rowIndex][columnIndex] == null )
                return true;
            else
                return false;
        }
        else
            return false;
    }

    checkFillSymbol() {
        if( this.matrix[0][0] != null && this.matrix[0][0] == this.matrix[1][0] && this.matrix[0][0] == this.matrix[2][0] ) return this.matrix[0][0];
        if( this.matrix[0][1] != null && this.matrix[0][1] == this.matrix[1][1] && this.matrix[0][1] == this.matrix[2][1] ) return this.matrix[0][1];
        if( this.matrix[0][2] != null && this.matrix[0][2] == this.matrix[1][2] && this.matrix[0][2] == this.matrix[2][2] ) return this.matrix[0][2];
        if( this.matrix[0][0] != null && this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][0] == this.matrix[0][2] ) return this.matrix[0][0];
        if( this.matrix[1][0] != null && this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][0] == this.matrix[1][2] ) return this.matrix[1][0];
        if( this.matrix[2][0] != null && this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][0] == this.matrix[2][2] ) return this.matrix[2][0];
        if( this.matrix[0][0] != null && this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2] ) return this.matrix[0][0];
        if( this.matrix[0][2] != null && this.matrix[0][2] == this.matrix[1][1] && this.matrix[0][2] == this.matrix[2][0] ) return this.matrix[0][2];
        return null;
    }
}

module.exports = TicTacToe;
