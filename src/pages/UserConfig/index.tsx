import data from "./config.json";
import ConfigMarkdown from "./ConfigMarkdown.mdx";
import { Stack, CopyButton, Button, Group } from "@mantine/core";
import type { JSX } from "react";

export function UserConfig(): JSX.Element {
  return (
    <Stack>
      <Group>
        <CopyButton value={JSON.stringify(data, undefined, 2)}>
          {({ copied, copy }) => {
            return (
              <Button color={copied ? "teal" : "blue"} onClick={copy} w="49%">
                {copied ? "Copied" : "Copy"}
              </Button>
            );
          }}
        </CopyButton>
        <Button
          w="49%"
          component="a"
          // Ref: https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
          download={`user-config.json`}
          href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`}
        >
          Save config
        </Button>
      </Group>
      <ConfigMarkdown config={data} />
    </Stack>
  );
}
