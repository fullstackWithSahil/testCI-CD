import app from "../server";
import request  from "supertest";

describe("Server", () => {
    it("should return hello", async() => {
        const res = await request(app).get('/api/hello');
        expect(res.body).toEqual({ message: 'Hello'}); 
    })
})