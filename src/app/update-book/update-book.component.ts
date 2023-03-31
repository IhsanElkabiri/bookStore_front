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
  id:number;
  books : Book = new Book();
  constructor(private route : ActivatedRoute,
    private router : Router,
    private bookService : BookService){}
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).
  subscribe(data => {
    this.books = data;
  }, error => console.log(error));
  }
  onSubmit(){
    this.bookService.updateBook(this.id,this.books).
    subscribe(data => {
      console.log("yeah we go");
      this.goToBookListes();
    }, error => console.log(error));;
  }
  goToBookListes(){
    this.router.navigate(['/book']);
  }





}
