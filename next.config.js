const withPWA = require("next-pwa");

module.exports = withPWA({
  compress: true,
  pwa: {
    dest: "public",
  },
});
