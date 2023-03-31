import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit{
  books : Book = new Book();
  constructor(private bookService : BookService,
    private router : Router){}
  ngOnInit(): void {
  }
  saveBook(){
    this.bookService.createBook(this.books).subscribe(data=>{
      console.log(data)
      this.goToBookListes();
    },
    error =>console.log(error));
  }

  goToBookListes(){
    this.router.navigate(['/book']);
  }
  onSubmit(){
    console.log(this.books);
    this.saveBook();
  }

}
