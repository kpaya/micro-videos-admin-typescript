import { Category } from "../category.entity";

describe("Category Unit Test", () => {
	describe("constructor", () => {
		it("should create a new Category instace with default values", () => {
			const category = new Category({
				name: "Category 1",
			});

			expect(category.categoryId).toBeUndefined();
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

			expect(category.categoryId).toBeUndefined();
			expect(category.name).toBe("Category 1");
			expect(category.description).toBe("Description");
			expect(category.isActive).toBe(true);
		});
	});

	describe("methods", () => {
		it("should update the category name", () => {
			const category = new Category({
				name: "Category 1",
			});

			expect(category.name).toBe("Category 1");

			category.changeName("Novo nome");
			expect(category.name).toBe("Novo nome");
		});

		it("should update the category description", () => {
			const category = new Category({
				name: "Category 1",
			});

			expect(category.description).toBeNull();

			category.changeDescription("Description");
			expect(category.description).toBe("Description");
		});

		it("should activate the category", () => {
			const category = new Category({
				name: "Category 1",
				isActive: false,
			});

			category.activate();
			expect(category.isActive).toBe(true);
		});

		it("should deactivate the category", () => {
			const category = new Category({
				name: "Category 1",
				isActive: true,
			});

			category.deactivate();
			expect(category.isActive).toBe(false);
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
				categoryId: undefined,
				name: "Category 1",
				description: "Description",
				isActive: false,
				createdAt,
			});
		});
	});
});
