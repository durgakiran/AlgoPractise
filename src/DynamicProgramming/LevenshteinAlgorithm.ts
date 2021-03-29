/**
 * Problem:
 * given two strings str1, str2. find minimum number of operations required on str1
 * to make it equal to str2
 * 
 * Leventshtein Distance:
 * 
 * str1 = 'abc';
 * str2 = 'yabd';
 * 
 * ----------------------------
 *     | " " | y |  a | b | d | <= str2
 * ----------------------------
 * " " |  0  | 1 |  2 | 3 | 4 | 
 * ----------------------------
 * a   |  1  | 1 |  1 | 2 | 3 |
 * ----------------------------
 * b   |  2  | 2 |  2 | 1 | 2 |
 * ----------------------------
 * c   |  3  | 3 |  3 | 2 | 2 |
 * ----------------------------
 * 
 */


function LeventshteinDistance(str1: string, str2: string) {
    const lastRow = [[]];
    for (let i = 0; i <= str1.length; i += 1) {
        for (let j = 0; j <= str2.length; j += 1) {

        }
    }
}