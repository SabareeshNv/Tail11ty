module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPassthroughCopy("src/assets/");

  return {
    dir: {
      input: "src",
    },
  };
};
