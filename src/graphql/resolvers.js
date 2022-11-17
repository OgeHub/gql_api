const User = require("../models/user.model");
const token = require("../utils/token");

module.exports = {
  Query: {
    async getUser(_, { ID }) {
      return await User.findById(ID);
    },

    async getAllUsers() {
      return await User.find({}).sort({ createdAt: -1 });
    }
  },

  Mutation: {
    async signup(_, { userInput }) {
      const user = await User.create(userInput);
      console.log(user);
      return user;
    },

    async login(_, { email, password }) {
      const user = await User.findOne({ email });
      if (!user) {
        throw Error("User not found");
      }

      if (await user.isValidPassword(password)) {
        return token(user);
      }
    }
  }
};
