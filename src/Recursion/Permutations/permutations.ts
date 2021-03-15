export function getPermutations(array: Array<number>): Array<Array<number>> {
  /**
   *	Permutations: series of elements ordered in different ways
   * Pseudo Code:
   * 										1
   *
   *								2						3
   *
   * - [1, 2, 3] pick from [1, 2, 3]
   * 	- [1 _  _] pick from [2, 3]
   *			- [1, 2, _] pick from [3]
   *				- [1, 2, 3]	pick from []
   *			- [1, 3, _ ] pick from [2]
   * - given => [1, 2, 3]
   * - perms = [];
   * - for ele in given
   * 	- perm = [ele] concat with each array of getPermucations([...remainingElements])
   *	- return perms
   */
  if (!array.length) {
    return [];
  }
  const perms: Array<Array<number>> = [];
  for (let i = 0; i < array.length; i += 1) {
    const perm = [array[i]];
      const remaining = array
        .slice(0, i)
        .concat(array.slice(i + 1, array.length));
      const otherPerms = getPermutations(remaining);
      if (otherPerms.length) {
        otherPerms.forEach((arr) => perms.push(perm.concat(arr || [])));
      } else {
        perms.push(perm);
      }
  }
  return perms;
}
