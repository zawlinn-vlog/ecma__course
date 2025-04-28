'use strict';

import Book from "./data.js";

class BookManage{
    #bookObj;
    #books = [];
    #searchRes ;
    

    createBook(title,author,year){
        this.#bookObj = new Book(title, author, year);
        this.#books.push(this.#bookObj)
    } 
    
    booklists(){
        return this.#books.forEach((book,idx) => {
           const {title, author, year} = book;
            console.log(`${++idx} - ${this.#bookObj.bookinfo(title, author, year)}`);
            
        })
    }

    getFilter(str){
       if(typeof str == 'string'){
        this.#searchRes = this.#books.filter((book)=> str.toLowerCase() == book.title.toLowerCase() || str.toLowerCase() == book.author.toLowerCase());

        if(this.#searchRes){
            console.log(`######## SEARCH RESEARCH 4 ${str.toUpperCase()} ########`);
            this.#searchRes.forEach((data,idx) => {
                const {title,author,year} = data;
                console.log(`${++idx} - ${this.#bookObj.bookinfo(title, author, year)}`);
            })
        } 
        
        return -21;
       }

       return this.#searchRes;
    }
}

const bookManageObj = new BookManage();

// IMPORT BOOKs DATA

bookManageObj.createBook('100 Ways to be Rich', 'John Matharew', 2010);
bookManageObj.createBook('All About Money', 'John Matharew', 2012);
bookManageObj.createBook('Money Psychology', 'Will Smith', 2008);
bookManageObj.createBook('Communiction', 'Will Smith', 2010);
bookManageObj.createBook('Rich Father, Poor Father', 'William Arthur', 2009);
bookManageObj.createBook('Entreprenure Mind', 'William Arthur', 2008);
bookManageObj.createBook('Rich Father, Poor Father', 'William Arthur', 2009);
bookManageObj.createBook('How to Start A Business', 'William Arthur', 2010);
bookManageObj.createBook('How to Make Inverstment Without Losing', 'William Arthur', 2012);


// WORKING WITH BOOK MANAGER

bookManageObj.booklists();

console.log(bookManageObj.getFilter('William Arthur'));
console.log(bookManageObj.getFilter('John Matharew'));
// console.log(bookManageObj.getFilter(2010));
