import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: {
          value: "'Red Hat Text', sans-serif",
        },
        heading: {
          value: "'Red Hat Text', sans-serif",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
