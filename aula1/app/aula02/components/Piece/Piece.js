import styles from './Piece.module.css';

export default function Piece({ color }) {
    const pieceColorClass = color === 'white' ? styles.whitePiece : styles.blackPiece;

    return (
        <div className={`${styles.piece} ${pieceColorClass}`}>
            <div className={styles.pieceInner}></div>
        </div>
    );
}