import styles from './Title.module.css'

const Title = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Agent Tuning &amp; Optimization</h1>
            <h2 className={styles.subtitle}>August 2022 Scoreboard</h2>
        </div>
    )
}

export default Title