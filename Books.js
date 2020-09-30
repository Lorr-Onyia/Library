const library = (() => {
    let books = [{id= "11", name:"half of a yellow son" } , {id:"12",name:"There was a country"} , {id:"13", name:"purple hibiscus" }, {id:"14", name:"Enemy lines" } , {} , {} , {} ,];
    let removedBooks = [];

    function onBorrowBook (id) {
        let availableBooks = books.filter((_, index) => index != id);
        let removedBook = books.filter((_, index) => index == id);
        if(removedBook[11] != undefined) {
          books = availableBooks;
          removedBooks.push(removedBook[11]);
          return `\n>>> YOU HAVE SUCCESSFULLY BORROWED  ${bookBorrowed[0]}`
        }else{
          return `\n*** Oops! YOU ENTERED AN INVALID BOOK INDEX ***`;
        }
    }

    function onReturnBook(id) {
      const book = removedBook[id];
      const return = removedBooks.filter((_, index) => index != id);
      if(removedBooks.includes(book)) {
          borrowedBooks = return ;
          availableBooks.push(book)
          return `\n>>> WELL DONE! YOU HAVE RETURNED ${book} TO THE STORE`
        }else{
          return `\n*** Oops! YOU Entered AN INVALID BOOK INDEX ***`;
        }
    }
    
    
    function ShowAvailableBooks() {
        return books;
    }
    
    function ShowBorrowedBooks() {
        return removedBooks;
    }

    return {
        allBooks: onShowAvailableBooks,
        borrow: onBorrowBook,
        retrieve: onReturnBook,
        borrowedBooks: onShowBorrowedBooks
    }
})();

console.log(Library. allBooks());

