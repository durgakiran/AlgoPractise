/**
 *  Ip: )(
    Op : “”

    Ip : (())
    Op : (())

    Ip: )()()
    op:()()

    Ip: )()()(())(
    Op: ()()(())

    Ip: )()()((())(
    Op: ()()(())

    IP: (()()
    op: ()()
    
    remaining = ['(', true, true, true, true]
    
    fn:
        let rem = ['(', '(']; <= track
        let lastUnbalancedIndex = 1; <= 
        let arr = IP.split('');
        for (let i = 0; i < arr.length; i += 1) {
            let current = arr[i];
            if (rem[lastUnbalancedIndex] === '(' && current === ')') {
                rem[lastUnbalancedIndex] = true;
                rem.push(true);
            } else {
                rem.push(current);
            }
        }

        return rem.map((value, index ) => {
            if (value === true) {
                return arr[index];
            } else '';
        }).join('');
    

 */
// solution: 1
function returnBalancedSubstring(str: string): string {
  const rem: Array<string | boolean> = [];
  let lastUnbalancedIndex = -1;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];
    if (
      rem[lastUnbalancedIndex] &&
      rem[lastUnbalancedIndex] === "(" &&
      current === ")"
    ) {
      rem[lastUnbalancedIndex] = true;
      rem.push(true);
      lastUnbalancedIndex -= 1;
    } else {
      lastUnbalancedIndex = i;
      rem.push(current);
    }
  }

  return rem
    .map((value, index) => {
      if (value === true) {
        return arr[index];
      } else "";
    })
    .join("");
}

// function returnBalancedSubstring(str: string): string {
//   const rem: Array<number> = [];
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i += 1) {
//     const current = arr[i];
//     const lastUnbalancedIndex = rem[rem.length - 1];
//     const lastActive = arr[lastUnbalancedIndex];
//     if (lastActive && lastActive === "(" && current === ")") {
//       rem.pop();
//     } else {
//       rem.push(i);
//     }
//   }

//   rem.forEach((value) => {
//     arr.splice(value, 1, "");
//   });

//   return arr.join("");
// }

console.log(returnBalancedSubstring(")("));
console.log(returnBalancedSubstring(")()()((())("));
console.log(returnBalancedSubstring("(())"));
console.log(returnBalancedSubstring(")()()"));
console.log(returnBalancedSubstring(")()()(())("));
console.log(returnBalancedSubstring("(()()"));
console.log(returnBalancedSubstring("((()())"));
