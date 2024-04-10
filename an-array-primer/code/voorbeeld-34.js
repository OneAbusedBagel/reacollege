// Waar zijn de dossiermappen met volgnummer 13?

const volgnr = 13;
let teller = 0;
for ( let loc = 0; loc < locaties.length; loc++ ) {
  for ( let kast = 0; kast < kasten.length; kast++ ) {
    for ( let lade = 0; lade < laden.length; lade++ ) {
      for ( let map = 0; map < mappen.length; map++ ) {
        if ( locaties[loc][kast][lade][map] === volgnr ) {
          teller++;
        }
      }
    }
  }
}

print('Dossiermappen met het volgnummer 13 komen ');
print(teller);
printnl(' keer voor.');