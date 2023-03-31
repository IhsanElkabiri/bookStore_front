import { BookService } from './../book.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books : Book[];

  constructor(private bookService : BookService,
              private router : Router
    ){}
  ngOnInit(): void {
    this.getBook();
  }
  private getBook(){
    this.bookService.getBookList().subscribe(data => {
      console.log(data)

      this.books = data;
    })
  }
  goToUpdateBook(id:number){
    this.router.navigate(['update-book',id]);
  }
  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(data => {
      console.log(data)
      this.getBook();
    })
  }
}
