import React from 'react'
import styles from '../../css/lineScale.module.css';


const SkiLevelScale: React.FC<{ minLevel: number; maxLevel: number }> = ({ minLevel, maxLevel }) => {
    const startPercentage = ((minLevel - 1) / 9) * 100;
    const endPercentage = ((maxLevel - 1) / 9) * 100;
    const average = (minLevel + maxLevel) / 2;
    const width = endPercentage - startPercentage;
  
    return (
      <div className={styles.container}>
        <h3 className={styles.header}>Ski Level  -  {average.toFixed(0)}</h3>
        <div className={styles.scaleContainer}>
          <div className={styles.scale}>
            <div 
              className={styles.filled} 
              style={{ left: `${startPercentage}%`, width: `${width}%` }}
            />
          </div>
          <div className={styles.labels}>
            <span>Beginner</span>
            <span>Expert</span>
          </div>
        </div>
      </div>
    );
  };

  export default SkiLevelScale