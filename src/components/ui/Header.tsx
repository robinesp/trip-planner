import { Heading, Section } from "@radix-ui/themes";

export default function Header() {
  return (
    <Section style={{ backgroundColor: "var(--accent-10)" }} size="2">
      <Heading align="center" style={{ color: "white" }}>
        Plan your trip!
      </Heading>
    </Section>
  );
}
