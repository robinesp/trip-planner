import { useQuery } from "@tanstack/react-query";
import { Country, Trip } from "../react-app-env";

const fetchLocations = async (): Promise<Country[]> => {
  const res = await fetch("http://localhost:3001/locations");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await res.json();
  return Object.entries(data).map(([name, rawCities]) => {
    const cities = (rawCities as []).map((c) => ({
      id: c[0],
      name: c[1],
    }));
    return { name, cities };
  });
};

const fetchDates = async (): Promise<Date[]> => {
  const res = await fetch("http://localhost:3001/available_dates");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data.map((d: string) => new Date(d));
};

const fetchTrips = async (date: Date, cityId: number): Promise<Trip[]> => {
  const formattedDate = `${date.getFullYear()}-${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;

  const res = await fetch(
    `http://localhost:3001/products?date=${formattedDate}&city_id=${cityId}`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

export const useLocations = () => {
  return useQuery({ queryKey: ["locations"], queryFn: fetchLocations });
};

export const useDates = () => {
  return useQuery({ queryKey: ["dates"], queryFn: fetchDates });
};

export const useTrips = (date: Date, cityId: number) => {
  return useQuery({
    queryKey: ["trips", date, cityId],
    queryFn: () => fetchTrips(date, cityId),
    enabled: !!date && !!cityId,
  });
};
