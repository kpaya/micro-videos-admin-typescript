import { Uuid } from "../uuid.vo";

describe("UUID Value Object Unit Tests", () => {
	const validateSpy = jest.spyOn(Uuid.prototype as any, "validate");

	it("should throw an error if the UUID is invalid", () => {
		expect(() => new Uuid("invalid-uuid")).toThrowError(
			"Id must be a valid UUID"
		);
		expect(validateSpy).toHaveBeenCalledTimes(1);
	});

	it("should be a valid UUID", () => {
		const uuid = new Uuid();
		expect(uuid).toBeInstanceOf(Uuid);
		expect(uuid.id).toHaveLength(36);

		const uuid2 = new Uuid("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11");
		expect(uuid2).toBeInstanceOf(Uuid);
		expect(uuid2.id).toBe("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11")

		expect(validateSpy).toHaveBeenCalledTimes(2);
	});

	it("should be the same UUID value object", () => {
		const uuid1 = new Uuid("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11");
		const uuid2 = new Uuid("a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11");

		expect(uuid1.equals(uuid2)).toBe(true);
		expect(validateSpy).toHaveBeenCalledTimes(2);

	});
});
