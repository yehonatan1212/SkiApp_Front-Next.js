

import { useState } from 'react';
import styles from '../css/lineScale.module.css';
import deleteSki from '../user/page'

import HeightDifference from './cardComponents/heightdifference';
import SkiLevelScale from './cardComponents/levelScale';
import TerrainScale from './cardComponents/terrainScale';
import Floatation from './cardComponents/floatation';
import ContactLength from './cardComponents/contactLength';

interface Ski{
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


const SkiCard: React.FC<{ ski: Ski }> = ({ ski }) => {

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
            //onClick={() => deleteSki(ski.id) } className="text-red-500 hover:text-red-700"
            >
            Delete
          </button>
        </div>
      </div>

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
        
      <div className="card-body">
        <div>
          <h1>Ski Level</h1>
          <SkiLevelScale minLevel={ski.ski_level_min} maxLevel={ski.ski_level_max} />
        </div>
        <div>
          <h1>Ski Terrain</h1>
          <TerrainScale terrain={ski.on_piste_vs_off_piste} />
        </div>
        <div className="height-difference">
          <h1>Height Difference:</h1>
          <HeightDifference heightDifference={ski.height_difference} />
        </div>
        <div className="contact-length">
          <h1>Camberlength :</h1>
          <ContactLength length={ski.length} contactLength={ski.contact_length} />
        </div>
        <div className="floatation">
          <Floatation floatation={ski.floatation} />
        </div>
      </div>
    </div>
  );
};

export default SkiCard;
