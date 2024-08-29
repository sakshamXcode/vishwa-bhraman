// middleware.js
module.exports = (req, res, next) => {
    setTimeout(() => {
      next();
    }, 500); // 500ms delay
  };
  