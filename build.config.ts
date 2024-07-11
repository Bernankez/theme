import { defineBuildConfig } from "unbuild";
import { generate } from "./scripts/generate";

export default defineBuildConfig({
  entries: [
    "src/cli",
    "src/index",
    {
      builder: "mkdist",
      input: "./src/css/",
      outDir: "./dist/css",
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
        generate();
      }
    },
    // "build:done": function (buildContext) {
    //   if (!buildContext.options.stub) {
    //     cleanup();
    //     console.log("css cleaned up");
    //   }
    // },
  },
});
