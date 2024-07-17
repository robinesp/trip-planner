import { Box, Button, Flex, Tooltip, Text } from "@radix-ui/themes";
import { useDates } from "../../api/trips.api";
import { Label } from "@radix-ui/react-label";

const getDayName = (date: Date): string =>
  date.toLocaleDateString("en", { weekday: "long" }).slice(0, 3).toUpperCase();

export default function DateFilter({
  disabled,
  date,
  setDate,
}: {
  disabled: boolean;
  date: Date | null;
  setDate: (value: Date) => void;
}) {
  const { isLoading, error, data } = useDates();

  // group all dates using months for keys and store the last one of each month
  const lastDaysOfMonth = data?.reduce((acc: any, d: Date) => {
    acc[d.getMonth() + 1] = d;
    return acc;
  }, {});

  if (isLoading) return <p className="text-center p-10">Loading...</p>;
  if (error) console.log("An error occurred while fetching the dates ", error);

  return (
    <>
      <Label className="text-sm">Date</Label>
      <Flex
        gap="2"
        wrap="wrap"
        overflow="hidden"
        justify="between"
        height="4rem"
      >
        {data?.map((d, ix) => {
          // after last day of each month (except the last) show divider
          const isLastOfMonth =
            ix !== data.length - 1 &&
            lastDaysOfMonth[d.getMonth() + 1].getTime() === d.getTime();
          const selected = d.getTime() === date?.getTime();

          return (
            <Box
              flexBasis={{ initial: "20%", xs: "15%", sm: "5%" }}
              flexGrow="1"
              flexShrink="1"
              key={ix}
              className={isLastOfMonth ? "pr-2 border-r border-gray-400" : ""}
            >
              <Tooltip content={d.toLocaleDateString()}>
                <Button
                  disabled={disabled}
                  color={selected ? "violet" : "gray"}
                  size="4"
                  variant={selected ? "solid" : "outline"}
                  onClick={() => setDate(d)}
                  className="!h-16 !w-full"
                >
                  <Box>
                    <Text as="p" size="1">
                      {getDayName(d)}
                    </Text>
                    <Text as="p" size="5">
                      {d.getDate()}
                    </Text>
                  </Box>
                </Button>
              </Tooltip>
            </Box>
          );
        })}
      </Flex>
    </>
  );
}
