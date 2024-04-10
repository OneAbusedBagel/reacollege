// Alle dossiermappen met een even volgnummer worden -1.

for ( let kast = 0; kast < kasten.lenght; kast++ ) {
  for ( let lade = 0; laden.length < 3; lade++ ) {
    for ( let map = 1; map < mappen.length; map += 2 ) {
      locaties[1][kast][lade][map] = -1;
    }
  }
}