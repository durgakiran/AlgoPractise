/**
 * Given a list of strings, write a function that returns
 * the longest string chain that can be built from those strings.
 * A string chain is defined as follows:
 * let string A be a string in the initial array;
 * if removing any single character from string A yields a new string B
 * that's contained in the initial array of strings,
 * then strings A and B form a string chain of length 2.
 * Similarly, if removing any single character from string B yields a new string C
 * that's contained in the initial array of strings, then strings A, B, and C form a string chain of length 3.
 *
 * The function should return the string chain in descending order
 * (i.e., from the longest string to the shortest one).
 * Note that string chains of length 1 don't exist;
 * if the list of strings doesn't contain any string chain formed by two or more strings,
 * the function should return an empty array.
 * You can assume that there will only be one longest string chain.
 *
 * strings = ["abde", "abc", "abd", "abcde", "ade", "ae", "1abde", "abcdef"]
 * ["abcdef", "abcde", "abde", "ade", "ae"]
 */

/**
 * solution:
 * map<string, 1>
 * stringChains = [];
 * for str in stringList:
 *  findStringChain(str)
 *
 * findStringChain(str)
 *  const subStr = getAllSubstringsOfOneCharLessSortByLength();
 *  currentChain = [];
 *  for s in substr:
 *      if (s in map)
 *          addToCurrentChain
 *          findStringChain(str)
 *      stringChains.push(currentChain)
 *      currentChain = []
 */

/**
 * solutions: 1
 * 
 * function createStringMap(strings: string[]): Record<string, number> {
    const strMap: Record<string, number> = {};
    for (const c of strings) {
        strMap[c] = 1;
    }
    return strMap;
}

function getAllSubStringsOfOneCharLess(str: string): string[] {
    const strArr = str.split('');
    return strArr.map((v, i) => {
        return str.substr(0, i) + str.substr(i + 1);
    });
}

function findStringChain(str: string, map: Record<string, number>): string[][] {
    const subStrings = getAllSubStringsOfOneCharLess(str);
    const currentChain: string[][] = [];
    for (const s of subStrings) { // m2!
        if (map[s]) {
            const subSubStrings = findStringChain(s, map);
            currentChain.push([s]);
            currentChain.push(...subSubStrings.map((stringArr) => [s, ...stringArr]));
        }

    }
    return currentChain;
}

export function longestStringChain(strings: string[]): string[] {
    const map = createStringMap(strings); // time: n
    const stringChains: string[][] = [];  // 
    for (const str of strings) { // time: n * 
        const stringChain = findStringChain(str, map);
        if(stringChain.length) stringChains.push(...stringChain.map((arr) => [str, ...arr]));
    }

    const chainLengths = stringChains.map((strArr) =>  strArr.length);
    const max = Math.max(...chainLengths);
    const maxIndex = chainLengths.findIndex((v) => v === max);

    return stringChains[maxIndex].sort((a, b) => {
        if (a.length >= b.length) return 11;
        return 1;
    });
}

console.log(longestStringChain(["abde", "abc", "abd", "abcde", "ade", "ae", "1abde", "abcdef"]));

*/

/**
 * solutions 2:
 * ================
 *
 * findLongestChain(str, map, chainMap, longestChain):
 *  const subStrs = getAllSubStringWithOneCharLess
 *  for (const subStr in subStrs):
 *      if (subStr in map)
 *          if (subStr in chainMap)
 *              if (chainMap[str])
 *                 if (chainMap[str][1] < (chainMap[subStr] + 1))
 *                      chainMap[str] = [subStr, (chainMap[subStr] + 1)]
 *                      longestChain[1] < (chainMap[str][1]) && longestChain = [str, chainMap[str][1]]
 *                 else
 *                      do nothing
 *              else
 *                  chainMap[str] = [subStr, (chainMap[subStr] + 1)]
 *                  longestChain[1] < (chainMap[str][1]) && longestChain = [str, chainMap[str][1]]
 *          else
 *              chainMap[str] = [subStr, 1]
 *              longestChain[1] < (chainMap[str][1]) && longestChain = [str, chainMap[str][1]]
 *      else
 *          do nothing
 *
 *
 * longestStringChain(strings):
 *  map => Record<string, 1>
 *  sortedStrings = sortStrings in ascending order
 *  chainMap => Record<str, [maxChainItem, length]>
 *  longestChain => ['', 0]
 *  for (str in sortedStrings):
 *      findLongestChain(str, map, chainMap, longestChain);
 *
 *  chain = []
 *  currentString = longestChain[0];
 *  while(currentString)
 *      chain.push(currentString)
 *      currentString = chainMap[currentString] ? chainMap[currentString][0] : ''
 *  return chain
 */

function createStringMap(strings: string[]): Record<string, number> {
    const strMap: Record<string, number> = {};
    for (const c of strings) {
        strMap[c] = 1;
    }
    return strMap;
}

function getAllSubStringsOfOneCharLess(str: string): string[] {
    const strArr = str.split('');
    return strArr.map((v, i) => {
        return str.substr(0, i) + str.substr(i + 1);
    });
}

function updateLongestChain(newValues: [string, number], longestChain: [string, number]): void {
    longestChain[0] = newValues[0];
    longestChain[1] = newValues[1];
}

function findLongestChain(
    str: string,
    map: Record<string, number>,
    chainMap: Record<string, [string, number]>,
    longestChain: [string, number]
): void {
    const subStrings = getAllSubStringsOfOneCharLess(str);
    for (const subStr of subStrings) {
        if (map[subStr]) {
            if (chainMap[subStr]) {
                if (chainMap[str]) {
                    if (chainMap[str][1] < chainMap[subStr][1] + 1) {
                        chainMap[str] = [subStr, chainMap[subStr][1] + 1];
                        if (longestChain[1] < chainMap[str][1]) {
                            updateLongestChain([str, chainMap[str][1]], longestChain);
                        }
                    }
                } else {
                    chainMap[str] = [subStr, chainMap[subStr][1] + 1];
                    if (longestChain[1] < chainMap[str][1]) {
                        updateLongestChain([str, chainMap[str][1]], longestChain);
                    }
                }
            } else {
                if (!chainMap[str]) {
                    chainMap[str] = [subStr, 1];
                    if (longestChain[1] < chainMap[str][1]) {
                        updateLongestChain([str, chainMap[str][1]], longestChain);
                    }
                }
            }
        }
    }
}

export function longestStringChain(strings: string[]) {
    const map = createStringMap(strings);
    const sortedStrings = strings.sort((a, b) => {
        if (a.length > b.length) return 1;
        return -1;
    });
    const chainMap: Record<string, [string, number]> = {};
    const longestChain: [string, number] = ['', 0];

    for (const str of sortedStrings) {
        findLongestChain(str, map, chainMap, longestChain);
    }
    const chain = [];
    let currentString = longestChain[0];
    while (currentString) {
        chain.push(currentString);
        currentString = chainMap[currentString] ? chainMap[currentString][0] : '';
    }
    return chain;
}

console.log(longestStringChain(["abde", "abc", "abd", "abcde", "ade", "ae", "1abde", "abcdef"]));
