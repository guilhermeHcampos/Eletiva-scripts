import Square from '../Square/Square';
import styles from './Board.module.css';

const initialBoardSetup = [
    [null, { color: 'black' }, null, { color: 'black' }, null, { color: 'black' }, null, { color: 'black' }],
    [{ color: 'black' }, null, { color: 'black' }, null, { color: 'black' }, null, { color: 'black' }, null],
    [null, { color: 'black' }, null, { color: 'black' }, null, { color: 'black' }, null, { color: 'black' }],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [{ color: 'white' }, null, { color: 'white' }, null, { color: 'white' }, null, { color: 'white' }, null],
    [null, { color: 'white' }, null, { color: 'white' }, null, { color: 'white' }, null, { color: 'white' }],
    [{ color: 'white' }, null, { color: 'white' }, null, { color: 'white' }, null, { color: 'white' }, null],
];


export default function Board() {
    const renderBoard = () => {
        const boardWithPieces = [];

        initialBoardSetup.forEach((row, rowIndex) => {
            row.forEach((piece, colIndex) => {
                const isBlack = (rowIndex + colIndex) % 2 !== 0;
                boardWithPieces.push(
                    <Square
                        key={`${rowIndex}-${colIndex}`}
                        isBlack={isBlack}
                        piece={piece}
                    />
                );
            });
        });

        return boardWithPieces;
    };

    return (
        <div className={styles.board}>
            {renderBoard()}
        </div>
    );
}