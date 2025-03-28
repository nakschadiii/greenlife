export interface ConsumptionRequest {
  logement: 'maison' | 'appartement';
  surface_m2: number;
  chauffage: 'electrique' | 'gaz' | 'pompe à chaleur';
  ampoules: number;
  lave_linge: number;
  lave_vaisselle: number;
  four: number;
  climatisation: number;
  nb_personnes: number;
  transport_mode: 'voiture' | 'velo' | 'marche';
  transport_km_semaine: number;
}

export interface ConsumptionResponse {
  consommation_totale: number;
  details: {
    transport_kg_mois: number;
    equipements_kg_mois: number;
    logement_total_kg_mois: number;
  };
} 