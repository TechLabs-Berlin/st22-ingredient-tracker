module.exports = sessionizeUser = user => {
  return { userId: user.id, username: user.username };
};