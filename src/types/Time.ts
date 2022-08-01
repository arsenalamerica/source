type Time = {
  status: string;
  starting_at: {
    date_time: string;
    date: string;
    time: string;
    timestamp: number;
    timezone: string;
  };
  minute: number | null;
  second: number | null;
  added_time: number | null;
  extra_minute: number | null;
  injury_time: number | null;
};

export default Time;
