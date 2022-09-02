type TeamData = {
  data: {
    id: number;
    legacy_id: number;
    name: string;
    short_code: string;
    twitter: string;
    country_id: number;
    national_team: boolean;
    founded: number;
    logo_path: string;
    venue_id: number;
    current_season_id: number;
    is_placeholder: boolean;
  };
};

export default TeamData;
