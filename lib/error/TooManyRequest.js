exports.TooManyRequest = class TooManyRequest extends Error {
  constructor(message) {
    super(message);
    this.name = 'Too many request';
    this.status = 429;
  }
}