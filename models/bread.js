// REQUIRE MONGOOSE
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

// SCHEMA
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: "http://placehold.it/500x500.png" },
  baker: {
    type: Schema.Types.ObjectID,
    ref: "Baker",
  },
});

// HELPER METHODS
breadSchema.methods.getBakedBy = function () {
  //   //   return `${this.name} was baked with love by ${
  //   //     this.baker.name
  //   //   }, who has been with us since ${this.baker.startDate.getFullYear()}`;
  return `${this.name} was baked with love by ..., who has been with us since ...`;
};
// Need to fix bug

// MODEL & EXPORT
const Bread = mongoose.model("Bread", breadSchema);
module.exports = Bread;
