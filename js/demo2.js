const snowId = require('simple-flakeid')
let gen1 = new snowId.SnowflakeIdv1({ workerId: 1 })
for (let i = 0; i < 10; i++) {
    let id1 = gen1.NextBigId()
    console.log(`${i} ID:${id1} ${typeof id1} length：${id1.toString().length}`)
}