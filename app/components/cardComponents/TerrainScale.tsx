import React from 'react'
import styles from '../../css/lineScale.module.css'

const TerrainScale: React.FC<{ terrain: number }> = ({ terrain }) => {
    const percentage = ((terrain - 1) / 9) * 100;
  
    return (
      <div className={styles.container}>
        <h3 className={styles.header}>Terrain  -  {percentage.toFixed(0)}% for piste</h3>
        <div className={styles.scaleContainer}>
          <div className={styles.scale}>
            <div 
              className={styles.point} 
              style={{ left: `${percentage}%` }}
            />
          </div>
          <div className={styles.labels}>
            <span>Off-piste</span>
            <span>Piste</span>
          </div>
        </div>
        <div className={styles.valueContainer}>
          <span className={styles.percentage}>{percentage.toFixed(1)}%</span>
        </div>
      </div>
    );
  };

  export default TerrainScale