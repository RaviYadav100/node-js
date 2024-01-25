function Book(title, author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}
let book1=new Book("The Catcher in the Rhy","J.D. salinger",1951);
let book2=new Book("To Kill a Mockigbird","Harper Leo",1960);
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(book2.title);
console.log(book2.author);
console.log(book2.year);
