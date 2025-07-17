import { Component, Injectable } from '@angular/core';
import { Service } from './service';

@Injectable()

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  constructor(private service: Service) { }
  get recipes() {
    return this.service.getRecipes();
  }
}
