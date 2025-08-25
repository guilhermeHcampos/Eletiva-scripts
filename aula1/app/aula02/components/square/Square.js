import styles from './Square.module.css';
import Piece from '../Piece/Piece';

export default function Square({ isBlack, piece }) {
    const colorClass = isBlack ? styles.black : styles.white;

    return (
        <div className={`${styles.square} ${colorClass}`}>

            {piece && <Piece color={piece.color} />}
        </div>
    );
}
