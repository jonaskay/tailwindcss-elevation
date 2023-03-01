module.exports = {
  content: ["./test/fixtures/example.html"],
  plugins: [require("../../index")({ opacityBoost: "0.1" })],
};
