import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cu',
  templateUrl: './cu.component.html',
  styleUrls: ['./cu.component.css']
})
export class CuComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required],
      auteur: [''],
      urlImage: [''],
    });
  }

  ngOnInit() {
  }

}
