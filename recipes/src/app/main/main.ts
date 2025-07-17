import { Component, Injectable } from '@angular/core';
import { Service } from './service';
import { Router } from '@angular/router';
@Injectable()

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  constructor(private service: Service, public router: Router) { }

  get recipes() {
    return this.service.getRecipes();
  }

  onClickRecipe(id: number): void {
   this.router.navigate([`recipe/${id}`]);
  }
}
