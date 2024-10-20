const register = require("./register.route");
const login = require("./login.route");
const updateProfile = require("./updateProfile.route");
const getProfile = require("./getProfile.route");

module.exports = [register, login, updateProfile, getProfile];
