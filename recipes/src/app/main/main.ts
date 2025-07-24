import { Component, Injectable } from '@angular/core';
import { Service } from './service';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable()

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

  constructor(
    private service: Service, 
    public router: Router, 
    private route: ActivatedRoute) 
    { }

  id: number;
  all: any;

  get recipes() {
    return this.service.getRecipes();
  }

  onClickAll(): void {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.all = this.service.getRecipes().find(r => r.id === this.id);
  }

  onClickRecipe(id: number): void {
    this.router.navigate([`recipe/${id}`]);
  }
}
