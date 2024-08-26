

import { useState } from 'react';
import styles from '../css/lineScale.module.css';
import deleteSki from '../user/page'

import HeightDifference from './cardComponents/HeightDifference';
import SkiLevelScale from './cardComponents/LevelScale';
import TerrainScale from './cardComponents/TerrainScale';
import Floatation from './cardComponents/Floatation';
import ContactLength from './cardComponents/ContactLength';
import SkiSpecs from './cardComponents/SkiSpecs';
import Rating from './cardComponents/Rating';
import DeleteButton from './cardComponents/DeleteButton';
import EditButton from './cardComponents/EditButton';
import EditSkiForm from './cardComponents/EditSkiForm';

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
  tip: number;
  waist: number;
  tail: number;
  on_piste_vs_off_piste: number;
  ski_level_min: number;
  ski_level_max: number;
  height_difference: number;
  contact_length: number;
  floatation: number;
}
interface NewSkiProps {
  id: number;
  name: string;
  length: number;
  radius: number;
  weight: number;
  tip: number;
  waist: number;
  tail: number;
}

interface skiCardProps{
  ski: Ski;
  onDelete: (id: number) => void;
  onUpdate: (updatedSki: NewSkiProps) => void;
}


const SkiCard: React.FC<skiCardProps> = ({ ski, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleRatingChange = (newRating: number) => {
    console.log(`New rating: ${newRating}`)
    // Here you can update state or send the new rating to an API, etc.
  };

  const handleDelete = () => {
    onDelete(ski.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = (updatedSki: NewSkiProps) => {
    onUpdate(updatedSki);
    setIsEditing(false);
  };


  return (
    <div className="ski-card">
      <div className="card-header">
        
        <h2 className="text-2xl mb-6">{ski.name}</h2>

        <div>
          <Rating defaultRating={2} onChange={handleRatingChange} />
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

        <EditButton onEdit={handleEdit} />
        {isEditing && (
          <EditSkiForm
            ski={ski}
            onSave={handleSave}
            onClose={() => setIsEditing(false)}
          />
        )}
        
        <DeleteButton onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default SkiCard;
