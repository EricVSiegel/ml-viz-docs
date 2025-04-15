import data from "./config.json";
import ConfigMarkdown from "./ConfigMarkdown.mdx";
import { Stack, CopyButton, Button } from "@mantine/core";
import type { JSX } from "react";

export function UserConfig(): JSX.Element {
  return (
    <Stack>
      <CopyButton value={JSON.stringify(data, undefined, 2)}>
        {({ copied, copy }) => {
          return (
            <Button color={copied ? "teal" : "blue"} onClick={copy}>
              {copied ? "Copied" : "Copy"}
            </Button>
          );
        }}
      </CopyButton>
      <ConfigMarkdown config={data} />
    </Stack>
  );
}
