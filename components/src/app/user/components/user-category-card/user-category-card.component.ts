import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserCategory } from '../../models/user-category';

@Component({
  selector: 'app-user-category-card',
  templateUrl: './user-category-card.component.html',
  styleUrls: ['./user-category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCategoryCardComponent implements OnInit{
  @Input() category?: UserCategory;
  constructor() {}
  ngOnInit(): void {}
}
