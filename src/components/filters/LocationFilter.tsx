import { Flex, Select } from "@radix-ui/themes";
import { useLocations } from "../../api/trips.api";
import { Label } from "@radix-ui/react-label";

export default function LocationFilter({
  country,
  setCountry,
  cityId,
  setCityId,
}: {
  country: string;
  setCountry: (value: string) => void;
  cityId: number | null;
  setCityId: (value: number | null) => void;
}) {
  const { isLoading, error, data } = useLocations();

  if (isLoading) return <p className="text-center p-10">Loading...</p>;
  if (error)
    console.log("An error occurred while fetching the location data ", error);

  return (
    <Flex gap="4" wrap="wrap" mb="4">
      <Flex
        direction="column"
        flexBasis={{ initial: "100%", sm: "0" }}
        flexGrow="1"
      >
        <Label htmlFor="country" className="text-sm">
          Country
        </Label>
        <Select.Root
          size="3"
          value={country}
          onValueChange={(value) => {
            setCountry(value);
            setCityId(null);
          }}
        >
          <Select.Trigger id="country" placeholder="Choose the country" />
          <Select.Content>
            {data?.map((c) => (
              <Select.Item key={c.name} value={c.name}>
                {c.name}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Flex>
      <Flex
        direction="column"
        flexBasis={{ initial: "100%", sm: "0" }}
        flexGrow="1"
      >
        <Label htmlFor="city" className="text-sm">
          City
        </Label>
        <Select.Root
          size="3"
          disabled={!country}
          value={cityId + ""}
          onValueChange={(value) => setCityId(Number(value))}
        >
          <Select.Trigger placeholder="Choose the city" />
          <Select.Content>
            {country &&
              data
                ?.filter((c) => c.name === country)[0]
                .cities.map((city) => (
                  <Select.Item key={city.id} value={city.id + ""}>
                    {city.name}
                  </Select.Item>
                ))}
          </Select.Content>
        </Select.Root>
      </Flex>
    </Flex>
  );
}
