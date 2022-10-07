import { ingredientsModel } from "../shared/ingredients.model";

export class recipeModel {
name:string;
discription:string;
imageUrl:string;
ingredients:ingredientsModel[]
constructor(name:string,discription:string,imageUrl:string,ingredients:ingredientsModel[]){
    this.name = name;
    this.discription = discription;
    this.imageUrl= imageUrl,
    this.ingredients = ingredients

}
}