const { module, Schema } = require("mongoose");

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  virtual: {
    url: {
      get() {
        return `catalog/genre/${this._id}`;
      },
    },
  },
});

module.exports = mongoose.model("Genre", GenreSchema);
