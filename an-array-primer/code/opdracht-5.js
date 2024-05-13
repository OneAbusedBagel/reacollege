let mijnInkomsten = new Array(12);

for(let i = 0; i < mijnInkomsten.length; i++) {
  mijnInkomsten[i] = Math.floor(Math.random() * 5001) - 2500;
}

printnl(mijnInkomsten);