/**
 * Accepts entities array as parameter and returns that as entities object mapped by id
 * @param {any[]} array
 * @returns {{[p: number]: any}}
 */
export function arrayToCollection(array: any[]): { [id: number]: any } {
  return array.reduce((entities: { [id: number]: any }, current: any) => {
    return {
      ...entities,
      [current.id]: current
    };
  }, {});
}

/**
 * Accepts entites collection as parameter and returns array of this collection elements
 * @param {{[p: number]: any}} collection
 * @returns {any[]}
 */
export function collectionToArray(collection: { [id: number]: any }): any[] {
  return Object.keys(collection).map((id: string) => collection[parseInt(id, 10)]);
}
