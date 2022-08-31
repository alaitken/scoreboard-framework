import styles from './CircularProgress.module.css'

interface Props {
    progress: number
}

const CircularProgress = ({
    progress
}: Props) => {

    const accentColor = () => {
        if (progress < 33.3) {
            return 'red'
        } else if (progress < 66.6) {
            return 'yellow'
        } 
        return 'green'
    }

    return (
        <div style={{borderColor: accentColor()}} className={styles.container}>
            <p className={styles.percent}>{progress}%</p>
            <p className={styles.completed}>Completed</p>
        </div>
    )
}

export default CircularProgress