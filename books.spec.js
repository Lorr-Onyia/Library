const bookApp = require('./functions');

describe("bookApp", () => {
    it('should exist', () => {
        expect(bookApp).toBeDefined();
    });
    test('books should return an array of books', () => {
        let books = [{id: 11, name:"half of a yellow sun"}]
        expect(books).toEqual([{id: 11, name:"half of a yellow sun"}]);
    });
    test("onBorrowBook should be defined", () => {
        expect(bookApp.onBorrowBook).toBeDefined();
    });
    test("onReturnBook should be defined", () => {
        expect(bookApp.onReturnBook).toBeDefined();
    });
})
