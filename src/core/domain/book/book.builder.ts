import { Book } from "./book.model";

export class BookBuilder {
  private readonly _book: Book;

  constructor() {
    this._book = {
      id: "",
      title: ""
    };
  }

  id(id: string): BookBuilder {
    this._book.id = id;
    return this;
  }

  title(title: string): BookBuilder {
    this._book.title = title;
    return this;
  }

  build(): Book {
    return this._book;
  }
}
