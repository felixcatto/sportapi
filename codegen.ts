import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://beta.sosportom.ru/graphql',
  ignoreNoDocuments: true,
  generates: {
    './lib/gqlTypes/': {
      preset: 'client',
      presetConfig: { fragmentMasking: false },
    },
  },
};

export default config;
