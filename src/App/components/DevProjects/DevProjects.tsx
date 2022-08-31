import CircularProgress from './components/CircularProgress/CircularProgress'
import DevProjectItem from './components/DevProjectItem/DevProjectItem'
import styles from './DevProjects.module.css'

interface DevProject {
    id: string
    name: string
    commitmentsCompleted: number
    commitmentsTotal: number
}

interface Props {
    devProjects: DevProject[]
    numOfTasks: number
    numOfCompletedTasks: number
    incCommitmentsCompleted: (name: string) => void
    decCommitmentsCompleted: (name: string) => void
}

const DevProjects = ({
    devProjects,
    numOfTasks,
    numOfCompletedTasks,
    incCommitmentsCompleted,
    decCommitmentsCompleted
}: Props) => {
    return (
        <div className={styles.container}>
            {/* <h2>0 / 2 Commitments Completed = 0%</h2> */}
            {/* <div className={styles.devProjectsContainer}> */}
            <CircularProgress progress={Math.round(numOfCompletedTasks/numOfTasks*100)}/>
            <p className={styles.text}>Total Commitments: 7</p>
            <p className={styles.text}>Commitments Completed: 6</p>
            <hr className={styles.hr}/>
            {devProjects.map(({
                id, name,
                commitmentsCompleted,
                commitmentsTotal
            }) => (
                <DevProjectItem 
                    key={id}
                    name={name}
                    incCommitmentsCompleted={incCommitmentsCompleted}
                    decCommitmentsCompleted={decCommitmentsCompleted}
                    commitmentsCompleted={commitmentsCompleted}
                    commitmentsTotal={commitmentsTotal}
                />
            ))}
            {/* </div> */}
        </div>
    )
}

export default DevProjects