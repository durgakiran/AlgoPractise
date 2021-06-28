/**
 * num => 1
 * return => new Set('()');
 * num => 2
 * '()' => ['(', ')']
 *  at 0 => ['()', '(', ')']
 *  at 1 => ['(','()', ')']
 *  at 2 => ['(', ')', '()']
 * new set from 0, 1, 2
 * new Set('()()', '(())', '()()');
 *
 * num => 3
 *
 * []
 *
 *
 * num => 2
 * return => [[(, ), (, )], [(, (, ), )]]
 * num => 3
 * return => [
 *  [(, ), (, ), (, )],
 *  [(, (, ) ), (, ) ],
 *  [(, ), (, (, ) ) ],
 *  [(, (, (, )))],
 *  [(, (, ), ), (, )],
 *  [(), (, (, ))]
 *  [((, ), (, ))]
 * ]
 */

function BracketCombinations(num: number) {
  if (num === 0) return 0;

  const combs = createCombinations(num);
  // code goes here
  return combs.size;
}

function createCombinations(num: number): Set<string> {
  if (num === 1) return new Set(["()"]);

  console.log(num);

  let newCombs = new Set<string>();

  let prevCombs = createCombinations(num - 1);
  let combsArr = Array.from(prevCombs);
  console.log(combsArr);
  combsArr.forEach((comb) => {
    const tmp = comb.split("");
    for (let i = 0; i <= tmp.length; i += 1) {
      const newTmp = [...tmp];
      newTmp.splice(i, 0, "()");
      newCombs.add(newTmp.join(""));
    }
  });

  console.log(num, newCombs);
  return newCombs;
}

// keep this function call here
// @ts-ignore
console.log(BracketCombinations(3));
