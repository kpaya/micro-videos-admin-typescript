import { ValueObject } from "../value-object";

class NewValueObject extends ValueObject {
	constructor(readonly value: string) {
		super();
	}
}

class NewValueObject2 extends ValueObject {
	constructor(readonly value: string) {
		super();
	}
}

describe("Value Object Unit Tests", () => {
	it("should be the same value object", () => {
		const valueObject1 = new NewValueObject("value");
		const valueObject2 = new NewValueObject("value");

		expect(valueObject1.equals(valueObject2)).toBe(true);
	});

    it("should not be the same value object", () => {
        const valueObject1 = new NewValueObject("value");
        const valueObject2 = new NewValueObject("value2");

        expect(valueObject1.equals(valueObject2)).toBe(false);
    });

    it("should not be the same type of value object", () => {
        const valueObject1 = new NewValueObject("value");
        const valueObject2 = new NewValueObject2("value");

        expect(valueObject1.equals(valueObject2)).toBe(false);
    });
});
