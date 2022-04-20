// shopper.js --- Shopper model in database

// Code:

// Libraries
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ShopperSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Username is required!'],
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address.'],
      required: [true, 'Email is required!'],
    },

    password: {
      type: String,
      trim: true,
      minLength: [8, 'Minimum password length is 8 characters'],
      required: [true, 'Password is required!'],
    },
  },
  {
    timestamps: true,
  }
);

ShopperSchema.methods = {
  // Validate password
  isCorrectPassword: async function (supposedPassword) {
    return await bcrypt.compare(supposedPassword, this.password);
  },
};

// Hook to encrypt password before storing in database
ShopperSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);

  if (!this.isModified('password')) next();

  this.password = await bcrypt.hash(this.password, salt);
});

// Create Shopper model to use in database
const Shopper = mongoose.model('Shopper', ShopperSchema);

module.exports = Shopper;

// shopper.js ends here
