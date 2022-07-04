import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, Moon } from "tabler-icons-react";

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </ActionIcon>
  );
};

export default ThemeToggle;
