import {listenForDynamicRequest} from "next/dist/client/components/router-reducer/ppr-navigations";

import Board from './components/Board/Board';
import styles from './damas.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Jogo de Damas</h1>
            <Board />
        </main>
    );
}