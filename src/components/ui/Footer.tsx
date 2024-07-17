import { Text, Section } from "@radix-ui/themes";

export default function Footer() {
  return (
    <Section
      size="1"
      bottom="0"
      position="absolute"
      width="100%"
      className="bg-[#333333]"
    >
      <Text as="p" align="center" size="2" style={{ color: "white" }}>
        © 2014-2024 Tiqets Amsterdam
      </Text>
    </Section>
  );
}
