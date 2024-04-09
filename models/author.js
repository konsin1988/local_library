const { module, Schema } = require("mongoose");

const AuthorSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    max: 100,
  },
  last_name: {
    type: String,
    requided: true,
    max: 100,
  },
  date_of_birth: {
    type: Date,
  },
  date_of_death: {
    type: Date,
  },
  virtual: {
    name: {
      get() {
        return `${this.last_name}, ${this.first_name}`;
      },
    },
    url: {
      get() {
        return `/catalog/author/${this._id}`;
      },
    },
  },
});

module.exports = mongoose.model("Author", AuthorSchema);
