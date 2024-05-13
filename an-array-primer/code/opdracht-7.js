let mijnInkomsten = new Array(12);
let totaalInkomsten = 0;
for(let i = 0; i < mijnInkomsten.length; i++) {
  let n = Math.floor(Math.random() * 5001) - 2500;
  mijnInkomsten[i] = n;
  totaalInkomsten = totaalInkomsten + n;
}
print('Mijn inkomsten: '); printnl(mijnInkomsten);
print('Som inkomsten: '); printnl(totaalInkomsten);

let mijnBTW = new Array(12);
let totaalBTW = 0;
for(let i = 0; i < mijnBTW.length; i++) {
  let b = mijnInkomsten[i] * 0.21;
  mijnBTW[i] = b;
  totaalBTW = totaalBTW + b;
}
print('Mijn BTW: '); printnl(mijnBTW);
print('Som BTW: '); printnl(totaalBTW);