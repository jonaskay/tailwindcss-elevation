module.exports = {
  content: ["./test/fixtures/example.html"],
  plugins: [require("../../index")({ color: "#4FD1C5" })],
};
