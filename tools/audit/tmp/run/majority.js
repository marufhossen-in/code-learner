// writes to a log with a majority ack rule, then cut the network: who can still commit?
const replicas = 5;
for (const up of [5, 4, 3, 2]) {
  const writeOk = up >= Math.floor(replicas / 2) + 1;
  const readOk = up >= Math.floor(replicas / 2) + 1;
  console.log('replicas alive', up, 'of', replicas, '-> write', writeOk ? 'yes' : 'NO', 'read', readOk ? 'yes' : 'NO');
}
