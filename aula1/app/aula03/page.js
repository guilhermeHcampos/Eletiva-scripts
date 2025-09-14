import styles from './page.module.css';

const menuItems = [
    { id: 1, nome: 'Carne', preco: 'R$ 10,00', imagemSrc: '/images/Carne.png' },
    { id: 2, nome: 'Pizza', preco: 'R$ 10,00', imagemSrc: '/images/Pizza.png' },
    { id: 3, nome: 'Carne', preco: 'R$ 10,00', imagemSrc: '/images/Carne.png' },
    { id: 4, nome: 'Pizza', preco: 'R$ 10,00', imagemSrc: '/images/Pizza.png' },
    { id: 5, nome: 'Carne', preco: 'R$ 10,00', imagemSrc: '/images/Carne.png' },
    { id: 6, nome: 'Pizza', preco: 'R$ 10,00', imagemSrc: '/images/Pizza.png' },
    { id: 7, nome: 'Carne', preco: 'R$ 10,00', imagemSrc: '/images/Carne.png' },
    { id: 8, nome: 'Pizza', preco: 'R$ 10,00', imagemSrc: '/images/Pizza.png' },
];

export default function HomePage() {
    const getTituloStyle = (nome) => {
        if (nome === 'Pizza') {
            return {
                color: 'rgba(0,0,0,0.65)',
                textDecoration: 'line-through'
            };
        }
        if (nome === 'Carne') {
            return {
                color: 'rgba(0,0,0,0.65)'
            };
        }
        return { color: 'rgba(0,0,0,0.65)' };
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Pastelaria do seu Zé 🥤</h1>
                </header>

                <section className={styles.menuGrid}>
                    {menuItems.map((item) => (
                        <article key={item.id} className={styles.card}>
                            <h3 style={getTituloStyle(item.nome)}>
                                {item.nome}
                            </h3>
                            <img src={item.imagemSrc} alt={`Pastel de ${item.nome}`} />
                            <p className={styles.price}>{item.preco}</p>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}
