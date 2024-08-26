

import { useState } from 'react';
import styles from '../css/lineScale.module.css';
import deleteSki from '../user/page'

import HeightDifference from './cardComponents/heightdifference';
import SkiLevelScale from './cardComponents/levelScale';
import TerrainScale from './cardComponents/terrainScale';
import Floatation from './cardComponents/floatation';
import ContactLength from './cardComponents/contactLength';
import SkiSpecs from './cardComponents/skiSpecs';
import Rating from './cardComponents/Rating';

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

  const handleRatingChange = (newRating: number) => {
    console.log(`New rating: ${newRating}`)
    // Here you can update state or send the new rating to an API, etc.
  };


  return (
    <div className="ski-card">
      <div className="card-header">

        <h2>{ski.name}</h2>

        <div>
          <Rating defaultRating={2} onChange={handleRatingChange} />
        </div>

        <div>
          <button
            //onClick={() => deleteSki(ski.id) } className="text-red-500 hover:text-red-700"
            >
            Delete
          </button>
        </div>
      </div>

        <SkiSpecs ski={ski} />
        
      <div className="card-body">
        <div>
          <h1>Ski Level</h1>
          <SkiLevelScale minLevel={ski.ski_level_min} maxLevel={ski.ski_level_max} />
        </div>

        <div>
          <h1>Ski Terrain</h1>
          <TerrainScale terrain={ski.on_piste_vs_off_piste} />
        </div>

        <div>
          <h1>Height Difference:</h1>
          <HeightDifference heightDifference={ski.height_difference} />
        </div>

        <div>
          <h1>Camberlength :</h1>
          <ContactLength length={ski.length} contactLength={ski.contact_length} />
        </div>

        <div>
          <Floatation floatation={ski.floatation} />
        </div>

      </div>
    </div>
  );
};

export default SkiCard;
