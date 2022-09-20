type LeagueData = {
  data: {
    id: number;
    active: boolean;
    type: string;
    legacy_id: number;
    country_id: number;
    logo_path: string;
    name: string;
    is_cup: boolean;
    is_friendly: boolean;
    current_season_id: number | null;
    current_round_id: number | null;
    current_stage_id: number | null;
    live_standings: boolean;
    coverage: {
      predictions: boolean;
      topscorer_goals: boolean;
      topscorer_assists: boolean;
      topscorer_cards: boolean;
    };
  };
};

export default LeagueData;
