'use strict'

export default class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    bookinfo(title, author, year){
        return `${title} is written ${author} in ${year}.`
    }
}