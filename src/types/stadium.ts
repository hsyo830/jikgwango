export type StadiumType = "outdoor" | "indoor" | "dome";

export interface Stadium {
  id: string;
  stadiumId: string;
  name: string;
  teams: string[];
  logoUrl1: string;
  logoUrl2?: string;
  searchKeyword: string;
  kakaoPlaceName: string;
  address: string;
  transport: {
    subway: string;
    bus: string[];
  };
  parking: {
    available: boolean;
    paid: boolean;
    capacity: number | null;
    note: string;
  };
  openedYear: number;
  capacity: number;
  type: StadiumType;
  allowedItems: string[];
  prohibitedItems: string[];
  facilities: string[];
  seatingInfo: {
    hasGuide: boolean;
    note: string;
  };
  entranceInfo: {
    gates: string[];
    note: string;
  };
  officialUrl: string;
  map?: {
    lat: number;
    lng: number;
  };
  weatherGrid?: {
    nx: number;
    ny: number;
  };
}
