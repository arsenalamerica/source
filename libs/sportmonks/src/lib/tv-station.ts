import { Sportmonks, sportmonks } from './sportmonks';

export type TvStationEntity = {
  id: number;
  name: string;
  url: string | null;
  image_path: string;
  type: string;
  related_id: number | null;
};

type TvStationEndpoint = {
  data: TvStationEntity;
} & Sportmonks;

export async function smTvStation(
  station_id: number,
  query?: object,
): Promise<TvStationEndpoint> {
  return sportmonks
    .url(`/tv-stations/${station_id}`)
    .query(query || {})
    .get() as Promise<TvStationEndpoint>;
}
