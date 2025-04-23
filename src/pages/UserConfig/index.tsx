import data from "./config.json";
import ConfigMarkdown from "./ConfigMarkdown.mdx";
import { Stack, Button } from "@mantine/core";
import type { JSX } from "react";

export function UserConfig(): JSX.Element {
  return (
    <Stack>
      <ConfigMarkdown />
      <Button
        component="a"
        // Ref: https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
        download={`gooder-starter-config.json`}
        href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`}
      >
        Save config
      </Button>
    </Stack>
  );
}
