import { Uuid } from "../../../shared/value-objects/uuid.vo";
import { Category } from "../category.entity";

describe("Category Unit Test", () => {
	let validateSpy: any;
	
	beforeEach(() => {
		validateSpy = jest.spyOn(Category, "validate");
	});

	describe("constructor", () => {
		it("should create a new Category instace with default values", () => {
			const category = new Category({
				name: "Category 1",
			});

			expect(category.categoryId).toBeInstanceOf(Uuid);
			expect(category.name).toBe("Category 1");
			expect(category.description).toBeNull();
			expect(category.isActive).toBe(true);
			expect(category.createdAt).toBeInstanceOf(Date);
		});

		it("should create a new Category instance with given values", () => {
			const createdAt = new Date();
			const category = new Category({
				name: "Category 1",
				description: "Description",
				isActive: false,
				createdAt,
			});

			expect(category.name).toBe("Category 1");
			expect(category.description).toBe("Description");
			expect(category.isActive).toBe(false);
			expect(category.createdAt).toBe(createdAt);
		});

		it("should create a new Category instance with default values when given null", () => {
			const category = new Category({
				name: "Category 1",
				description: "Description",
			});

			expect(category.categoryId).toBeInstanceOf(Uuid);
			expect(category.name).toBe("Category 1");
			expect(category.description).toBe("Description");
			expect(category.isActive).toBe(true);
		});
	});

	describe("methods", () => {
		it("should update the category name", () => {
			const category = Category.create({
				name: "Category 1",
			});

			expect(category.name).toBe("Category 1");

			category.changeName("Novo nome");
			expect(category.name).toBe("Novo nome");
			expect(validateSpy).toHaveBeenCalledTimes(2);
		});

		it("should update the category description", () => {
			const category = Category.create({
				name: "Category 1",
			});

			expect(category.description).toBeNull();

			category.changeDescription("Description");
			expect(category.description).toBe("Description");
			expect(validateSpy).toHaveBeenCalledTimes(2);
		});

		it("should activate the category", () => {
			const category = Category.create({
				name: "Category 1",
				isActive: false,
			});

			category.activate();
			expect(category.isActive).toBe(true);
			expect(validateSpy).toHaveBeenCalledTimes(1);
		});

		it("should deactivate the category", () => {
			const category = Category.create({
				name: "Category 1",
				isActive: true,
			});

			category.deactivate();
			expect(category.isActive).toBe(false);
			expect(validateSpy).toHaveBeenCalledTimes(1);
		});

		it("should return json representation of the category", () => {
			const createdAt = new Date();
			const category = new Category({
				name: "Category 1",
				description: "Description",
				isActive: false,
				createdAt,
			});

			expect(category.toJSON()).toEqual({
				categoryId: category.categoryId.id,
				name: "Category 1",
				description: "Description",
				isActive: false,
				createdAt,
			});
		});
	});
});
