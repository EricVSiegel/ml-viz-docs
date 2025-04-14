import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { AppShell, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import "@mantine/core/styles.css"; // Ref: https://mantine.dev/changelog/7-0-0/#global-styles

export function App() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md" // It is important to use it instead of setting padding on the AppShell.Main directly because padding of the AppShell.Main is also used to offset AppShell.Header, AppShell.Navbar, AppShell.Aside and AppShell.Footer components. Ref: https://mantine.dev/core/app-shell/#padding-prop
      header={{ height: 48 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: opened === true ? false : true },
      }}
    >
      <Header
        colorScheme={colorScheme}
        onToggleColorScheme={toggleColorScheme}
        opened={opened}
        toggle={toggle}
      />
      <Sidebar />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
