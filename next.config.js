require("dotenv").config();

module.exports = {
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  rootPaths: ["./src"],
};
