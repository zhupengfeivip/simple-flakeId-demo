
const express = require('express')
const app = express()
const port = 3000

const snowId = require('simple-flakeid')
let gen1 = new snowId.SnowflakeIdv1({ workerId: 1 })
BigInt.prototype.toJSON = function () { return this.toString() }


app.get('/auto', (req, res) => {
    let list = []
    for (let i = 0; i < 10; i++) {
        let id1 = gen1.NextId()
        list.push(id1)
        console.log(`${i} ID:${id1} ${typeof id1} length：${id1.toString().length}`)
    }
    res.send(list)
})

app.get('/auto2', (req, res) => {
    gen1 = new snowId.SnowflakeIdv1({ workerId: 1, seqBitLength: 15 })
    let list = []
    for (let i = 0; i < 10; i++) {
        let id1 = gen1.NextId()
        list.push(id1)
        console.log(`${i} ID:${id1} ${typeof id1} length：${id1.toString().length}`)
    }
    res.send(list)
})

app.get('/number', (req, res) => {
    let list = []
    for (let i = 0; i < 10; i++) {
        let id1 = gen1.NextNumber()
        list.push(id1)
        console.log(`${i} ID:${id1} ${typeof id1} length：${id1.toString().length}`)
    }
    res.send(list)
})

app.get('/bigint', (req, res) => {
    let list = []
    for (let i = 0; i < 10; i++) {
        let id1 = gen1.NextBigId()
        list.push(id1)
        console.log(`${i} ID:${id1} ${typeof id1} length：${id1.toString().length}`)
    }
    res.send(list)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})