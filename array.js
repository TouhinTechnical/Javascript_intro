// declear kora array
var friendAge = [11, 13, 17, 21];
var muriChanacurFree = [34, 55, 221, 3];
var fruitName = ["apple", "mango", "orange"];
var oddNumbers = [1, 3, 5, 7, 9];
var vowels = ['a', 'e', 'i', 'o', 'u'];
var vowelsCount = vowels.length;
// print
console.log(friendAge);
console.log(muriChanacurFree);
console.log(fruitName);
console.log(oddNumbers);
console.log(vowels);

// array modde koy ta variable ace ta dker jonno (.length)eita likte hobe console.log modde
console.log(friendAge.length);
console.log(oddNumbers.length);
console.log(vowelsCount);
// array modde variable golo position access korar niym holo (.indexOf) korte hobe
// array index count soru hoy 0 diye
var bookPages = ['hablu', 'bolod', 'git', 'hub', 'men'];
var gitIndex = bookPages.indexOf('git');
console.log(gitIndex);

var oddNumbers_7_Index = oddNumbers.indexOf(7);
console.log(oddNumbers_7_Index);
var bookPagesIndex = bookPages[3];
console.log(bookPagesIndex);
// position modde noton element add kora jabe ba poron element k replace kora jabe
bookPages[3] = 'lab';
console.log(bookPages);
// Notes: array kono element nah take tkn jodi index check kori taile output [-1] dakabe,element nam kujle oita nah takle output ar [undefined] dakabe

// array somoy add kora k (push) bole
// array somoy remove kora k (pop) bole

// array push
bookPages.push('github');
bookPages.push('gitlab');
console.log(bookPages);
//array firstitem add korar jonno {unshift()}
bookPages.unshift('sablu','gablu');
console.log(bookPages);

// array pop
bookPages.pop();
console.log(bookPages);
// firstitem remove
oddNumbers.shift();
console.log(oddNumbers);

// specific element k remove korte caile(je element ta delect korbo oita array count number , diye koyta delect korbo oita number)
bookPages.splice(1, 1);
console.log(bookPages);