const mongoose = require('mongoose');

const {Schema} = mongoose;

const Recipes = new Schema({
  name: { type: String,
            allowNull: false,
  },
  id: { type: Number,
            allowNull: false,
  },
  accessToken: { type: String,
            allowNull: false,
  }
});

const model = mongoose.model('Recipes', Recipes);
module.exports = model;