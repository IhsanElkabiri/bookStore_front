import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  books : Book = new Book();
  constructor(private route : ActivatedRoute,
              private router : Router,
              private bookService : BookService){}
  ngOnInit():void {

    const id = this.route.snapshot.params['id'];
    this.bookService.getBookById(id).
  subscribe(books => {
    console.log("yeah we go to it");
    this.books = books;
  }, error => console.log(error));
  }
  updateBook(): void {
    const id = this.route.snapshot.params['id'];
    this.bookService.updateBook(id, this.books).subscribe(data => {
      console.log("yeah we go");
      this.router.navigate(['/book']);
    });
  }

  }


