export class Article{

  private _id: number;
  private _titre: string;
  private _contenu: string;
  private _auteur: string;
  private _urlImage: string;
  private _dateCreation: string;


  constructor(id?: number, titre?: string, contenu?: string, auteur?: string,
              urlImage?: string)
  {
    this._id = id;
    this._titre = titre;
    this._contenu = contenu;
    this._auteur = auteur;
    this._urlImage = urlImage;
    var dateCreation = new Date();
    this._dateCreation = dateCreation.getFullYear() + '-' + (dateCreation.getMonth() + 1) + '-' + dateCreation.getDate();
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get contenu(): string {
    return this._contenu;
  }

  set contenu(value: string) {
    this._contenu = value;
  }

  get auteur(): string {
    return this._auteur;
  }

  set auteur(value: string) {
    this._auteur = value;
  }

  get urlImage(): string {
    return this._urlImage;
  }

  set urlImage(value: string) {
    this._urlImage = value;
  }

  get dateCreation(): string {
    return this._dateCreation;
  }

  set dateCreation(value: string) {
    this._dateCreation = value;
  }


}
