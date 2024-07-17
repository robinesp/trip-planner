import { useTrips } from "../../api/trips.api";
import { useState } from "react";
import { Grid, Section, Text } from "@radix-ui/themes";
import LocationFilter from "../filters/LocationFilter";
import DateFilter from "../filters/DateFilter";
import { Trip } from "../../react-app-env";
import TripCard from "./TripCard";

function Cards({
  isLoading,
  error,
  data,
}: {
  isLoading: boolean;
  error: Error | null;
  data?: Trip[];
}) {
  if (isLoading) return <p className="text-center p-10">Loading...</p>;
  if (error) console.log("An error occurred while fetching the trips ", error);

  if (data?.length === 0)
    return (
      <Text as="p" className="py-10 px-[5%] md:px-[20%]">
        Nothing found, please try a different date
      </Text>
    );

  return (
    <Grid
      columns={{ initial: "1", sm: "2" }}
      gap="4"
      align="stretch"
      className="pt-6 pb-40 px-[5%] md:px-[20%] auto-rows-auto"
    >
      {data?.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </Grid>
  );
}

export default function TripList() {
  const [country, setCountry] = useState("");
  const [cityId, setCityId] = useState(null as number | null);
  const [date, setDate] = useState(null as Date | null);

  const { isLoading, error, data } = useTrips(date!, cityId!);

  return (
    <>
      <Section
        size="1"
        className="border-b border-gray-200 px-[5%] md:px-[20%]"
      >
        <LocationFilter
          country={country}
          setCountry={(value) => {
            setCountry(value);
            setCityId(null);
            setDate(null);
          }}
          cityId={cityId}
          setCityId={setCityId}
        />
        <DateFilter
          disabled={!country || !cityId}
          date={date}
          setDate={setDate}
        />
      </Section>
      {!country || !cityId || !date ? (
        <Text as="p" className="py-10 px-[5%] md:px-[20%]">
          Select filters first
        </Text>
      ) : (
        <Cards isLoading={isLoading} error={error} data={data} />
      )}
    </>
  );
}
