export default class MathHelper {
  static getRound(value, decimal = 0) {
    const round = (!decimal || decimal < 0) ? 1 : 10 ** decimal;
    return Math.round((value + Number.EPSILON) * round) / round;
  }
}
