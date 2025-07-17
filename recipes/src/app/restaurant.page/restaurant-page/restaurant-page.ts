import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../main/service';

@Component({
  selector: 'app-restaurant-page',
  standalone: false,
  templateUrl: './restaurant-page.html',
  styleUrl: './restaurant-page.scss'
})
export class RestaurantPage implements OnInit {
  id: number;
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private service: Service,
    public router: Router,
  ) { }

  onClickRec(menuId: number): void {
    this.router.navigate([`recipe`, this.id, menuId])
  }

  ngOnInit(): void {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.recipe = this.service.getRecipes().find(r => r.id === this.id);
    console.log(this.recipe);
  }
}
