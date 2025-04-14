import { AppShell, NavLink as MantineNavLink, Stack } from "@mantine/core";
import { NavLink, useLocation } from "react-router";
import type React from "react";

const NavLinks: { path: string; label: string }[] = [
  {
    path: "/",
    label: "Home",
  },
];

export function Sidebar(): React.JSX.Element {
  const location = useLocation();

  return (
    <AppShell.Navbar p="xs">
      <Stack>
        {NavLinks.map(({ path, label }) => {
          return (
            <MantineNavLink
              key={path}
              component={NavLink}
              active={location.pathname === path}
              to={path}
              label={label}
            />
          );
        })}
      </Stack>
    </AppShell.Navbar>
  );
}
