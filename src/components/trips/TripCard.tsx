import {
  Card,
  Heading,
  Inset,
  Link,
  Strong,
  Text,
} from "@radix-ui/themes";
import { Trip } from "../../react-app-env";

const formatPrice = (value: number) => "€" + value.toFixed(2);

export default function TripCard({ trip }: { trip: Trip }) {
  return (
    <Link
      href={trip.product_url}
      target="blank"
      underline="none"
      style={{ color: "black" }}
    >
      <Card size="2" variant="classic" className="h-full !flex md:flex-col">
        <Inset
          clip="padding-box"
          side={{ initial: "left", sm: "top" }}
          className="max-md:basis-1/4 h-auto md:h-64"
        >
          <img
            // for mobile screen (<= 768px) load image for 30% of viewport size for small thumbnail
            // for tablet and desktop load the image for half of the viewport size for larfe thumbnail
            sizes="(min-width: 768px) 50vw, 30vw"
            srcSet={`
              ${trip.image}&w=2048    2048w,
              ${trip.image}&w=1024    1024w,
              ${trip.image}&w=640    640w,
              ${trip.image}&w=320    320w,
              ${trip.image}&w=160    160w,
            `}
            src={`${trip.image}&w=640`}
            alt={trip.title}
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </Inset>
        <div className="max-md:basis-3/4 max-md:pl-4">
          <Heading as="h4" size="3" className="truncated-text my-2">
            {trip.title}
          </Heading>
          <Text as="p" size="1" className="truncated-text mb-6">
            {trip.summary}
          </Text>
          <div className="mt-auto">
            {trip.discount_percentage ? (
              <Text as="p" size="2">
                <Strong className="text-red-600">
                  {formatPrice(
                    (trip.price * (100 - trip.discount_percentage)) / 100
                  )}
                </Strong>
                <span className="ml-3 text-gray-600 line-through text-xs">
                  {formatPrice(trip.price)}
                </span>
              </Text>
            ) : (
              <Text as="p" size="2">
                <Strong>{formatPrice(trip.price)}</Strong>
              </Text>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
