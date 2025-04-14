import { AppShell, ActionIcon, Group, Title, Burger, Flex } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import type { MantineColorScheme } from "@mantine/core";
import type React from "react";

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
}: HeaderProps): React.JSX.Element {
  return (
    <AppShell.Header p="xs">
      <Group justify="space-between" align="center">
        <Flex align="center" gap={5}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          {/* Remove title and add logo in next PR */}
          <Title order={5}>LOGO</Title>
        </Flex>
        <ActionIcon onClick={onToggleColorScheme} variant="default">
          {colorScheme === "dark" ? <IconSun /> : <IconMoonStars />}
        </ActionIcon>
      </Group>
    </AppShell.Header>
  );
}
