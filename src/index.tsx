import { Routers } from "./routes";
import { MantineProvider, createTheme } from "@mantine/core";
import { MDXProvider } from "@mdx-js/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import "@fontsource/ruda/400.css";
import "@fontsource/ruda/500.css";
import "@fontsource/ruda/600.css";
import "@fontsource/ruda/700.css";
import "@fontsource/ruda/800.css";
import "@fontsource/ruda/900.css";

// Ref: https://mdxjs.com/packages/react/#use
/** @type {MDXComponents} */
const components = {
  em(properties: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
    return <i {...properties} />;
  },
};

const MantineTheme = createTheme({
  fontFamily: "Ruda, san-serif",
}); // Ref: https://mantine.dev/theming/theme-object/#store-theme-override-object-in-a-variable

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <StrictMode>
    <MantineProvider theme={MantineTheme}>
      <MDXProvider components={components}>
        <RouterProvider router={Routers} />
      </MDXProvider>
    </MantineProvider>
  </StrictMode>,
);
