exports = function sessionizeUser(user) {
  return { userId: user._id, username: user.username };
};