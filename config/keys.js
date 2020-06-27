if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else if (process.env.CI) {
  module.exports = require("./ci");
} else {
  module.exports = require("./dev");
}
