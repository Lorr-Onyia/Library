const library = require('./functions');


test('available books should contain list of objects', () => {
    let books = [{id: 11, name:"half of a yellow son" }];
    expect(books).toEqual([{id: 11, name:"half of a yellow son" }]);
});

test('borrowed books should be an array', () => {
    expect(removedBooks).toBe();
});
