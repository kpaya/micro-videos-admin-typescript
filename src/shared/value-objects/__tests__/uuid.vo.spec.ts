import { Uuid } from "../uuid.vo";

describe("UUID Value Object Unit Tests", () => {

    it("should throw an error if the UUID is invalid", () => {
        expect(() => new Uuid("invalid-uuid")).toThrowError("Invalid UUID");
    });

	it("should be the same UUID value object", () => {
		const uuid1 = new Uuid("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11");
		const uuid2 = new Uuid("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11");

		expect(uuid1.equals(uuid2)).toBe(true);
	});
});
