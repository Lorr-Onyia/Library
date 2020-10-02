function bookApp() {
    let books = [{id: 11, name:"half of a yellow son" } , {id:12,name:"The enemy called average"} , {id:13, name: "power of a praying wife"}, {id:14, name:"purple hibiscus" }, {id:15, name:"Enemy lines" } , {id:16, name:"spirit controlled temperament"} , {id:17, name:"Good morning Holy spirit"} , {id:18, name:"Eloquent javascript"} ,{id:19, name:"The enemy called average"}, {id:20, name:"a woman's prime"}];

   let removedBooks = [];

     function onBorrowBook (id) {
      for (let i = 0; i < books.length; i += 1) {
           let exist = false;
           for (let j = 0; j < removedBooks.length; j += 1) {
             if (books[i].id === removedBooks[j].id) {
               exist = true;
             }
           }
           if (books[i].name && !exist) {
              removedBooks.push({
               name: `${books[i].name}`,
               id: books[i].id,
             });
           }
           return books.length;
        }
     }

     function onReturnBook(id) {
        for(let j = 0; j < removedBooks.length; j+= 1) {
           let exist = false;
           for(let i = 0; i < books.length; i +=1) {
               if(removedBooks[j].id === books[i].id) {
                   exist = true;
               }
           }
           if (removedBooks[j].name && !exist) {
               books.push({
                   name: `${removedBooks[j].name}`,
                   id: removedBooks[j].id,
               });
           }
           return books.length;
        }
     }
   

  function showAvailableBooks() {
       return books;
   }
   
   function showBorrowedBooks() {
       return removedBooks;
   }

   return {
       allBooks: showAvailableBooks,
       borrow: onBorrowBook,
       retrieve: onReturnBook,
       borrowedBooks: showBorrowedBooks
   };

}

var libBooks = bookApp();

console.log(libBooks.allBooks());

console.log(libBooks.borrow(15));

console.log(libBooks.borrowedBooks());

console.log(libBooks.retrieve(15));
