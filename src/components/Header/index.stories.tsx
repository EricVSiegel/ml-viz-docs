import { Header } from ".";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useDarkMode } from "storybook-dark-mode";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Header",
  component: Header,
} as Meta<typeof Header>;

export const Template: StoryObj<typeof Header> = {
  render: function Wrapper() {
    const darkMode = useDarkMode();
    const [opened, { toggle }] = useDisclosure();

    return (
      <AppShell>
        <Header
          onToggleColorScheme={console.log}
          colorScheme={darkMode === true ? "dark" : "light"}
          opened={opened}
          toggle={toggle}
        />
      </AppShell>
    );
  },
};
