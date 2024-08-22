import { useState } from 'react';
import styles from '../css/lineScale.module.css';
import deleteSki from '../user/page'

interface Ski {
  id: number;
  created_at: string;
  user_id: string;
  name: string;
  length: number;
  radius: number;
  weight: number;
  picture: string | null;
  rating: number | null;
  camber_rocker: number;
  tip: number;
  waist: number;
  tail: number;
  stiffness: number;
  stability_vs_manoeuvrability: number | null;
  short_vs_long_turns: number | null;
  on_piste_vs_off_piste: number;
  ski_level_min: number;
  ski_level_max: number;
  height_difference: number;
  contact_length: number;
  floatation: number;
}

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


const SkiCard: React.FC<{ ski: Ski }> = ({ ski }) => {
  const renderHeightDifference = (heightDifference: number): string => {
    if (heightDifference > 0) {
      return `Your ski is ${heightDifference} cm shorter than you. A shorter ski is easier to maneuver and initiate turns but less stable at high speeds.`;
    }
    return `Your ski is ${Math.abs(heightDifference)} cm longer than you. A longer ski is more stable at high speeds but harder to initiate turns and requires more skill.`;
  };

  const renderContactLength = (length: number, contactLength: number) => (
    <div>
      Total ski length: {length} cm. Contact points (Camber) length is {contactLength} cm, 
      leaving {length - contactLength} cm for tip and tail rocker.
      <p>
        A longer camber provides better grip and stability, while a longer rocker provides better flotation in deep snow.
      </p>
    </div>
  );

  const renderFloatation = (floatation: number) => (
    <div>
      Floatation: {floatation}
      <p>This value is calculated by the area of your ski.</p>
    </div>
  );

  const [isSpecsOpen, setIsSpecsOpen] = useState(false);


  return (
    <div className="ski-card">
      <div className="card-header">
        <h2>{ski.name}</h2>
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
        <div>
          
          <button
            /*onClick={() => deleteSki(ski.id) } className="text-red-500 hover:text-red-700"*/>
            Delete
          </button>
        </div>
      </div>

      <div className="card-body">
      <button onClick={() => setIsSpecsOpen(!isSpecsOpen)}>
        {isSpecsOpen ? '▼' : '▶'} Specs
        </button>
        {isSpecsOpen && (
        <div className="specs">
          <p>Length: {ski.length} cm</p>
          <p>Radius: {ski.radius} m</p>
          <p>Sidecut: {ski.tip} / {ski.waist} / {ski.tail}</p>
          <p>Stiffness: {ski.stiffness}</p>
          <p>Camber: {ski.camber_rocker}</p>
        </div>
          )}
        
        <div>
          <h1>Ski Level Information</h1>
          <SkiLevelScale minLevel={ski.ski_level_min} maxLevel={ski.ski_level_max} />
        </div>
        <div>
          <h1>Ski Information</h1>
          <TerrainScale terrain={ski.on_piste_vs_off_piste} />
        </div>
        <div className="height-difference">
          {renderHeightDifference(ski.height_difference)}
        </div>
        <div className="contact-length">
          {renderContactLength(ski.length, ski.contact_length)}
        </div>
        <div className="floatation">
          {renderFloatation(ski.floatation)}
        </div>
      </div>
    </div>
  );
};

export default SkiCard;
