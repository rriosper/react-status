import typescript from "rollup-plugin-typescript2";

import pkg from './package.json'

const joinPath = (path) => (input) => `./${path}/${input}`;
const joinDistPath = joinPath("dist");
const joinSrcPath = joinPath("src");

export default {
  input: joinSrcPath("index.ts"),
  output: [
    {
      file: joinDistPath("lib.js"),
      format: "cjs",
    },
    {
      file: joinDistPath("lib.es.js"),
      format: "es",
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [typescript(require("typescript"))],
};
