import { UserCategory } from "./user/models/user-category";

export const userCategory: UserCategory = {
  id: 'category.id',
  name: 'Example category name',
  shortDescription: 'shortDescription',
  description: 'description',
  imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  imageAlt: 'photo'
};


export const userCategories: UserCategory[] = [
  userCategory,
]