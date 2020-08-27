import React from 'react';
import CountUp from 'react-countup';
import styles from './DataCards.module.css';

const DataCards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    
    if(!confirmed) {return 'Loading'}

    return(
        <div className={styles.container}>
            <div className={styles.info}>
                Confirmed: <CountUp start={0} end={confirmed.value} separator={','} duration={4}/>
            </div>
            <div className={styles.info}>
                Recovered: <CountUp start={0} end={recovered.value} separator={','} duration={3}/>
            </div>
            <div className={styles.info}>
                Deaths: <CountUp start={0} end={deaths.value} separator={','} duration={3}/>
            </div>
            <div className={styles.info}>Updated: {new Date(lastUpdate).toDateString()}</div>
        </div>
    )
}

export default DataCards;