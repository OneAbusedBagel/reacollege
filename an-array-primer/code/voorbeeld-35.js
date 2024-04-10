// Kopieer alles van locatie 3 naar locatie 2 en tel 100
// op bij de inhoud van elke dossiermap van locatie 2.

const bron = 2;
const doel = 1;
for ( let kast = 0; kast < kasten.length; kast++ ) {
  for ( let lade = 0; lade < laden.length; lade++ ) {
    for ( let map = 0; map < mappen.length; map++ ) {
      let m = locaties[bron][kast][lade][map] + 100;
      locaties[doel][kast][lade][map] = m;
    }
  }
}