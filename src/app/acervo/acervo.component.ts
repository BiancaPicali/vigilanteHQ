import { Component, OnInit } from '@angular/core';
import { Acerv } from './acerv/acerv.model';
import { AcervoService } from './acervo.service';

@Component({
  selector: 'app-acervo',
  templateUrl: './acervo.component.html',
  styleUrls: ['./acervo.component.css']
})
export class AcervoComponent implements OnInit {

  acervo: Acerv[];

  constructor(private acervoService: AcervoService) { }

  ngOnInit(): void {
    this.acervo = this.acervoService.acervo();
  }

}
