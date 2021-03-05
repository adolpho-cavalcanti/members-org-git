import styles from '../styles/components/Card.module.css';

export function Card() {
    return (
        <div className={styles.card}>
            <img src="https://avatars.githubusercontent.com/u/21251877?v=4" alt="Avatar" style={{ width: '100%' }} />
            <div className={styles.container}>
                <h4>John Doe</h4>
                <p> Architect and Engineer</p>
            </div>
        </div>
    );
}