const path = require("path")

module.exports = {
  stories: [
    "../stories/**/*.stories.tsx",
    "../stories/**/*.stories.ts",
    "../stories/**/*.stories.md",
    "../stories/**/*.stories.mdx",
  ],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.s(c|a)ss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    })

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    })
    config.resolve.extensions.push(".ts", ".tsx")

    return config
  },
}
