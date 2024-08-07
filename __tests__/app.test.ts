const request = require("supertest");
import app from "../src/app";

describe("Test root path", () => {
    test("Should print Connection Successful", async () => {
        const response = await request(app).get("/");
        expect(response.text).toBe("Connection successful");
    })
})