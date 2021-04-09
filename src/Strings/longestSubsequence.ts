/**
 * given two strings ,find longest common sub sequence
 * 
 * str1 => "ZXVVYZW", str2 => "XKYKZPW"
 * 
 * let longestSubSequence = [w, z, Y];
 * 
 * - for char2 from last of str2 in str2:
 *  - for char1 from last of str1 in str1:
 *      - if char2 == char1
 *          - longestSubSequence.unshift(char1);
 *          - remove char1 from str1
 *          - break
 * 
 */


function longestSubsequence(str1: string, str2: string): Array<string> {
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');

    let commonSequences: string[][][] = [];
    commonSequences[0] = str1Arr.map((_) => []);

    for (let i = 0; i < str2Arr.length; i += 1 ) {
        let currentChar = str2Arr[i];
        commonSequences[i + 1] = [[]];
        for (let j = 0; j < str1Arr.length; j += 1) {
            let otherChar = str1Arr[j];
            let prevC = commonSequences[i + 1][j] ?? [];
            let prevR = commonSequences[i][j + 1] ?? [];
            let prevA = prevC.length > prevR.length ? prevC : prevR;
            if (otherChar === currentChar) {
                commonSequences[i+1].push(prevC.concat([currentChar]));
            } else {
                commonSequences[i+1].push(prevA);
            }
        }
    }

    let last = commonSequences[commonSequences.length - 1];

    return last[last.length - 1] ?? [];
}
// ["C", "D", "E", "G", "H", "J", "K", "L", "T", "U", "V"]
console.log(longestSubsequence("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAGTUV"))
