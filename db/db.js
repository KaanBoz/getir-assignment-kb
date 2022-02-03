const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true';
const client = new MongoClient(url);
const dbName = 'getir-case-study';
let collection = null;
let connected = false;

async function connect() {
    console.log('Connecting to server');
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    collection = db.collection('records');
    connected = true
}

async function getir(startDate, endDate, minCount, maxCount) {
    // if not connected yet, connect now. something better can be implemented here.
    if (!connected) {
        await connect();
    }
    return await collection.aggregate(
        [
            {
                $project: {
                    _id: 0,
                    key: "$key",
                    createdAt: "$createdAt",
                    totalCount: { $sum: "$counts" }

                }
            },
            {
                $match: {
                    "createdAt": {
                        $gte: new Date(startDate),
                        $lte: new Date(endDate)
                    },
                    "totalCount": {
                        $gte: minCount,
                        $lte: maxCount
                    }
                }
            }
        ]
    ).toArray()
}

module.exports = {
    getir
}