/**
 * A class representation of the BSON MinKey type.
 */
export class MinKey {
  /**
   * @ignore
   */
  toExtendedJSON() {
    return { $minKey: 1 };
  }

  /**
   * @ignore
   */
  static fromExtendedJSON() {
    return new MinKey();
  }
}

Object.defineProperty(MinKey.prototype, '_bsontype', { value: 'MinKey' });
