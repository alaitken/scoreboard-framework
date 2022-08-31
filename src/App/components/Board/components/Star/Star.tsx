import styles from './Star.module.css'
import AustinHead from '../../../../../images/austin-head.png'
import MehrzadHead from '../../../../../images/mehrzad-head.png'
import NateHead from '../../../../../images/nate-head.png'
import WeimingHead from '../../../../../images/weiming-head.png'
import JonathanHead from '../../../../../images/austin-head.png'
import BlobFishImg from '../../../../../images/blob_fish.png'
import Fire from '../../../../../images/fire.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStarSharp } from '@fortawesome/pro-solid-svg-icons'
import { useEffect, useState } from 'react'
import { clearInterval } from 'timers'

interface Props {
    isTeamVisiting?: boolean
    isMonsterVisiting?: boolean
    isDestroyed?: boolean
    style?: {}
}

const Star = ({
    isTeamVisiting = false,
    isMonsterVisiting = false,
    isDestroyed = true,
    style
}: Props) => {

    const [clock, setClock] = useState<number>(0)

    useEffect(() => {
        if (isTeamVisiting) {
            // const interval = setInterval(() => {setClock(prevClock => { console.log(prevClock + 1/5); return prevClock + 1; })}, 1000)
        }
        //console.log(interval)
        // return () => {
        //     clearInterval(interval)
        // }
    }, [])

    const headArr = [AustinHead, WeimingHead, JonathanHead, NateHead, MehrzadHead]
    

    return (
        <div style={style} className={styles.container}>
            <FontAwesomeIcon icon={faStarSharp} style={{fontSize: '4rem', opacity: isDestroyed ? 0.45 : 1}}/>
            {isDestroyed && 
                <p 
                    style={{position: 'absolute', top: '80%', fontSize: '1.3rem', fontWeight: 600, letterSpacing: '1px'}}
                >
                    Eaten!
                </p>
            }
            {isMonsterVisiting &&
                <img 
                    className={styles.monster}
                    src={BlobFishImg}
                    alt='Blob Fish'
                />
            }
            {isTeamVisiting &&
                <div 
                    className={styles.headContainer}
                    // style={{
                    //     position: 'absolute',
                    //     border: '3px solid gold',
                    //     height: '100%',
                    //     width: '100%'
                    // }}
                >
                    <img 
                        className={styles.head1}
                        alt="Austin's Head"
                        src={headArr[0]}
                    />
                    <img 
                        className={styles.head2}
                        alt="Austin's Head"
                        src={headArr[1]}
                    />
                    <img 
                        className={styles.head3}
                        alt="Austin's Head"
                        src={headArr[2]}
                    />
                    <img 
                        className={styles.head4}
                        alt="Austin's Head"
                        src={headArr[3]}
                    />
                    <img 
                        className={styles.head5}
                        alt="Austin's Head"
                        src={headArr[4]}
                    />
                </div>
            }
            {
            // isDestroyed ? 
            //     <div className={styles.deadStarContainer}>
            //         <FontAwesomeIcon icon={faStarSharp} style={{fontSize: '4rem', opacity: 0.35}}/>
            //         {/* <div className={styles.starDead}></div> */}
            //         <p style={{marginTop: '5px', fontSize: '1.2rem', fontWeight: 600}}>Eaten!</p>
            //     </div>
            //     // <img className={styles.fire} src={Fire}/>
            //     :
            //     <FontAwesomeIcon icon={faStarSharp} style={{fontSize: '4rem'}}/>
                //<div className={styles.star}></div>
            }
            {/* <div 
                className={styles.topContainer}
                style={{opacity: isTeamVisiting ? 1 : 0}}
            >
                <img 
                    className={styles.head}
                    alt="Austin's Head"
                    src={headArr[clock%headArr.length]}
                />
            </div>
            <div 
                className={styles.middleContainer}
            >
                {isTeamVisiting && 
                    <img 
                        className={styles.head}
                        style={{marginRight: '30px'}}
                        alt="Weiming's Head"
                        src={headArr[(clock+1)%headArr.length]}
                    />
                }
                {isMonsterVisiting &&
                    <img 
                        className={styles.monster}
                        style={{marginRight: '10px'}}
                        src={BlobFishImg}
                        alt='Blob Fish'
                    />
                }
                {isTeamVisiting && 
                    <>
                        <div style={{width: '30px'}}></div>
                        <img 
                            className={styles.head}
                            alt="Jonathan's Head"
                            src={headArr[(clock+4)%headArr.length]}
                        />
                    </>
                }
            </div>
            <div 
                className={styles.bottomContainer}
                style={{opacity: isTeamVisiting ? 1 : 0}}
            >
                <img 
                    className={styles.head}
                    alt="Nate's Head"
                    src={headArr[(clock+2)%headArr.length]}
                />
                <div style={{width: '25px'}}></div>
                <img 
                    className={styles.head}
                    alt="Mehrzad's Head"
                    src={headArr[(clock+3)%headArr.length]}
                />
            </div> */}
        </div>
    )
}

export default Star