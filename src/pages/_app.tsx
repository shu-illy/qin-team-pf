import "lib/tailwind.css";
import type { AppProps } from "next/app";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  // Cmd + Jでライトモード/ダークモードを切り替え
  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <RecoilRoot>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            primaryColor: "pink",
            components: {
              TypographyStylesProvider: {
                styles: {
                  root: {
                    a: { color: "#228BE6" },
                  },
                },
              },
            },
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
