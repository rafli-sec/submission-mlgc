class CLientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'Terjadi kesalahan dalam melakukan prediksi';
  }
}

module.exports = CLientError;
