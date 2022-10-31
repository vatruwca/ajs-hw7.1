export default class Validator {
  static validateUsername(name) {
    return /^[a-z][\w-]+[a-z]$/ig.test(name) && !/\d{3,}/g.test(name);
  }
}
