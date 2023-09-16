import { ValueObject } from "../domain/value-object";
import { v4 as uuidV4, validate as uuidValidate } from "uuid";

export class Uuid extends ValueObject {

    constructor(public readonly id?: string) {
        super();
        this.id = id || uuidV4();
        if (!this.isValid(this.id)){
            throw new Error("Invalid UUID");
        }
    }

    private isValid(id: string): boolean {
        return uuidValidate(id);
    }
}

export class InvalidUuidError extends Error {
    constructor(message?: string){
        super(message || "Id must be a valid UUID");
        this.name = "InvalidUuidError";
    }
}