import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../main/service';

@Component({
  selector: 'app-menu-page',
  standalone: false,
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.scss'
})
export class MenuPage implements OnInit {

  menuItem: any;
  categoryId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private service: Service,
    public router: Router,
  ) { }

  get recipes() {
    return this.service.recipes;
  }

  onClickThe(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.categoryId = +this.route.snapshot.paramMap.get('id')!;
    const category = this.service.recipes.find(c => c.id === this.categoryId);
    if (category) {
      const menuId = +this.route.snapshot.paramMap.get('menuId')!;
      if (menuId) {
        this.menuItem = category.menu.find(m => m.id === menuId);
      }
    }
  }
}