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
});
