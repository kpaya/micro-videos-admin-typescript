import { ValueObject } from "../domain/value-object";
import { v4 as uuidV4, validate as uuidValidate } from "uuid";

export class Uuid extends ValueObject {
	static create(id?: string): Uuid {
		return new Uuid(id);
	}

	constructor(public readonly id?: string) {
		super();
		this.id = id || uuidV4();
		this.validate(this.id);
	}

	private validate(id: string) {
		const isValid = uuidValidate(id);
		if (!isValid) {
			throw new InvalidUuidError();
		}
	}
}

export class InvalidUuidError extends Error {
	constructor(message?: string) {
		super(message || "Id must be a valid UUID");
		this.name = "InvalidUuidError";
	}
}
