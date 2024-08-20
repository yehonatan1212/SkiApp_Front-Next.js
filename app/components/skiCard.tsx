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
  
  const SkiCard: React.FC<{ ski: Ski }> = ({ ski }) => {
    return (
      <div className="border rounded p-4 shadow">
        <h2 className="text-xl font-bold mb-2">{ski.name}</h2>
        <p><strong>ID:</strong> {ski.id}</p>
        <p><strong>Created At:</strong> {ski.created_at}</p>
        <p><strong>User ID:</strong> {ski.user_id}</p>
        <p><strong>Length:</strong> {ski.length} cm</p>
        <p><strong>Radius:</strong> {ski.radius} m</p>
        <p><strong>Weight:</strong> {ski.weight} kg</p>
        <p><strong>Camber/Rocker:</strong> {ski.camber_rocker}</p>
        <p><strong>Tip:</strong> {ski.tip} mm</p>
        <p><strong>Waist:</strong> {ski.waist} mm</p>
        <p><strong>Tail:</strong> {ski.tail} mm</p>
        <p><strong>Stiffness:</strong> {ski.stiffness}</p>
        <p><strong>Stability vs Manoeuvrability:</strong> {ski.stability_vs_manoeuvrability ?? 'N/A'}</p>
        <p><strong>Short vs Long Turns:</strong> {ski.short_vs_long_turns ?? 'N/A'}</p>
        <p><strong>On Piste vs Off Piste:</strong> {ski.on_piste_vs_off_piste}</p>
        <p><strong>Ski Level Min:</strong> {ski.ski_level_min}</p>
        <p><strong>Ski Level Max:</strong> {ski.ski_level_max}</p>
        <p><strong>Height Difference:</strong> {ski.height_difference} cm</p>
        <p><strong>Contact Length:</strong> {ski.contact_length} cm</p>
        <p><strong>Floatation:</strong> {ski.floatation}</p>
      </div>
    );
  };
  
  export default SkiCard;
  