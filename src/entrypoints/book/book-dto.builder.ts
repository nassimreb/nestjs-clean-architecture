import { BookDtoModel } from "./book-dto.model";

export class BookDtoBuilder {
  private readonly _bookDto: BookDtoModel;

  constructor() {
    this._bookDto = {
      id: "",
      title: ""
    };
  }

  id(id: string): BookDtoBuilder {
    this._bookDto.id = id;
    return this;
  }

  title(title: string): BookDtoBuilder {
    this._bookDto.title = title;
    return this;
  }

  build(): BookDtoModel {
    return this._bookDto;
  }

}
