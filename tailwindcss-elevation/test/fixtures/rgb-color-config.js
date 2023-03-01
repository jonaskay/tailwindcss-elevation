module.exports = {
  content: ["./test/fixtures/example.html"],
  plugins: [require("../../index")({ color: "255,0,0" })],
};
