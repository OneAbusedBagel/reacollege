// Declaraties en definities.

let locaties = new Array(5);
for(let loc = 0; loc < locaties.length; loc++) {
  let kasten = new Array(3);
  locaties[loc] = kasten;
  for(let kast = 0; kast < kasten.length; kast++) {
    let laden = new Array(3);
    kasten[kast] = laden;
    for(let lade = 0; lade < laden.length; lade++) {
      let mappen = new Array(26);
      laden[lade] = mappen;
      for(let map = 0; map < mappen.length; map++) {
        mappen[map] = map;
      }
    }
  }
}