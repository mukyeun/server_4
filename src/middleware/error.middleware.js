const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message || '서버 오류가 발생했습니다.'
  });
};

module.exports = errorHandler;
