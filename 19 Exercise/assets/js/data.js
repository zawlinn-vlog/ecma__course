'use strict'

export default class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year
    }

    bookinfo(){
        return `${this.title} is written ${this.author} in ${this.year}.`
    }
}