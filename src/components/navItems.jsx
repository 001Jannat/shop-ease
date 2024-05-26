import { Flex, Link, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const navItems = [
  { label: "NEW ARRIVALS", to: "/arrival" },
  { label: "Women", to: "/women" },
  { label: "Men", to: "/men" },
  { label: "Home & Living", to: "/home" },
  { label: "Beauty", to: "/beauty" },
];

const NavItems = () => {
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const gap = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Flex direction={flexDirection} gap={gap}>
      {navItems.map((item) => (
        <Link key={item.label} href={item.to} paddingY={2}>
          {item.label}
        </Link>
      ))}
    </Flex>
  );
};

export default NavItems;
