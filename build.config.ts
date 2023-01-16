import { defineBuildConfig } from "unbuild";
import { cleanup, generate } from "./scripts/generate";

export default defineBuildConfig({
  entries: [
    "src/index",
    {
      builder: "mkdist",
      input: "./src/css/",
      outDir: "./dist/css",
    },
    {
      builder: "mkdist",
      input: "./src/css/",
      outDir: "./dist/css",
      ext: "cjs",
      declaration: false,
    },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  hooks: {
    "build:prepare": function (buildContext) {
      if (!buildContext.options.stub) {
        console.log("ready generating css");
        generate();
        console.log("css generated");
      }
    },
    "build:done": function (buildContext) {
      if (!buildContext.options.stub) {
        cleanup();
        console.log("css cleaned up");
      }
    },
  },
});
