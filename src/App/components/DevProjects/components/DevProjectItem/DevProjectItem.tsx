import styles from './DevProjectItem.module.css'

interface Props {
    name: string
    commitmentsCompleted: number
    commitmentsTotal: number
    incCommitmentsCompleted: (name: string) => void
    decCommitmentsCompleted: (name: string) => void
}

const DevProjectItem = ({
    name,
    commitmentsCompleted,
    commitmentsTotal,
    incCommitmentsCompleted,
    decCommitmentsCompleted
}: Props) => {

    const accentColor = () => {
        if (commitmentsCompleted/commitmentsTotal < 0.333) {
            return 'red'
        } else if (commitmentsCompleted/commitmentsTotal < 0.666) {
            return 'yellow'
        } 
        return 'green'
    }

    const inc = () => {
        incCommitmentsCompleted(name)
    }

    const dec = () => {
        decCommitmentsCompleted(name)
    }

    return (
        <div style={{borderColor: accentColor()}} className={styles.container}>
            <h3 className={styles.name}>{name}</h3>
            <p style={{color: accentColor()}} className={styles.fraction}>{commitmentsCompleted} / {commitmentsTotal}</p>
            <div className={styles.buttonContainer}>
                <button onClick={inc} className={styles.incButton}>+</button>
                <div style={{width: '10px'}}></div>
                <button onClick={dec} className={styles.decButton}>-</button>
            </div>
        </div>
    )
}

export default DevProjectItem