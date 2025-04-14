# PWA | ReactJS | Starter App

A Template Repository for creating ReactJS based PWAs.

It has support for:

- TypeScript ✅
- Webpack Bundling and Hot Reloading ✅
- Storybook and Loki testing ✅
- React Router DOM integration ✅
- Mantine integration with Dark and Light Themes ✅
- Linting ✅
- Prettifying & `package.json` sorting ✅
- PWA/Service Workers ✅
- Pre-commit hooks ✅
- `shx` for OS agnostic CLI ✅
- Unit testing via Jest and `ts-jest`. ✅
- MDX integration via `@mdx-js/react` ✅


# Create a New Page (MDX)
- Go to `src/pages`
- Create a new file with the page name and a .mdx extension
- Here's an example `Example: about.mdx`
- Add your content in MDX format.
- Go to `src/routes.tsx` file 
```
children: [
  {
    path: "/",
    element: <PageA />,
  },
]
```
- Update the children array
- Add a new object inside the children array that has two properties — path for the URL, and element for the page (component) available in the application.
```
{
  path: "/",
  element: <PageA />,
}
```

- Run `yarn start` to view the new page.