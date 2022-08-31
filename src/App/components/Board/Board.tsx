import styles from './Board.module.css'
import BackgroundImg from '../../../images/space.jpg'
import XenomorphImg from '../../../images/xenomorphStand.png'
import BlobFishImg from '../../../images/blob_fish.png'
import BusImg from '../../../images/bus.png'
import AustinHeadImg from '../../../images/austin-head.png'
import { useEffect, useState } from 'react'
import Star from './components/Star/Star'

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
}

const Board = ({
    devProjects,
    numOfTasks,
    numOfCompletedTasks
}: Props) => {

    const arr = [1,2,3,4,5,6,7]

    const accentColor = () => {
        if (numOfCompletedTasks/numOfTasks < 0.333) {
            return 'red'
        } else if (numOfCompletedTasks/numOfTasks < 0.666) {
            return 'yellow'
        } 
        return 'green'
    }
    
    return (
        <div className={styles.container}>
            <img 
                style={{borderColor: accentColor()}}
                className={styles.backgroundImg}
                alt='Board'
                src={BackgroundImg}
            />
            <div className={styles.overlayContainer}>
                <div className={styles.innerOverlayContainer}>
                    <Star 
                        style={{
                            position: 'absolute',
                            top: '5%',
                            left: '0%'
                        }}
                        isTeamVisiting={numOfCompletedTasks === 0} 
                        isMonsterVisiting={numOfCompletedTasks === 1} 
                        isDestroyed={numOfCompletedTasks > 0} 
                    />
                    <Star 
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '20%'
                        }}
                        isTeamVisiting={numOfCompletedTasks === 1} 
                        isMonsterVisiting={numOfCompletedTasks === 2} 
                        isDestroyed={numOfCompletedTasks > 1} 
                    />
                    <Star
                        style={{
                            position: 'absolute',
                            top: '30%',
                            left: '30%'
                        }} 
                        isTeamVisiting={numOfCompletedTasks === 2} 
                        isMonsterVisiting={numOfCompletedTasks === 3}  
                        isDestroyed={numOfCompletedTasks > 2} 
                    />
                    <Star
                        style={{
                            position: 'absolute',
                            top: '45%',
                            left: '45%'
                        }} 
                        isTeamVisiting={numOfCompletedTasks === 3} 
                        isMonsterVisiting={numOfCompletedTasks === 4} 
                        isDestroyed={numOfCompletedTasks > 3} 
                    />
                    <Star
                        style={{
                            position: 'absolute',
                            top: '75%',
                            left: '51%'
                        }} 
                        isTeamVisiting={numOfCompletedTasks === 4} 
                        isMonsterVisiting={numOfCompletedTasks === 5} 
                        isDestroyed={numOfCompletedTasks > 4} 
                    />
                    <Star 
                        style={{
                            position: 'absolute',
                            top: '77.5%',
                            left: '77.5%'
                        }}
                        isTeamVisiting={numOfCompletedTasks === 5} 
                        isMonsterVisiting={numOfCompletedTasks === 6} 
                        isDestroyed={numOfCompletedTasks > 5} 
                    />
                    <Star 
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '85%'
                        }}
                        isTeamVisiting={numOfCompletedTasks === 6} 
                        isMonsterVisiting={numOfCompletedTasks === 7} 
                        isDestroyed={numOfCompletedTasks > 6} 
                    />
                </div>
                {/* {Array(numOfTasks).fill(<div 
                        key={i} 
                        style={{
                            position: 'absolute',
                            top: i % 2 === 0 ? '80%' : '10%',
                            left: `${5+((i/numOfTasks)*100)}%`,
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: '#f5f5f5'
                        }}>
                    </div>
                )} */}
                {/* <img 
                    className={styles.blobFishImg}
                    alt='Blob Fish'
                    src={BlobFishImg}
                /> */}
                {/* {arr.map((_, i) => <Star key={i}/>)} */}
            </div>
        </div>
    )
}

export default Board