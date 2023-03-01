module.exports = {
  content: ["./test/fixtures/example.html"],
  plugins: [
    require("../../index")({ color: "invalid", opacityBoost: "invalid" }),
  ],
};
