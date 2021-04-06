/**
 * given two array find if both arrays form same BST. (you should not construct tree)
 * 
 * Example:
 * arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11] 
 * arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]
 * returns: true
 * 
 * => [10, 12, 15]
 *          10
 *     8         15
 *   5        12     94
 * 2       11      81
 *               
 * 
 * 1. Assuming that both are valid BST
 *    - should start with same number
 *    - should have same length
 *    - should have same values and order when sorted
 *    - for every value at some position it's right child should be it's next big neighbor towards right
 *    - for every value at some position it's left child should be it's next small neighbor towards right
 * 
 * - currentElementOne => currentElementTwo
 * - leftElementsOne
 * - rightElementOne
 * 
 * - leftElementsTwo
 * - rightElementsTwo
 * 
 * - checkAgainFor LeftElementsOne, LeftElementsTwo
 * 
 * 
 * @param arrayOne Array of numbers
 * @param arrayTwo Array of numbers
 * @returns boolean
 */

export default function SameBST(arrayOne: Array<number>, arrayTwo: Array<number>): boolean {
  if (arrayOne[0] !== arrayTwo[0]) return false;
  if (arrayOne.length !== arrayTwo.length) return false;

  

  return false;
}


function checkBSTCondition(arrayOne: Array<number>, arrayTwo: Array<number>): boolean {
  if(!arrayOne || !arrayOne.length) return true;
  if (arrayOne[0] !== arrayTwo[0]) return false;
  if (arrayOne.length !== arrayTwo.length) return false;

  const currentElement = arrayOne[0];
  const rightElements = arrayOne.filter((value) => (value >= currentElement));
  const nextLeftElement = arrayOne.filter((value) => (value < currentElement));
  const nextRightElementTwo = arrayTwo.filter((value) => (value >= currentElement));
  const nextLeftElementTwo = arrayTwo.filter((value) => (value < currentElement));

  return checkBSTCondition(nextLeftElement, nextLeftElementTwo) && checkBSTCondition(rightElements, nextRightElementTwo);
}
