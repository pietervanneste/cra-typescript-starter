import tsConfigPaths from 'tsconfig-paths';
import tsConfig from './tsconfig.json';

const baseUrl = './'; // Either absolute or relative path. If relative it's resolved to current working directory.
tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths
});
