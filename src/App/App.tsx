import { useState } from 'react'
import styles from './App.module.css'
import Board from './components/Board/Board'
import DevProjects from './components/DevProjects/DevProjects'
import Title from './components/Title/Title'

interface DevProject {
    id: string
    name: string
    commitmentsCompleted: number
    commitmentsTotal: number
}

const App = () => {

    const devProjects1: DevProject[] = [
        {
            id: '0',
            name: 'Agent Tuning - Continuous Improvement',
            commitmentsCompleted: 0,
            commitmentsTotal: 5
        },
        {
            id: '1',
            name: 'CPPx - Failures and Optimizations',
            commitmentsCompleted: 0,
            commitmentsTotal: 2
        },
    ]

    const [devProjects, setDevProjects] = useState<DevProject[]>(devProjects1)

    const numOfTasks = () => {
        var total = 0
        devProjects.forEach(project => {
            total = total + project.commitmentsTotal
        })
        return total
    }

    const numOfCompletedTasks = () => {
        var total = 0
        devProjects.forEach(project => {
            total = total + project.commitmentsCompleted
        })
        return total
    }

    const incCommitmentsCompleted = (name: string) => {
        console.log('inc!', name)
        setDevProjects(prevProjects => {
            console.log(prevProjects)
            return prevProjects.map(project => {
                if (name === project.name && project.commitmentsCompleted < project.commitmentsTotal) {
                    console.log('INcrement', name)
                    project.commitmentsCompleted = project.commitmentsCompleted + 1
                }
                return project
            })
        })
    }

    const decCommitmentsCompleted = (name: string) => {
        console.log('dec!')
        setDevProjects(prevProjects => prevProjects.map(project => {
            if (name === project.name && project.commitmentsCompleted > 0) {
                project.commitmentsCompleted = project.commitmentsCompleted - 1
            }
            return project
        }))
    }

    return (
        <div className={styles.container}>
            <Title />
            <div className={styles.bodyContainer}>
                <Board 
                    numOfTasks={numOfTasks()}
                    numOfCompletedTasks={numOfCompletedTasks()}
                    devProjects={devProjects}
                />
                <DevProjects 
                    incCommitmentsCompleted={incCommitmentsCompleted}
                    decCommitmentsCompleted={decCommitmentsCompleted}
                    devProjects={devProjects}
                    numOfTasks={numOfTasks()}
                    numOfCompletedTasks={numOfCompletedTasks()}
                />
            </div>
        </div>
    )
}

export default App