import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../main/service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  categoryId: number;
  searchValue: string;
  searchResults: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: Service,
    public router: Router,
  ) { }

  onClickSearch(searchValue: string): void {

    this.searchValue = searchValue;
    this.searchResults = this.performSearch();

    localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
    this.router.navigate(['/search', searchValue]);
  }

  performSearch(): any[] {

    const results: any = [];

    if (!this.searchValue) return results;

    for (const category of this.service.recipes) {
      for (const recipe of category.menu) {
        if (recipe.title.toLowerCase().includes(this.searchValue.toLowerCase())) {
          results.push([category.id, recipe]);
        }
      }
    }
    return results;
  }

  ngOnInit(): void {
    this.categoryId = +this.route.snapshot.paramMap.get('id')!;
  }
}