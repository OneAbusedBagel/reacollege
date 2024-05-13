// Alles laten zien.

for(let loc = 0; loc < locaties.length; loc++) {
  for(let kast = 0; kast < locaties[loc].length; kast++) {
    for(let lade = 0; lade < locaties[loc][kast].length; lade++) {
      printnl('Locatie: ' + (loc + 1));
      printnl('Kast: ' + (kast + 1));
      printnl('Lade: ' + (lade + 1));
      print('Mappen:');
      for(let map = 0; map < locaties[loc][kast][lade].length; map++){
        let mapInhoud = locaties[loc][kast][lade][map];
        print(' ' + mapInhoud);
      }
      printnl('');
      printnl('');
    }
  }
}