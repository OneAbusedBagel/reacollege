// De inhoud van alle dossiermappen wijzigen.

for(let loc = 0; loc < locaties.length; loc++) {
  for(let kast = 0; kast < locaties[loc].length; kast++) {
    for(let lade = 0; lade < locaties[loc][kast].length; lade++) {
      for(let map = 0; map < locaties[loc][kast][lade].length; map++){
        locaties[loc][kast][lade][map] = map * 2 + 1;
      }
    }
  }
}