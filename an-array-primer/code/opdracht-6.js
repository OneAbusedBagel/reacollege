let mijnInkomsten = new Array(12);
let totaalInkomsten = 0;

for(let i = 0; i < mijnInkomsten.length; i++) {
  let n = Math.floor(Math.random() * 5001) - 2500;

  mijnInkomsten[i] = n;

  totaalInkomsten = totaalInkomsten + n;
}

printnl(mijnInkomsten);
printnl(totaalInkomsten);