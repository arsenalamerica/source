type StageData = {
  data: {
    id: number;
    name: string;
    type: string;
    league_id: number;
    season_id: number;
    sort_order: number;
    has_standings: boolean;
    has_outgroup_matches: number;
  };
};

export default StageData;
