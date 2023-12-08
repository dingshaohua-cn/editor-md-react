import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel"; // resolve是babel用来处理import路径的
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";

// ES Module打包输出
const esmOutput = {
  preserveModules: true,
  preserveModulesRoot: "src",
  // exports: 'named',
  assetFileNames: ({ name }) => {
    const { ext, dir, base } = path.parse(name);
    if (ext !== ".css") return "[name].[ext]";
    return path.join(dir, "style", base);
  },
};

export default {
  input: "src/index.ts",
  output: {
    ...esmOutput,
    dir: "lib",
    format: "es",
  },
  plugins: [
    resolve(),
    image(),
    babel({
      extensions: [".ts", ".tsx"],
    }),
    typescript(),
    postcss(),
  ]
};
