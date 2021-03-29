/**
 * Write a function that takes in an array of integers and returns the length of the longest peak in the array.
 * A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip 
 * (the highest value in the peak), at which point they become strictly decreasing. At least three 
 * integers are required to form a peak.
 * For example, the integers 1, 4, 10, 2 form a peak, 
 * but the integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0. 
 * Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3.
 * 
 * array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
 *            +  +  =  +  -  +   -  -  -   -   +  +
 *            0  1  2  3  4  5
 *          0   1  2  3  4  5  6
 * // 3 4 0
 * // 0 10 6 5 -1 -3
 * // -1 -3 2 3
 * 
 * peaks => [[3, 4, 0], ]
 * peakStart => 10
 * peakEnd =>
 * probablePeak => [0, 10, 6, 5, -1, -3]
 * 
 * 
 * 1 2 3 3 (equal take last one)
 *
 * 3 4 0 10 (increasing take last two)
 * 0 10  
 * 
 * 
 * 
 * [+  +  =  +  -  +   -  -  -   -   +   +]
 * lastTrend
 * isIncreased = false
 * isDecreased = true
 * track = []
 * - for trend, index in trends
 *  - if no lastTrend and trend === '+'
 *         push index into track
 *         lastTrend => '+'
 *         isIncreased => true
 *         index += 1
 *  - if lastTrend === trend === '+' || '-'
 *          push index into track
 *          index += 1
 * -  if lastTrend !== trend === '-' and isIncreased
 *          track.push(trend)
 *          isDecreased => true
 *          index += 1
 * -  if lastTrend !== trend === '+' || '=' and isIncreased and isDecreased
 *          push track into peaklist
 *          track => []
 *          isIncreased => false
 *          isDecreased => false
 *          lastTrend => ''
 * - if no lastTrend and trend === '=' || '-'
 *          index += 1
 * - if lastTrend !== trend === '-' || '=' and not isIncreased
 *          track => []
 *          isIncreased => false
 *          isDecreased => false
 *          lastTrend => ''
 * 
 * PseudoCode:
 * - peaks => []
 * - probablePeak => []
 * - trend => 'neutral'
 * - isIncreased => false
 * - for ele in array
 *  - if probablePeak empty
 *      - push ele to probablePeek
 *  - else 
 *     - change = lastElement in el - probablePeak
 *     - if change neutral
 *          - empty probablePeak
 *          - push ele to probablePeek
 *     - else if change === trend === 'increasing'
 */

export function LongestPeak(array: Array<number>): number {

    if (array.length < 3) {
		return 0;
	}

    const arr: Array<string> =  [];
    
    for (let i = 1; i < array.length; i += 1) {
        const diff = array[i] - array[i - 1]; 
        const ele =  diff > 0 ? '+' : (diff === 0) ? '=' : '-';
        arr.push(ele);
    }

    const allPeaks = [];
    let probablePeak = [];
    let lastTrend = '';
    let isIncreased = false;
    let isDecreased = false;
    let index = 0;
    
    while (true) {
        if (arr[index] === undefined || arr[index] === null) {
            console.log(index);
            break;
        }
        const trend = arr[index];
        console.log(probablePeak, index, trend);
        if (!lastTrend && trend === '+') {
            probablePeak.push(index);
            lastTrend = '+';
            isIncreased = true;
            index += 1;
        } else if (lastTrend === trend) {
            probablePeak.push(index);
            index += 1;
        } else if ((lastTrend !== trend) && trend === '-' && isIncreased) {
            probablePeak.push(index);
            lastTrend = trend;
            isDecreased = true;
            index += 1;
        } else if ((trend === '+' || trend === '=') && isIncreased && isDecreased) {
            probablePeak.push(probablePeak[probablePeak.length - 1] + 1);
            allPeaks.push(probablePeak);
            probablePeak = [];
            isIncreased = false;
            isDecreased = false;
            lastTrend = '';
        } else if (!lastTrend && (trend === '-' || trend === '=')) {
            index += 1;
        } else if ((lastTrend !== trend) && (trend === '-') && !isIncreased) {
            probablePeak = [];
            isIncreased = false;
            isDecreased = false;
            lastTrend = '';
        } else if ((lastTrend !== trend) && (trend === '=')) {
            probablePeak = [];
            isIncreased = false;
            isDecreased = false;
            lastTrend = '';
        }
    }

    if (probablePeak.length && isDecreased && isIncreased) {
        probablePeak.push(probablePeak[probablePeak.length - 1] + 1);
        allPeaks.push(probablePeak);
    }
    console.log(allPeaks, probablePeak, isIncreased, isDecreased)
    if (!allPeaks.length) return 0;
    const length = allPeaks.map((peak) => peak.length).sort((a, b) => a - b).pop();
    return length || 0;
}

LongestPeak([1, 3, 2]);

