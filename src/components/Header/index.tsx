import GooderAI from "../../gooder-ai.png";
import { AppShell, ActionIcon, Group, Burger, Flex, Image } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { NavLink } from "react-router";
import type { MantineColorScheme } from "@mantine/core";
import type { JSX } from "react";

export interface HeaderProps {
  colorScheme: MantineColorScheme;
  onToggleColorScheme: () => void;
  opened: boolean;
  toggle: () => void;
}

export function Header({
  colorScheme,
  onToggleColorScheme,
  opened,
  toggle,
}: HeaderProps): JSX.Element {
  return (
    <AppShell.Header p="xs">
      <Group justify="space-between" align="center">
        <Flex align="center" gap={5}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <NavLink to="/">
            <Image src={GooderAI.src} height={30} fit="contain"  title={`Last build: ${BUILT_AT}`}
            style={{ cursor: "pointer" }} />
          </NavLink>
        </Flex>
        <ActionIcon onClick={onToggleColorScheme} variant="default">
          {colorScheme === "dark" ? <IconSun /> : <IconMoonStars />}
        </ActionIcon>
      </Group>
    </AppShell.Header>
  );
}
