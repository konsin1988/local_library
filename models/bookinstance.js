const { module, Schema } = require("mongoose");

const BookInstanceSchema = new Schema({
  book: {
    type: Schema.ObjectId,
    ref: "Book",
    required: true,
  },
  imprint: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Availible", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: {
    type: Date,
    default: Date.now,
  },
  virtual: {
    url: {
      get() {
        return `catalog/bookinstance/${this._id}`;
      },
    },
  },
});

module.exports = mongoose.model("BookInstance", BookInstanceSchema);
