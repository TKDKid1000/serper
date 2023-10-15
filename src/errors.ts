export class InvalidArgumentError extends Error {
  constructor() {
    super("One or more arguments is invalid.");
    Object.setPrototypeOf(this, InvalidArgumentError.prototype);
  }
}

export class MissingApiKeyError extends Error {
  constructor() {
    super("apiKey is required. Obtain one from https://serper.dev/api-key");
    Object.setPrototypeOf(this, MissingApiKeyError.prototype);
  }
}
