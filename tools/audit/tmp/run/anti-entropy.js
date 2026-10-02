// push sends a digest of what changed; pull asks for what the peer is missing. Full sync costs bytes.
const rows = 5000, changed = 12;
const digestPerRow = 8;                       // hash of the row
const fullRow = 420;                          // average encoded row, bytes
console.log('digest exchange:', changed * digestPerRow + rows * 4, 'bytes to find', changed, 'diffs');
console.log('blind full sync:', rows * fullRow, 'bytes for the same', changed, 'rows');
