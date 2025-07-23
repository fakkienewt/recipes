import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../main/service';

@Component({
  selector: 'app-search-results',
  standalone: false,
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss'
})
export class SearchResults implements OnInit {

  searchResults: any[] = [];

  onClickThe(): void {
    this.router.navigate(['/']);
  }

  onClickRec(recipeId: number, categoryId: number): void {
    // this.categoryId = +(this.route.snapshot.paramMap.get('id') || 0);
    this.router.navigate(['/recipe', categoryId, recipeId]);
  }

  constructor(
    private route: ActivatedRoute,
    private service: Service,
    public router: Router,
  ) { }

  ngOnInit(): void {
    const savedResults = localStorage.getItem('searchResults');
    console.log('111', savedResults);
    this.searchResults = savedResults ? JSON.parse(savedResults) : [];
  }
}