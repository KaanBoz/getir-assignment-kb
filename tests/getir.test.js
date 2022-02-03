const request = require("supertest");
const app = require("../app");

test('POST /getir', async () => {
    await request(app)
        .post("/getir")
        .expect("Content-Type", /json/)
        .send({
            "startDate": "2016-12-01",
            "endDate": "2018-12-30",
            "minCount": 1000,
            "maxCount": 2000
        })
        .expect(200)
});