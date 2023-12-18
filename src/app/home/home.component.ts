import { Component, SimpleChanges } from '@angular/core';
import { HomeRecipeService } from './home-recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
isFavorite = false;
searchParam: any;
id: any;
// recipes: any[] =[];
recipes=[
  {
      "id": 782585,
      "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
      "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716426,
      "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
      "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715497,
      "title": "Berry Banana Breakfast Smoothie",
      "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715415,
      "title": "Red Lentil Soup with Chicken and Turnips",
      "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716406,
      "title": "Asparagus and Pea Soup: Real Convenience Food",
      "image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 644387,
      "title": "Garlicky Kale",
      "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715446,
      "title": "Slow Cooker Beef Stew",
      "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 782601,
      "title": "Red Kidney Bean Jambalaya",
      "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 795751,
      "title": "Chicken Fajita Stuffed Bell Pepper",
      "image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 766453,
      "title": "Hummus and Za'atar",
      "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716627,
      "title": "Easy Homemade Rice and Beans",
      "image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 664147,
      "title": "Tuscan White Bean Soup with Olive Oil and Rosemary",
      "image": "https://spoonacular.com/recipeImages/664147-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 640941,
      "title": "Crunchy Brussels Sprouts Side Dish",
      "image": "https://spoonacular.com/recipeImages/640941-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715495,
      "title": "Turkey Tomato Cheese Pizza",
      "image": "https://spoonacular.com/recipeImages/715495-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 794349,
      "title": "Broccoli and Chickpea Rice Salad",
      "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716381,
      "title": "Nigerian Snail Stew",
      "image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 660306,
      "title": "Slow Cooker: Pork and Garbanzo Beans",
      "image": "https://spoonacular.com/recipeImages/660306-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 756814,
      "title": "Powerhouse Almond Matcha Superfood Smoothie",
      "image": "https://spoonacular.com/recipeImages/756814-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715769,
      "title": "Broccolini Quinoa Pilaf",
      "image": "https://spoonacular.com/recipeImages/715769-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 642129,
      "title": "Easy To Make Spring Rolls",
      "image": "https://spoonacular.com/recipeImages/642129-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 642605,
      "title": "Farro With Mushrooms and Asparagus",
      "image": "https://spoonacular.com/recipeImages/642605-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 636589,
      "title": "Butternut Squash Frittata",
      "image": "https://spoonacular.com/recipeImages/636589-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 646738,
      "title": "Herbivoracious' White Bean and Kale Soup",
      "image": "https://spoonacular.com/recipeImages/646738-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715540,
      "title": "Summer Berry Salad",
      "image": "https://spoonacular.com/recipeImages/715540-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 663559,
      "title": "Tomato and lentil soup",
      "image": "https://spoonacular.com/recipeImages/663559-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 662670,
      "title": "Swiss Chard Wraps",
      "image": "https://spoonacular.com/recipeImages/662670-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 640062,
      "title": "Corn Avocado Salsa",
      "image": "https://spoonacular.com/recipeImages/640062-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715421,
      "title": "Cheesy Chicken Enchilada Quinoa Casserole",
      "image": "https://spoonacular.com/recipeImages/715421-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 648320,
      "title": "Jade Buddha Salmon Tartare",
      "image": "https://spoonacular.com/recipeImages/648320-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716432,
      "title": "Finger Foods: Frittata Muffins",
      "image": "https://spoonacular.com/recipeImages/716432-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 798400,
      "title": "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
      "image": "https://spoonacular.com/recipeImages/798400-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 782600,
      "title": "Quinoa Salad with Vegetables and Cashews",
      "image": "https://spoonacular.com/recipeImages/782600-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 652417,
      "title": "Moroccan chickpea and lentil stew",
      "image": "https://spoonacular.com/recipeImages/652417-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 639535,
      "title": "Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather",
      "image": "https://spoonacular.com/recipeImages/639535-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 729366,
      "title": "Plantain Salad",
      "image": "https://spoonacular.com/recipeImages/729366-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 661925,
      "title": "Strawberry-Mango Quinoa Salad",
      "image": "https://spoonacular.com/recipeImages/661925-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 794538,
      "title": "Almond Joy Protein Shake",
      "image": "https://spoonacular.com/recipeImages/794538-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 649931,
      "title": "Lentil Salad With Vegetables",
      "image": "https://spoonacular.com/recipeImages/649931-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 636787,
      "title": "Caldo Verde - Portuguese Kale Soup",
      "image": "https://spoonacular.com/recipeImages/636787-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 641975,
      "title": "Easy Ginger Beef Broccoli",
      "image": "https://spoonacular.com/recipeImages/641975-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 652423,
      "title": "Moroccan Couscous and Chickpea Salad",
      "image": "https://spoonacular.com/recipeImages/652423-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715447,
      "title": "Easy Vegetable Beef Soup",
      "image": "https://spoonacular.com/recipeImages/715447-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716311,
      "title": "Mango Fried Rice",
      "image": "https://spoonacular.com/recipeImages/716311-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715543,
      "title": "Homemade Guacamole",
      "image": "https://spoonacular.com/recipeImages/715543-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 157344,
      "title": "Spicy Salad with Kidney Beans, Cheddar, and Nuts",
      "image": "https://spoonacular.com/recipeImages/157344-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 658509,
      "title": "Roasted Broccoli with Lemon and Garlic",
      "image": "https://spoonacular.com/recipeImages/658509-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716195,
      "title": "Spicy Indian-Style Hummus",
      "image": "https://spoonacular.com/recipeImages/716195-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716361,
      "title": "Stir Fried Quinoa, Brown Rice and Chicken Breast",
      "image": "https://spoonacular.com/recipeImages/716361-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 765011,
      "title": "Snap Pea and Green Bean Salad with Arugula Pesto",
      "image": "https://spoonacular.com/recipeImages/765011-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 660228,
      "title": "Skinny Kale Basil Pesto",
      "image": "https://spoonacular.com/recipeImages/660228-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716408,
      "title": "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
      "image": "https://spoonacular.com/recipeImages/716408-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 661340,
      "title": "Spinach Salad with Strawberry Vinaigrette",
      "image": "https://spoonacular.com/recipeImages/661340-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 782622,
      "title": "Chocolate Peanut Butter Cinnamon Smoothie",
      "image": "https://spoonacular.com/recipeImages/782622-312x231.png",
      "imageType": "png"
  },
  {
      "id": 715424,
      "title": "The Best Chili",
      "image": "https://spoonacular.com/recipeImages/715424-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 659135,
      "title": "Salmon with roasted vegetables",
      "image": "https://spoonacular.com/recipeImages/659135-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 639851,
      "title": "Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes",
      "image": "https://spoonacular.com/recipeImages/639851-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 664547,
      "title": "Vegetable Dip",
      "image": "https://spoonacular.com/recipeImages/664547-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 633921,
      "title": "Balsamic & Honey Glazed Salmon with Lemony Asparagus",
      "image": "https://spoonacular.com/recipeImages/633921-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 658579,
      "title": "Roasted Endive Salad With Prosciutto, Figs and Pistachios",
      "image": "https://spoonacular.com/recipeImages/658579-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715385,
      "title": "Slow Cooker Baked Potato Soup",
      "image": "https://spoonacular.com/recipeImages/715385-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 641057,
      "title": "Curried Butternut Squash and Apple Soup",
      "image": "https://spoonacular.com/recipeImages/641057-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 655575,
      "title": "Penne Pasta with Broccoli and Cheese",
      "image": "https://spoonacular.com/recipeImages/655575-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 632269,
      "title": "Amaranth and Roast Veggie Salad",
      "image": "https://spoonacular.com/recipeImages/632269-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 637162,
      "title": "Carrot and Cabbage Salad With Coriander+cumin Dry Rub",
      "image": "https://spoonacular.com/recipeImages/637162-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 982371,
      "title": "Instant Pot Quinoa Grain Bowl",
      "image": "https://spoonacular.com/recipeImages/982371-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 1095753,
      "title": "Roasted Cauliflower Detox Bowl with Tahini Sauce",
      "image": "https://spoonacular.com/recipeImages/1095753-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 660405,
      "title": "Smoky Black Bean Soup With Sweet Potato & Kale",
      "image": "https://spoonacular.com/recipeImages/660405-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715523,
      "title": "Chorizo and Beef Quinoa Stuffed Pepper",
      "image": "https://spoonacular.com/recipeImages/715523-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 632252,
      "title": "Alouette® Stuffed Mushroom Caps",
      "image": "https://spoonacular.com/recipeImages/632252-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 639891,
      "title": "Coffee-braised Short Ribs",
      "image": "https://spoonacular.com/recipeImages/639891-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 646651,
      "title": "Herb chicken with sweet potato mash and sautéed broccoli",
      "image": "https://spoonacular.com/recipeImages/646651-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716330,
      "title": "Chicken and Mango Skewer",
      "image": "https://spoonacular.com/recipeImages/716330-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 640318,
      "title": "Crab Salad Stuffed Pita Pockets",
      "image": "https://spoonacular.com/recipeImages/640318-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 642085,
      "title": "Easy Roasted Vegetables",
      "image": "https://spoonacular.com/recipeImages/642085-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716437,
      "title": "Chilled Cucumber Avocado Soup with Yogurt and Kefir",
      "image": "https://spoonacular.com/recipeImages/716437-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 664090,
      "title": "Turkish Chicken Salad with Home-made Cacik Yogurt Sauce",
      "image": "https://spoonacular.com/recipeImages/664090-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 636602,
      "title": "Butternut Squash Soup (In Half An Hour!)",
      "image": "https://spoonacular.com/recipeImages/636602-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716276,
      "title": "Doughnuts",
      "image": "https://spoonacular.com/recipeImages/716276-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 649944,
      "title": "Lentil Mango Salad",
      "image": "https://spoonacular.com/recipeImages/649944-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 646043,
      "title": "Gujarati Dry Mung Bean Curry",
      "image": "https://spoonacular.com/recipeImages/646043-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 634437,
      "title": "Basil Tagliatelle with Roasted Red Bell Pepper Salad",
      "image": "https://spoonacular.com/recipeImages/634437-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 655235,
      "title": "Peanut Butter and Jelly Smoothie",
      "image": "https://spoonacular.com/recipeImages/655235-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 652393,
      "title": "Moosewood Lentil Soup",
      "image": "https://spoonacular.com/recipeImages/652393-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 640828,
      "title": "Crispy Panko and Herb Crusted Salmon",
      "image": "https://spoonacular.com/recipeImages/640828-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 769774,
      "title": "Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)",
      "image": "https://spoonacular.com/recipeImages/769774-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715533,
      "title": "Filet Mignon Soft Tacos",
      "image": "https://spoonacular.com/recipeImages/715533-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 639411,
      "title": "Cilantro Lime Halibut",
      "image": "https://spoonacular.com/recipeImages/639411-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 636228,
      "title": "Broccoli Tartar",
      "image": "https://spoonacular.com/recipeImages/636228-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 661259,
      "title": "Spinach and Gorgonzola Stuffed Flank Steak",
      "image": "https://spoonacular.com/recipeImages/661259-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 664680,
      "title": "Vegetarian Mushroom Shepherd's Pie",
      "image": "https://spoonacular.com/recipeImages/664680-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 715391,
      "title": "Slow Cooker Chicken Taco Soup",
      "image": "https://spoonacular.com/recipeImages/715391-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 636230,
      "title": "Broccoli with cheese soup",
      "image": "https://spoonacular.com/recipeImages/636230-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 632812,
      "title": "Asian Chicken and Broccoli With Chili Garlic Sauce",
      "image": "https://spoonacular.com/recipeImages/632812-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 633942,
      "title": "Balsamic Roasted Vegetables",
      "image": "https://spoonacular.com/recipeImages/633942-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 632347,
      "title": "Ancient Grains Bread",
      "image": "https://spoonacular.com/recipeImages/632347-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 975070,
      "title": "Instant Pot Chicken Taco Soup",
      "image": "https://spoonacular.com/recipeImages/975070-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 649886,
      "title": "Lemony Greek Lentil Soup",
      "image": "https://spoonacular.com/recipeImages/649886-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 659927,
      "title": "Shrimp and Avocado Salad",
      "image": "https://spoonacular.com/recipeImages/659927-312x231.jpg",
      "imageType": "jpg"
  },
  {
      "id": 716217,
      "title": "Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo)",
      "image": "https://spoonacular.com/recipeImages/716217-312x231.jpg",
      "imageType": "jpg"
  }
]
// recipeDictionary: { [key: string]: any } = {};
recipeDictionary: { [key: string]: any }={
  "157344": {
      "recipeDescription": "You can never have too many main course recipes, so give Spicy Salad with Kidney Beans, Cheddar, and Nuts a try. For <b>$4.58 per serving</b>, this recipe <b>covers 38%</b> of your daily requirements of vitamins and minerals. One serving contains <b>719 calories</b>, <b>27g of protein</b>, and <b>49g of fat</b>. This recipe serves 1. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes approximately <b>10 minutes</b>. Head to the store and pick up kidney beans, greens, cheddar cheese, and a few other things to make it today. It is brought to you by spoonacular user <a href=\"/profile/coffeebean\">coffeebean</a>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/spicy-salad-with-kidney-beans-cheddar-and-nuts-1393987\">Spicy Salad with Kidney Beans, Cheddar, and Nuts</a>, <a href=\"https://spoonacular.com/recipes/spicy-salad-with-kidney-beans-cheddar-and-nuts-1264443\">Spicy Salad with Kidney Beans, Cheddar, and Nuts</a>, and <a href=\"https://spoonacular.com/recipes/spicy-salad-with-kidney-beans-cheddar-and-nuts-1200375\">Spicy Salad with Kidney Beans, Cheddar, and Nuts</a>.",
      "recipeTime": 10,
      "recipeLikes": 6
  },
  "632252": {
      "recipeDescription": "You can never have too many hor d'oeuvre recipes, so give Alouette® Stuffed Mushroom Caps a try. Watching your figure? This dairy free, lacto ovo vegetarian, and vegan recipe has <b>30 calories</b>, <b>2g of protein</b>, and <b>0g of fat</b> per serving. This recipe serves 8. For <b>$1.5 per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about <b>45 minutes</b>. A couple people made this recipe, and 11 would say it hit the spot. Head to the store and pick up seasoned bread crumbs, mushroom caps, alouette spinach & artichoke spread, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is great. Try <a href=\"https://spoonacular.com/recipes/stuffed-mushroom-caps-118382\">Stuffed Mushroom Caps</a>, <a href=\"https://spoonacular.com/recipes/stuffed-mushroom-caps-558817\">Stuffed Mushroom Caps</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-white-mushroom-caps-313457\">Stuffed White Mushroom Caps</a> for similar recipes.",
      "recipeTime": 45,
      "recipeLikes": 11
  },
  "632269": {
      "recipeDescription": "Amaranth and Roast Veggie Salad could be just the <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe you've been looking for. This recipe serves 2 and costs $2.47 per serving. This hor d'oeuvre has <b>361 calories</b>, <b>9g of protein</b>, and <b>18g of fat</b> per serving. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe from Foodista requires amaranth, punnet baby tomatoes, bell pepper, and pumpkin. 5 people have tried and liked this recipe. Overall, this recipe earns an <b>outstanding spoonacular score of 95%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/mums-roast-veggie-salad-12573\">Mum’s Roast Veggie Salad</a>, <a href=\"https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1235383\">amaranth yogurt parfait – popped amaranth parfait with fruits</a>, and <a href=\"https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1238997\">amaranth yogurt parfait – popped amaranth parfait with fruits</a>.",
      "recipeTime": 45,
      "recipeLikes": 5
  },
  "632347": {
      "recipeDescription": "The recipe Ancient Grains Bread can be made <b>in roughly 45 minutes</b>. This lacto ovo vegetarian recipe serves 14 and costs <b>83 cents per serving</b>. This bread has <b>287 calories</b>, <b>13g of protein</b>, and <b>3g of fat</b> per serving. This recipe from Foodista requires yeast, honey, vital wheat gluten, and skim milk powder. 6 people have made this recipe and would make it again. Overall, this recipe earns a <b>spectacular spoonacular score of 83%</b>. <a href=\"https://spoonacular.com/recipes/ancient-grains-bread-1351165\">Ancient Grains Bread</a>, <a href=\"https://spoonacular.com/recipes/bread-baking-ancient-grains-141201\">Bread Baking: Ancient Grains</a>, and <a href=\"https://spoonacular.com/recipes/simple-tomato-salad-with-fresh-bread-crumbs-udis-ancient-grains-612489\">Simple Tomato Salad With Fresh Bread Crumbs | Udi’s Ancient Grains</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 6
  },
  "632812": {
      "recipeDescription": "The recipe Asian Chicken and Broccoli With Chili Garlic Sauce could satisfy your Asian craving in approximately <b>45 minutes</b>. One serving contains <b>546 calories</b>, <b>33g of protein</b>, and <b>9g of fat</b>. For <b>$2.42 per serving</b>, this recipe <b>covers 35%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 3 people have tried and liked this recipe. <b>The Super Bowl</b> will be even more special with this recipe. It works well as a rather inexpensive main course. It is a good option if you're following a <b>gluten free and dairy free</b> diet. If you have cornstarch, fish sauce, chili garlic sauce, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns a <b>super spoonacular score of 93%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/asian-chicken-and-broccoli-with-chili-garlic-sauce-530075\">Asian Chicken and Broccoli with Chili Garlic Sauce</a>, <a href=\"https://spoonacular.com/recipes/video-crunchy-asian-fried-chicken-with-garlic-chili-sauce-527792\">{Video} Crunchy Asian Fried Chicken with Garlic Chili Sauce</a>, and <a href=\"https://spoonacular.com/recipes/asian-broccoli-salad-with-tangy-chili-garlic-dressing-733071\">Asian Broccoli Salad with Tangy Chili-Garlic Dressing</a>.",
      "recipeTime": 45,
      "recipeLikes": 3
  },
  "633921": {
      "recipeDescription": "If you want to add more <b>gluten free, dairy free, and pescatarian</b> recipes to your recipe box, Balsamic & Honey Glazed Salmon with Lemony Asparagus might be a recipe you should try. For <b>$4.44 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains approximately <b>25g of protein</b>, <b>14g of fat</b>, and a total of <b>301 calories</b>. This recipe serves 2. 28 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>1 hour</b>. It is brought to you by Foodista. It works well as a pretty expensive main course. Head to the store and pick up juice of lemon, herbs de provence, salmon fillet, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/balsamic-honey-glazed-salmon-with-lemony-asparagus-1501683\">Balsamic & Honey Glazed Salmon with Lemony Asparagus</a>, <a href=\"https://spoonacular.com/recipes/balsamic-honey-glazed-salmon-with-lemony-asparagus-1614063\">Balsamic & Honey Glazed Salmon with Lemony Asparagus</a>, and <a href=\"https://spoonacular.com/recipes/balsamic-honey-glazed-salmon-with-lemony-asparagus-1363909\">Balsamic & Honey Glazed Salmon with Lemony Asparagus</a>.",
      "recipeTime": 60,
      "recipeLikes": 28
  },
  "633942": {
      "recipeDescription": "Balsamic Roasted Vegetables is a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> side dish. One serving contains <b>290 calories</b>, <b>5g of protein</b>, and <b>14g of fat</b>. This recipe serves 6. For <b>$1.91 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires balsamic vinegar, kabocha squash, bulb fennel, and fingerling potatoes. This recipe is liked by 33 foodies and cooks. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/balsamic-roasted-vegetables-1145288\">Balsamic Roasted Vegetables</a>, <a href=\"https://spoonacular.com/recipes/balsamic-roasted-vegetables-1238937\">Balsamic Roasted Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/balsamic-roasted-vegetables-510045\">Balsamic Roasted Vegetables</a>.",
      "recipeTime": 45,
      "recipeLikes": 33
  },
  "634437": {
      "recipeDescription": "Basil Tagliatelle with Roasted Red Bell Pepper Salad might be a good recipe to expand your hor d'oeuvre repertoire. This recipe serves 4 and costs $4.07 per serving. One serving contains <b>200 calories</b>, <b>5g of protein</b>, and <b>12g of fat</b>. A mixture of extra virgin olive oil, horseradish, garlic cloves, and a handful of other ingredients are all it takes to make this recipe so tasty. 4 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. Overall, this recipe earns an <b>outstanding spoonacular score of 93%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/roasted-red-bell-pepper-and-basil-sauce-22150\">Roasted Red Bell Pepper and Basil Sauce</a>, <a href=\"https://spoonacular.com/recipes/roasted-red-bell-pepper-and-fennel-salad-21985\">Roasted Red Bell Pepper And Fennel Salad</a>, and <a href=\"https://spoonacular.com/recipes/roasted-sweet-potato-salad-with-red-bell-pepper-22026\">Roasted Sweet Potato Salad With Red Bell Pepper</a>.",
      "recipeTime": 45,
      "recipeLikes": 4
  },
  "636228": {
      "recipeDescription": "Broccoli Tartar is a side dish that serves 12. One serving contains <b>140 calories</b>, <b>6g of protein</b>, and <b>6g of fat</b>. For <b>$1.06 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 4 foodies and cooks. This recipe from Foodista requires hand blender, colorful tartar on a bed of vegetables. also an touch, chili powder, and parsley. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 84%</b>, which is great. Similar recipes include <a href=\"https://spoonacular.com/recipes/broccoli-tartar-1370837\">Broccoli Tartar</a>, <a href=\"https://spoonacular.com/recipes/rollo-de-salmon-ahumado-con-salsa-tartar-y-lentejas-smoked-salmon-roll-with-tartar-sauce-and-lentils-334769\">Rollo De Salmon Ahumado Con Salsa Tartar Y Lentejas (Smoked Salmon Roll with Tartar Sauce and Lentils)</a>, and <a href=\"https://spoonacular.com/recipes/tartar-sauce-30090\">Tartar Sauce</a>.",
      "recipeTime": 45,
      "recipeLikes": 4
  },
  "636230": {
      "recipeDescription": "Broccoli with cheese soup could be just the <b>lacto ovo vegetarian</b> recipe you've been looking for. This recipe serves 4 and costs 66 cents per serving. One serving contains <b>120 calories</b>, <b>7g of protein</b>, and <b>5g of fat</b>. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. 18 people found this recipe to be delicious and satisfying. Head to the store and pick up broccoli florets, flour, milk, and a few other things to make it today. It is brought to you by Foodista. A few people really liked this side dish. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is great. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/broccoli-cheese-soup-475635\">Broccoli Cheese Soup</a>, <a href=\"https://spoonacular.com/recipes/broccoli-cheese-soup-1056015\">Broccoli Cheese Soup</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-cheese-soup-395199\">Broccoli Cheese Soup</a>.",
      "recipeTime": 45,
      "recipeLikes": 18
  },
  "636589": {
      "recipeDescription": "The recipe Butternut Squash Frittata can be made <b>in approximately 45 minutes</b>. This recipe serves 1. Watching your figure? This gluten free recipe has <b>465 calories</b>, <b>24g of protein</b>, and <b>4g of fat</b> per serving. For <b>$3.4 per serving</b>, this recipe <b>covers 53%</b> of your daily requirements of vitamins and minerals. A few people really liked this main course. This recipe from Foodista requires butternut squash, bell pepper, liquid egg substitute, and non-fat milk. 18 people have tried and liked this recipe. Overall, this recipe earns an <b>awesome spoonacular score of 98%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/butternut-squash-frittata-750335\">Butternut Squash Frittata</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-frittata-1225935\">Butternut Squash Frittata</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-and-quinoa-frittata-1313179\">Butternut Squash and Quinoa Frittata</a>.",
      "recipeTime": 45,
      "recipeLikes": 18
  },
  "636602": {
      "recipeDescription": "Butternut Squash Soup (In Half An Hour!) requires about <b>30 minutes</b> from start to finish. For <b>$1.25 per serving</b>, you get a hor d'oeuvre that serves 8. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>252 calories</b>, <b>9g of protein</b>, and <b>6g of fat</b> per serving. It will be a hit at your <b>Autumn</b> event. 5 people have made this recipe and would make it again. It is brought to you by Foodista. Head to the store and pick up salt and pepper, black-eyed peas, collard greens, and a few other things to make it today. With a spoonacular <b>score of 95%</b>, this dish is great. Try <a href=\"https://spoonacular.com/recipes/half-hour-chili-1336421\">Half-Hour Chili</a>, <a href=\"https://spoonacular.com/recipes/half-hour-chili-1268407\">Half-Hour Chili</a>, and <a href=\"https://spoonacular.com/recipes/half-hour-chili-695480\">Half-Hour Chili</a> for similar recipes.",
      "recipeTime": 30,
      "recipeLikes": 5
  },
  "636787": {
      "recipeDescription": "Caldo Verde - Portuguese Kale Soup takes approximately <b>45 minutes</b> from beginning to end. One portion of this dish contains around <b>20g of protein</b>, <b>10g of fat</b>, and a total of <b>493 calories</b>. For <b>$2.24 per serving</b>, this recipe <b>covers 35%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 13 people were glad they tried this recipe. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. It is brought to you by Foodista. It works well as a main course. It will be a hit at your <b>Autumn</b> event. Head to the store and pick up onion, carrots, pepper flakes, and a few other things to make it today. With a spoonacular <b>score of 92%</b>, this dish is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/portuguese-kale-soup-caldo-verde-499535\">Portuguese Kale Soup (Caldo Verde)</a>, <a href=\"https://spoonacular.com/recipes/caldo-verde-portuguese-kale-soup-1274837\">Caldo Verde - Portuguese Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/caldo-verde-portuguese-kale-soup-598606\">Caldo Verde | Portuguese Kale Soup</a>.",
      "recipeTime": 45,
      "recipeLikes": 13
  },
  "637162": {
      "recipeDescription": "If you want to add more <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipes to your repertoire, Carrot and Cabbage Salad With Coriander+cumin Dry Rub might be a recipe you should try. This recipe serves 1. One portion of this dish contains about <b>6g of protein</b>, <b>10g of fat</b>, and a total of <b>222 calories</b>. For <b>$1.4 per serving</b>, this recipe <b>covers 27%</b> of your daily requirements of vitamins and minerals. 4 people have made this recipe and would make it again. Head to the store and pick up sunflower seeds, cumin seed powder, juice of lime, and a few other things to make it today. It works well as an affordable hor d'oeuvre. From preparation to the plate, this recipe takes roughly <b>25 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns a <b>super spoonacular score of 96%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1230725\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>, <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1350633\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>, and <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1253443\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>.",
      "recipeTime": 25,
      "recipeLikes": 4
  },
  "639411": {
      "recipeDescription": "Cilantro Lime Halibut might be a good recipe to expand your main course recipe box. This recipe serves 2. One portion of this dish contains roughly <b>44g of protein</b>, <b>22g of fat</b>, and a total of <b>422 calories</b>. For <b>$8.81 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires chicken stock, juice of lime, green onions, and salt and pepper. 19 people found this recipe to be delicious and satisfying. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and primal</b> diet. Overall, this recipe earns an <b>outstanding spoonacular score of 95%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/cilantro-ginger-halibut-1281969\">Cilantro-Ginger Halibut</a>, <a href=\"https://spoonacular.com/recipes/cilantro-ginger-halibut-86400\">Cilantro-Ginger Halibut</a>, and <a href=\"https://spoonacular.com/recipes/halibut-with-citrus-and-cilantro-3296\">Halibut With Citrus And Cilantro</a>.",
      "recipeTime": 45,
      "recipeLikes": 19
  },
  "639535": {
      "recipeDescription": "If you have about <b>45 minutes</b> to spend in the kitchen, Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather might be an amazing <b>dairy free, lacto ovo vegetarian, and vegan</b> recipe to try. This main course has <b>570 calories</b>, <b>15g of protein</b>, and <b>18g of fat</b> per serving. This recipe serves 2 and costs $2.79 per serving. 41 person have made this recipe and would make it again. Head to the store and pick up parsley, paprika, israeli couscous, and a few other things to make it today. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is spectacular. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/winter-fruit-salad-cool-food-for-cold-weather-580660\">Winter Fruit Salad: Cool Food for Cold Weather</a>, <a href=\"https://spoonacular.com/recipes/citrusy-couscous-salad-with-olives-698723\">Citrusy Couscous Salad with Olives</a>, and <a href=\"https://spoonacular.com/recipes/cold-weather-venison-chili-1328533\">Cold-Weather Venison Chili</a>.",
      "recipeTime": 45,
      "recipeLikes": 41
  },
  "639851": {
      "recipeDescription": "If you want to add more <b>gluten free, dairy free, and whole 30</b> recipes to your collection, Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes might be a recipe you should try. This recipe serves 2 and costs $6.26 per serving. This main course has <b>733 calories</b>, <b>56g of protein</b>, and <b>40g of fat</b> per serving. This recipe is liked by 14 foodies and cooks. Head to the store and pick up lemon juice, parsley leaves, parsley, and a few other things to make it today. It is perfect for <b>Thanksgiving</b>. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is awesome. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cod-stew-with-chorizo-leeks-potatoes-2655\">Cod Stew With Chorizo, Leeks & Potatoes</a>, <a href=\"https://spoonacular.com/recipes/tuna-steaks-in-spicy-tomato-sauce-with-mashed-potatoes-1204417\">Tuna Steaks In Spicy Tomato Sauce With Mashed Potatoes</a>, and <a href=\"https://spoonacular.com/recipes/tuna-steaks-in-spicy-tomato-sauce-with-mashed-potatoes-668002\">Tuna Steaks In Spicy Tomato Sauce With Mashed Potatoes</a>.",
      "recipeTime": 45,
      "recipeLikes": 14
  },
  "639891": {
      "recipeDescription": "Need a <b>gluten free and dairy free main course</b>? Coffee-braised Short Ribs could be a great recipe to try. One portion of this dish contains approximately <b>74g of protein</b>, <b>42g of fat</b>, and a total of <b>877 calories</b>. For <b>$7.05 per serving</b>, this recipe <b>covers 64%</b> of your daily requirements of vitamins and minerals. This recipe serves 5. 6 people have made this recipe and would make it again. A mixture of strong freshly coffee, short, brown sugar, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 90%</b>, which is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/coffee-braised-short-ribs-492600\">Coffee-Braised Short Ribs</a>, <a href=\"https://spoonacular.com/recipes/coffee-braised-short-ribs-1547523\">Coffee-braised Short Ribs</a>, and <a href=\"https://spoonacular.com/recipes/coffee-braised-short-ribs-386092\">Coffee-Braised Short Ribs</a>.",
      "recipeTime": 45,
      "recipeLikes": 6
  },
  "640062": {
      "recipeDescription": "Corn Avocado Salsa might be just the hor d'oeuvre you are searching for. For <b>$1.31 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains roughly <b>5g of protein</b>, <b>16g of fat</b>, and a total of <b>237 calories</b>. This recipe serves 2. 44 people have made this recipe and would make it again. This recipe from Foodista requires avocado, balsamic vinegar, cumin, and garlic. A few people really liked this Mexican dish. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>25 minutes</b>. With a spoonacular <b>score of 97%</b>, this dish is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/avocado-corn-salsa-1329607\">Avocado Corn Salsa</a>, <a href=\"https://spoonacular.com/recipes/avocado-corn-salsa-173978\">Avocado-Corn Salsa</a>, and <a href=\"https://spoonacular.com/recipes/avocado-corn-salsa-1305913\">Avocado-Corn Salsa</a>.",
      "recipeTime": 25,
      "recipeLikes": 44
  },
  "640318": {
      "recipeDescription": "Crab Salad Stuffed Pita Pockets takes roughly <b>25 minutes</b> from beginning to end. One serving contains <b>418 calories</b>, <b>39g of protein</b>, and <b>6g of fat</b>. For <b>$5.9 per serving</b>, this recipe <b>covers 52%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. 8 people found this recipe to be yummy and satisfying. If you have wholewheat pita breads, crabmeat, coriander leaves, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a <b>dairy free and pescatarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 80%</b>. This score is good. Try <a href=\"https://spoonacular.com/recipes/crab-salad-in-pita-pockets-698353\">Crab Salad in Pita Pockets</a>, <a href=\"https://spoonacular.com/recipes/stuff-it-cobb-salad-stuffed-pita-pockets-510066\">Stuff It {: Cobb Salad Stuffed Pita Pockets}</a>, and <a href=\"https://spoonacular.com/recipes/zucchini-salad-pita-pockets-1095849\">Zucchini Salad Pita Pockets</a> for similar recipes.",
      "recipeTime": 25,
      "recipeLikes": 8
  },
  "640828": {
      "recipeDescription": "Crispy Panko and Herb Crusted Salmon takes around <b>45 minutes</b> from beginning to end. For <b>$4.16 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. One serving contains <b>390 calories</b>, <b>33g of protein</b>, and <b>22g of fat</b>. This recipe from Foodista has 4 fans. If you have lemon zest, extra virgin olive oil, bell pepper, and a few other ingredients on hand, you can make it. It works well as a main course. It is a good option if you're following a <b>dairy free and pescatarian</b> diet. With a spoonacular <b>score of 93%</b>, this dish is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/dijon-and-herb-panko-crusted-halibut-497157\">Dijon and Herb Panko-Crusted Halibut</a>, <a href=\"https://spoonacular.com/recipes/mustard-herb-panko-crusted-chicken-breasts-497256\">Mustard-Herb Panko Crusted Chicken Breasts</a>, and <a href=\"https://spoonacular.com/recipes/panko-herb-crusted-rack-of-lamb-with-vegetables-628109\">Panko Herb Crusted Rack of Lamb with Vegetables</a>.",
      "recipeTime": 45,
      "recipeLikes": 4
  },
  "640941": {
      "recipeDescription": "The recipe Crunchy Brussels Sprouts Side Dish can be made <b>in about 30 minutes</b>. For <b>$1.69 per serving</b>, you get a side dish that serves 4. One serving contains <b>232 calories</b>, <b>8g of protein</b>, and <b>16g of fat</b>. This recipe is liked by 26 foodies and cooks. It is brought to you by Foodista. A mixture of red wine vinegar, walnuts, dijon mustard, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/side-dish-sundays-cacio-e-pepe-brussels-sprouts-1146819\">Side Dish Sundays: Cacio e Pepe Brussels Sprouts</a>, <a href=\"https://spoonacular.com/recipes/easy-side-dish-roasted-brussels-sprouts-and-grapes-474168\">Easy Side Dish – Roasted Brussels Sprouts and Grapes</a>, and <a href=\"https://spoonacular.com/recipes/side-dish-sundays-cacio-e-pepe-brussels-sprouts-1385177\">Side Dish Sundays: Cacio e Pepe Brussels Sprouts</a>.",
      "recipeTime": 30,
      "recipeLikes": 26
  },
  "641057": {
      "recipeDescription": "If you want to add more <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipes to your recipe box, Curried Butternut Squash and Apple Soup might be a recipe you should try. For <b>$1.41 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. One serving contains <b>134 calories</b>, <b>7g of protein</b>, and <b>3g of fat</b>. A mixture of a squirt sriracha, butternut squash, apple, and a handful of other ingredients are all it takes to make this recipe so yummy. It is perfect for <b>Autumn</b>. It works well as a hor d'oeuvre. This recipe from Foodista has 9 fans. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns an <b>awesome spoonacular score of 89%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/curried-apple-butternut-squash-soup-620121\">Curried Apple + Butternut Squash Soup</a>, <a href=\"https://spoonacular.com/recipes/curried-butternut-squash-and-apple-soup-836936\">Curried Butternut Squash and Apple Soup</a>, and <a href=\"https://spoonacular.com/recipes/curried-butternut-squash-apple-soup-crock-pot-94742\">Curried Butternut Squash & Apple Soup - Crock Pot</a>.",
      "recipeTime": 45,
      "recipeLikes": 9
  },
  "641975": {
      "recipeDescription": "The recipe Easy Ginger Beef Broccoli can be made <b>in approximately 45 minutes</b>. This dairy free recipe serves 4 and costs <b>$2.14 per serving</b>. One portion of this dish contains about <b>49g of protein</b>, <b>12g of fat</b>, and a total of <b>386 calories</b>. It works well as a rather cheap main course. Head to the store and pick up sugar, chicken broth, garlic, and a few other things to make it today. 23 people found this recipe to be tasty and satisfying. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/easy-ginger-beef-broccoli-1215371\">Easy Ginger Beef Broccoli</a>, <a href=\"https://spoonacular.com/recipes/easy-ginger-beef-broccoli-1229745\">Easy Ginger Beef Broccoli</a>, and <a href=\"https://spoonacular.com/recipes/easy-ginger-beef-broccoli-1228803\">Easy Ginger Beef Broccoli</a>.",
      "recipeTime": 45,
      "recipeLikes": 23
  },
  "642085": {
      "recipeDescription": "Easy Roasted Vegetables is a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> recipe with 4 servings. One portion of this dish contains about <b>9g of protein</b>, <b>4g of fat</b>, and a total of <b>358 calories</b>. For <b>$1.28 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. 3 people have tried and liked this recipe. This recipe from Foodista requires butternut squash, paprika, salt & pepper, and olive oil. It works well as a side dish. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/easy-roasted-vegetables-379674\">Easy Roasted Vegetables</a>, <a href=\"https://spoonacular.com/recipes/easy-roasted-vegetables-1378833\">Easy Roasted Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/easy-roasted-summer-vegetables-590293\">Easy Roasted Summer Vegetables</a>.",
      "recipeTime": 45,
      "recipeLikes": 3
  },
  "642129": {
      "recipeDescription": "If you want to add more <b>gluten free, dairy free, and pescatarian</b> recipes to your collection, Easy To Make Spring Rolls might be a recipe you should try. For <b>$3.78 per serving</b>, you get a hor d'oeuvre that serves 4. One serving contains <b>162 calories</b>, <b>13g of protein</b>, and <b>2g of fat</b>. 22 people found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It can be enjoyed any time, but it is especially good for <b>Spring</b>. This recipe from Foodista requires mint leaves, garlic, chili pepper, and rice vinegar. This recipe is typical of Vietnamese cuisine. Overall, this recipe earns a <b>tremendous spoonacular score of 88%</b>. <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1262689\">Easy To Make Spring Rolls</a>, <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1218889\">Easy To Make Spring Rolls</a>, and <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1531113\">Easy To Make Spring Rolls</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 22
  },
  "642605": {
      "recipeDescription": "Farro With Mushrooms and Asparagus is a <b>dairy free and lacto ovo vegetarian</b> recipe with 4 servings. One serving contains <b>365 calories</b>, <b>12g of protein</b>, and <b>9g of fat</b>. For <b>$3.94 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 47 foodies and cooks. From preparation to the plate, this recipe takes around <b>1 hour and 15 minutes</b>. It works well as a side dish. If you have asparagus, garlic, porcini mushrooms, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. With a spoonacular <b>score of 98%</b>, this dish is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/farro-risotto-with-wild-mushrooms-and-asparagus-495316\">Farro Risotto with Wild Mushrooms and Asparagus</a>, <a href=\"https://spoonacular.com/recipes/farro-with-asparagus-hazelnuts-and-kale-topped-with-roasted-mushrooms-298005\">Farro with Asparagus, Hazelnuts and Kale Topped with Roasted Mushrooms</a>, and <a href=\"https://spoonacular.com/recipes/farro-and-porcini-mushrooms-farro-con-funghi-40485\">Farro And Porcini Mushrooms (farro Con Funghi)</a>.",
      "recipeTime": 75,
      "recipeLikes": 47
  },
  "644387": {
      "recipeDescription": "Garlicky Kale requires approximately <b>45 minutes</b> from start to finish. This side dish has <b>170 calories</b>, <b>2g of protein</b>, and <b>15g of fat</b> per serving. This recipe serves 2. For <b>69 cents per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 99%</b>, this dish is outstanding. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale</a>, <a href=\"https://spoonacular.com/recipes/garlicky-kale-1267347\">Garlicky Kale</a>, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-1584523\">Garlicky Kale</a> for similar recipes.",
      "recipeTime": 45,
      "recipeLikes": 19
  },
  "646043": {
      "recipeDescription": "Gujarati Dry Mung Bean Curry takes about <b>45 minutes</b> from beginning to end. This main course has <b>376 calories</b>, <b>20g of protein</b>, and <b>5g of fat</b> per serving. This recipe serves 4 and costs $1.64 per serving. A mixture of baking powder, cumin seeds, garlic, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe from Foodista has 3 fans. This recipe is typical of Indian cuisine. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is outstanding. <a href=\"https://spoonacular.com/recipes/gujarati-dry-mung-bean-curry-1353775\">Gujarati Dry Mung Bean Curry</a>, <a href=\"https://spoonacular.com/recipes/gujarati-dry-mung-bean-curry-1520647\">Gujarati Dry Mung Bean Curry</a>, and <a href=\"https://spoonacular.com/recipes/uncle-bills-mung-bean-curry-1283881\">Uncle Bill's Mung Bean Curry</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 3
  },
  "646651": {
      "recipeDescription": "Herb chicken with sweet potato mash and sautéed broccoli might be a good recipe to expand your main course recipe box. One portion of this dish contains roughly <b>47g of protein</b>, <b>25g of fat</b>, and a total of <b>710 calories</b>. For <b>$3.13 per serving</b>, this recipe <b>covers 50%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 9 people have made this recipe and would make it again. Head to the store and pick up broccoli, butter, pepper and salt, and a few other things to make it today. It is a good option if you're following a <b>gluten free</b> diet. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is awesome. Try <a href=\"https://spoonacular.com/recipes/herb-chicken-with-sweet-potato-mash-and-sauted-broccoli-1263701\">Herb chicken with sweet potato mash and sautéed broccoli</a>, <a href=\"https://spoonacular.com/recipes/herb-chicken-with-sweet-potato-mash-and-sauted-broccoli-1516743\">Herb chicken with sweet potato mash and sautéed broccoli</a>, and <a href=\"https://spoonacular.com/recipes/herb-chicken-with-sweet-potato-mash-and-sauted-broccoli-1337501\">Herb chicken with sweet potato mash and sautéed broccoli</a> for similar recipes.",
      "recipeTime": 45,
      "recipeLikes": 9
  },
  "646738": {
      "recipeDescription": "Herbivoracious' White Bean and Kale Soup might be a good recipe to expand your main course recipe box. One serving contains <b>332 calories</b>, <b>17g of protein</b>, and <b>10g of fat</b>. This recipe serves 6 and costs 78 cents per serving. 10 people were impressed by this recipe. It will be a hit at your <b>Autumn</b> event. Head to the store and pick up juice of lemon, carrot, dinosaur kale, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is tremendous. <a href=\"https://spoonacular.com/recipes/kale-and-white-bean-soup-1214347\">Kale And White Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/white-bean-and-kale-soup-15247\">White Bean And Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/white-bean-kale-soup-1571259\">White Bean Kale Soup</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 10
  },
  "648320": {
      "recipeDescription": "Need a <b>gluten free, dairy free, paleolithic, and primal main course</b>? Jade Buddha Salmon Tartare could be an outstanding recipe to try. This recipe serves 2 and costs $6.96 per serving. One serving contains <b>382 calories</b>, <b>34g of protein</b>, and <b>25g of fat</b>. If you have olive oil to coat, green onion, salt and pepper, and a few other ingredients on hand, you can make it. 28 people were glad they tried this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns an <b>awesome spoonacular score of 97%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/salmon-tartare-40385\">Salmon Tartare</a>, <a href=\"https://spoonacular.com/recipes/salmon-tartare-1281973\">Salmon Tartare</a>, and <a href=\"https://spoonacular.com/recipes/salmon-tartare-40377\">Salmon Tartare</a>.",
      "recipeTime": 45,
      "recipeLikes": 28
  },
  "649886": {
      "recipeDescription": "Lemony Greek Lentil Soup is a Mediterranean main course. One serving contains <b>368 calories</b>, <b>23g of protein</b>, and <b>4g of fat</b>. For <b>88 cents per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. It is perfect for <b>Autumn</b>. 2 people were impressed by this recipe. A mixture of brown lentils, , pepper, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/lemony-greek-lentil-soup-1218953\">Lemony Greek Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lemony-lentil-soup-1335677\">Lemony Lentil Soup</a>, and <a href=\"https://spoonacular.com/recipes/lemony-lentil-soup-961948\">Lemony Lentil Soup</a>.",
      "recipeTime": 45,
      "recipeLikes": 2
  },
  "649931": {
      "recipeDescription": "Lentil Salad With Vegetables might be a good recipe to expand your side dish repertoire. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 4 and costs <b>$1.2 per serving</b>. One serving contains <b>320 calories</b>, <b>15g of protein</b>, and <b>12g of fat</b>. Head to the store and pick up tomatoes, rosemary, red wine vinegar, and a few other things to make it today. This recipe from Foodista has 7 fans. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 97%</b>, which is awesome. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/lentil-salad-with-vegetables-1400649\">Lentil Salad With Vegetables</a>, <a href=\"https://spoonacular.com/recipes/lentil-salad-with-summer-vegetables-1019650\">Lentil Salad with Summer Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/puy-lentil-salad-with-caramelized-vegetables-33731\">Puy Lentil Salad With Caramelized Vegetables</a>.",
      "recipeTime": 45,
      "recipeLikes": 7
  },
  "649944": {
      "recipeDescription": "Lentil Mango Salad is a main course that serves 4. One serving contains <b>253 calories</b>, <b>12g of protein</b>, and <b>6g of fat</b>. For <b>$1.59 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 3 people found this recipe to be tasty and satisfying. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Head to the store and pick up cilantro, white wine vinegar, onion, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 94%</b>, which is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/lentil-burger-with-mango-salsa-509088\">LENTIL BURGER with Mango Salsa</a>, <a href=\"https://spoonacular.com/recipes/plumcot-orange-lentil-salad-fave-five-friday-lovely-lentil-dishes-529696\">Plumcot, Orange & Lentil Salad… & Fave Five Friday: Lovely Lentil Dishes</a>, and <a href=\"https://spoonacular.com/recipes/simple-coconut-quinoa-and-lentil-curry-with-lime-mango-705061\">Simple Coconut Quinoan and Lentil Curry with Lime Mango</a>.",
      "recipeTime": 45,
      "recipeLikes": 3
  },
  "652393": {
      "recipeDescription": "Moosewood Lentil Soup might be a good recipe to expand your main course recipe box. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>74 cents per serving</b>. One portion of this dish contains roughly <b>26g of protein</b>, <b>4g of fat</b>, and a total of <b>396 calories</b>. A mixture of pepper, lentils, salt, and a handful of other ingredients are all it takes to make this recipe so yummy. 2 people found this recipe to be flavorful and satisfying. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/moosewood-lentil-soup-1319699\">Moosewood Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/moosewood-mushroom-barley-soup-143909\">Moosewood Mushroom Barley Soup!</a>, and <a href=\"https://spoonacular.com/recipes/hungarian-mushroom-soup-from-the-moosewood-cookbook-143242\">Hungarian Mushroom Soup, from the Moosewood Cookbook</a>.",
      "recipeTime": 45,
      "recipeLikes": 2
  },
  "652417": {
      "recipeDescription": "The recipe Moroccan chickpean and lentil stew can be made <b>in roughly 30 minutes</b>. This dairy free, lacto ovo vegetarian, and vegan recipe serves 3 and costs <b>$1.26 per serving</b>. This main course has <b>466 calories</b>, <b>20g of protein</b>, and <b>7g of fat</b> per serving. This recipe is liked by 11 foodies and cooks. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is brought to you by Foodista. If you have olive oil, salt and pepper, tomato paste, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/moroccan-chickpea-and-lentil-stew-1376773\">Moroccan chickpean and lentil stew</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-chickpea-lentil-moroccan-stew-523871\">Butternut Squash, Chickpea & Lentil Moroccan Stew</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-chickpea-lentil-moroccan-stew-1379167\">Butternut Squash, Chickpea & Lentil Moroccan Stew</a>.",
      "recipeTime": 30,
      "recipeLikes": 11
  },
  "652423": {
      "recipeDescription": "You can never have too many side dish recipes, so give Moroccan Couscous and Chickpea Salad a try. This recipe serves 6 and costs $1.87 per serving. One serving contains <b>483 calories</b>, <b>14g of protein</b>, and <b>25g of fat</b>. 72 people were glad they tried this recipe. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Head to the store and pick up cinnamon, chickpeas, bell pepper, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a <b>dairy free, lacto ovo vegetarian, and vegan</b> diet. With a spoonacular <b>score of 97%</b>, this dish is excellent. Try <a href=\"https://spoonacular.com/recipes/moroccan-couscous-and-chickpea-salad-1380255\">Moroccan Couscous and Chickpea Salad</a>, <a href=\"https://spoonacular.com/recipes/moroccan-chickpea-couscous-1427491\">Moroccan Chickpea Couscous</a>, and <a href=\"https://spoonacular.com/recipes/moroccan-tomato-chickpea-soup-with-couscous-222144\">Moroccan tomato & chickpea soup with couscous</a> for similar recipes.",
      "recipeTime": 45,
      "recipeLikes": 72
  },
  "655235": {
      "recipeDescription": "Peanut Butter and Jelly Smoothie might be a good recipe to expand your breakfast repertoire. Watching your figure? This gluten free, dairy free, and fodmap friendly recipe has <b>779 calories</b>, <b>20g of protein</b>, and <b>36g of fat</b> per serving. For <b>$1.45 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. 58 people were impressed by this recipe. This recipe from Foodista requires almond milk, bananas, peanut butter, and strawberries. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is super. Try <a href=\"https://spoonacular.com/recipes/peanut-butter-and-jelly-smoothie-609137\">Peanut Butter and Jelly Smoothie</a>, <a href=\"https://spoonacular.com/recipes/peanut-butter-and-jelly-smoothie-1419673\">Peanut Butter and Jelly Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/peanut-butter-and-jelly-smoothie-1201725\">Peanut Butter and Jelly Smoothie</a> for similar recipes.",
      "recipeTime": 45,
      "recipeLikes": 58
  },
  "655575": {
      "recipeDescription": "Penne Pasta with Broccoli and Cheese might be just the main course you are searching for. This recipe serves 4 and costs 66 cents per serving. One portion of this dish contains roughly <b>13g of protein</b>, <b>2g of fat</b>, and a total of <b>269 calories</b>. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Not a lot of people made this recipe, and 3 would say it hit the spot. It is brought to you by Foodista. If you have ground pepper, water, chicken broth, and a few other ingredients on hand, you can make it. With a spoonacular <b>score of 94%</b>, this dish is awesome. Try <a href=\"https://spoonacular.com/recipes/penne-pasta-with-broccoli-and-cheese-1403877\">Penne Pasta with Broccoli and Cheese</a>, <a href=\"https://spoonacular.com/recipes/penne-pasta-with-broccoli-and-cheese-1400035\">Penne Pasta with Broccoli and Cheese</a>, and <a href=\"https://spoonacular.com/recipes/cheesy-broccoli-penne-pasta-547454\">Cheesy Broccoli Penne Pasta</a> for similar recipes.",
      "recipeTime": 45,
      "recipeLikes": 3
  },
  "658509": {
      "recipeDescription": "Roasted Broccoli with Lemon and Garlic is a side dish that serves 4. One portion of this dish contains approximately <b>3g of protein</b>, <b>2g of fat</b>, and a total of <b>58 calories</b>. For <b>30 cents per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. If you have lemon juice, ground pepper, salt, and a few other ingredients on hand, you can make it. 11 person have tried and liked this recipe. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is awesome. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/roasted-broccoli-with-lemon-and-garlic-1345079\">Roasted Broccoli with Lemon and Garlic</a>, <a href=\"https://spoonacular.com/recipes/roasted-broccoli-with-lemon-and-garlic-1337497\">Roasted Broccoli with Lemon and Garlic</a>, and <a href=\"https://spoonacular.com/recipes/roasted-garlic-lemon-broccoli-110090\">Roasted Garlic Lemon Broccoli</a>.",
      "recipeTime": 45,
      "recipeLikes": 11
  },
  "658579": {
      "recipeDescription": "Roasted Endive Salad With Prosciutto, Figs and Pistachios might be just the main course you are searching for. One serving contains <b>388 calories</b>, <b>14g of protein</b>, and <b>10g of fat</b>. For <b>$3.66 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. It is brought to you by Foodista. 6 people were glad they tried this recipe. If you have pistachio nuts, olive oil, figs, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and primal</b> diet. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns an <b>outstanding spoonacular score of 96%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/frise-salad-with-prosciutto-roasted-figs-and-walnuts-96484\">Frisée Salad with Prosciutto, Roasted Figs, and Walnuts</a>, <a href=\"https://spoonacular.com/recipes/chicory-and-endive-salad-with-spiced-pistachios-12783\">Chicory and Endive Salad with Spiced Pistachios</a>, and <a href=\"https://spoonacular.com/recipes/prosciutto-roasted-figs-130081\">Prosciutto Roasted Figs</a>.",
      "recipeTime": 45,
      "recipeLikes": 6
  },
  "659135": {
      "recipeDescription": "Salmon with roasted vegetables takes approximately <b>45 minutes</b> from beginning to end. For <b>$5.2 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. One serving contains <b>496 calories</b>, <b>39g of protein</b>, and <b>18g of fat</b>. Head to the store and pick up lemon juice, salt, carrot, and a few other things to make it today. Not a lot of people made this recipe, and 7 would say it hit the spot. It works well as a main course. It is a good option if you're following a <b>gluten free, dairy free, whole 30, and pescatarian</b> diet. It is brought to you by Foodista. Overall, this recipe earns a <b>great spoonacular score of 94%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/roasted-salmon-vegetables-1312689\">Roasted Salmon & Vegetables</a>, <a href=\"https://spoonacular.com/recipes/roasted-salmon-vegetables-36765\">Roasted Salmon & Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/salmon-with-roasted-vegetables-1333407\">Salmon with roasted vegetables</a>.",
      "recipeTime": 45,
      "recipeLikes": 7
  },
  "659927": {
      "recipeDescription": "Need a <b>gluten free, dairy free, and pescatarian main course</b>? Shrimp and Avocado Salad could be an awesome recipe to try. This recipe serves 4 and costs $11.57 per serving. One portion of this dish contains about <b>34g of protein</b>, <b>37g of fat</b>, and a total of <b>639 calories</b>. From preparation to the plate, this recipe takes about <b>45 minutes</b>. This recipe is liked by 8 foodies and cooks. This recipe from Foodista requires the shrimp, salt and pepper, garlic cloves, and the dressing. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is outstanding. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-584558\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>, <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-1236119\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>, and <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-1219445\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>.",
      "recipeTime": 45,
      "recipeLikes": 8
  },
  "660228": {
      "recipeDescription": "Skinny Kale Basil Pesto requires about <b>45 minutes</b> from start to finish. For <b>$1.06 per serving</b>, you get a condiment that serves 3. Watching your figure? This gluten free recipe has <b>81 calories</b>, <b>4g of protein</b>, and <b>5g of fat</b> per serving. A few people made this recipe, and 10 would say it hit the spot. It is brought to you by Foodista. A mixture of parmesan cheese, olive oil, walnuts, and a handful of other ingredients are all it takes to make this recipe so delicious. With a spoonacular <b>score of 97%</b>, this dish is great. <a href=\"https://spoonacular.com/recipes/kale-basil-mint-parsley-pesto-1018918\">Kale Basil Mint Parsley Pesto</a>, <a href=\"https://spoonacular.com/recipes/kale-basil-mint-parsley-pesto-1353273\">Kale Basil Mint Parsley Pesto</a>, and <a href=\"https://spoonacular.com/recipes/kale-spinach-and-basil-pesto-baked-pasta-1099896\">Kale, Spinach and Basil Pesto Baked Pasta</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 10
  },
  "660306": {
      "recipeDescription": "Slow Cooker: Pork and Garbanzo Beans takes approximately <b>45 minutes</b> from beginning to end. This recipe serves 6. This main course has <b>587 calories</b>, <b>66g of protein</b>, and <b>14g of fat</b> per serving. For <b>$2.99 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up water *2, cumin, pork should roast, and a few other things to make it today. This recipe is liked by 22 foodies and cooks. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free and dairy free</b> diet. With a spoonacular <b>score of 96%</b>, this dish is outstanding. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-619424\">Slow Cooker Pork and Beans</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-1242889\">Slow Cooker Pork and Beans</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-244959\">Slow Cooker Pork and Beans</a>.",
      "recipeTime": 45,
      "recipeLikes": 22
  },
  "660405": {
      "recipeDescription": "You can never have too many main course recipes, so give Smoky Black Bean Soup With Sweet Potato & Kale a try. One serving contains <b>555 calories</b>, <b>23g of protein</b>, and <b>7g of fat</b>. This recipe serves 6. For <b>$2.62 per serving</b>, this recipe <b>covers 41%</b> of your daily requirements of vitamins and minerals. 5 people have tried and liked this recipe. This recipe from Foodista requires chicken broth, onion, black beans, and salt & pepper. From preparation to the plate, this recipe takes around <b>10 hours and 30 minutes</b>. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you're following a <b>gluten free, dairy free, and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-524599\">Smoky Sweet Potato and Black Bean Tacos</a>, <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-1316245\">Smoky Sweet Potato and Black Bean Tacos</a>, and <a href=\"https://spoonacular.com/recipes/sweet-and-smoky-sriracha-black-bean-soup-557795\">Sweet and Smoky Sriracha Black Bean Soup</a>.",
      "recipeTime": 630,
      "recipeLikes": 5
  },
  "661259": {
      "recipeDescription": "Spinach and Gorgonzola Stuffed Flank Steak might be just the main course you are searching for. For <b>$4.27 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains approximately <b>47g of protein</b>, <b>28g of fat</b>, and a total of <b>523 calories</b>. This recipe serves 4. 9 people found this recipe to be tasty and satisfying. It is perfect for <b>valentin day</b>. If you have gorgonzola, olive oil, shallot, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/bruce-aidells-spinach-and-gorgonzola-stuffed-flank-steak-202812\">Bruce Aidells' Spinach and Gorgonzola-Stuffed Flank Steak</a>, <a href=\"https://spoonacular.com/recipes/spinach-stuffed-flank-steak-19875\">Spinach-stuffed Flank Steak</a>, and <a href=\"https://spoonacular.com/recipes/spinach-and-carrot-stuffed-flank-steak-156209\">Spinach and Carrot Stuffed Flank Steak</a>.",
      "recipeTime": 45,
      "recipeLikes": 9
  },
  "661340": {
      "recipeDescription": "Need a <b>gluten free and primal main course</b>? Spinach Salad with Strawberry Vinaigrette could be a great recipe to try. This recipe makes 1 servings with <b>322 calories</b>, <b>22g of protein</b>, and <b>13g of fat</b> each. For <b>$3.39 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. A mixture of water, balsamic vinegar, ground pepper, and a handful of other ingredients are all it takes to make this recipe so delicious. It will be a hit at your <b>Mother's Day</b> event. 15 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/strawberry-avocado-spinach-salad-with-strawberry-vinaigrette-583232\">Strawberry Avocado Spinach Salad with Strawberry Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/strawberry-avocado-spinach-salad-with-strawberry-vinaigrette-1231959\">Strawberry Avocado Spinach Salad with Strawberry Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/spinach-strawberry-salad-with-strawberry-vinaigrette-1296303\">Spinach Strawberry Salad with Strawberry Vinaigrette</a>.",
      "recipeTime": 45,
      "recipeLikes": 15
  },
  "661925": {
      "recipeDescription": "Need a <b>gluten free and lacto ovo vegetarian hor d'oeuvre</b>? Strawberry-Mango Quinoa Salad could be an awesome recipe to try. This recipe serves 4. One serving contains <b>354 calories</b>, <b>8g of protein</b>, and <b>17g of fat</b>. For <b>$1.87 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. 41 person were impressed by this recipe. This recipe from Foodista requires cucumber, cream, mango, and strawberries. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/strawberry-mango-quinoa-salad-1578467\">Strawberry-Mango Quinoa Salad</a>, <a href=\"https://spoonacular.com/recipes/strawberry-mango-quinoa-salad-1588251\">Strawberry-Mango Quinoa Salad</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-mango-chopped-spinach-quinoa-salad-with-sesame-lime-vinaigrette-1469287\">Strawberry & Mango Chopped Spinach Quinoa Salad with Sesame-Lime Vinaigrette</a>.",
      "recipeTime": 45,
      "recipeLikes": 41
  },
  "662670": {
      "recipeDescription": "Swiss Chard Wraps is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe with 6 servings. One serving contains <b>137 calories</b>, <b>4g of protein</b>, and <b>11g of fat</b>. For <b>82 cents per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. It works best as a side dish, and is done in about <b>45 minutes</b>. 14 people were impressed by this recipe. If you have swiss chard leaves, orange cauliflower, olive oil, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns an <b>excellent spoonacular score of 96%</b>. <a href=\"https://spoonacular.com/recipes/swiss-chard-wraps-1367505\">Swiss Chard Wraps</a>, <a href=\"https://spoonacular.com/recipes/sweet-thai-chile-chicken-swiss-chard-wraps-with-peanut-ginger-sauce-703915\">Sweet Thai Chile Chicken Swiss Chard Wraps with Peanut Ginger Sauce</a>, and <a href=\"https://spoonacular.com/recipes/swiss-chard-353815\">Swiss Chard</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 14
  },
  "663559": {
      "recipeDescription": "Tomato and lentil soup might be a good recipe to expand your main course recipe box. This recipe makes 4 servings with <b>340 calories</b>, <b>18g of protein</b>, and <b>8g of fat</b> each. For <b>$1.16 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. It is perfect for <b>Autumn</b>. This recipe from Foodista requires bay leaf, onion, garlic, and carrots. 11 person were glad they tried this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. With a spoonacular <b>score of 96%</b>, this dish is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/tomato-and-lentil-soup-482854\">Tomato and Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-398380\">Lentil-Tomato Soup</a>, and <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-108370\">Lentil & Tomato Soup</a>.",
      "recipeTime": 45,
      "recipeLikes": 11
  },
  "664090": {
      "recipeDescription": "You can never have too many main course recipes, so give Turkish Chicken Salad with Home-made Cacik Yogurt Sauce a try. This recipe serves 4 and costs $4.48 per serving. Watching your figure? This gluten free recipe has <b>643 calories</b>, <b>67g of protein</b>, and <b>30g of fat</b> per serving. 9 people found this recipe to be tasty and satisfying. Head to the store and pick up lebanese cucumber, roast chicken, garlic, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is outstanding. Similar recipes include <a href=\"https://spoonacular.com/recipes/spicy-lamb-kabobs-with-turkish-cacik-97380\">Spicy Lamb Kabobs With Turkish Cacik</a>, <a href=\"https://spoonacular.com/recipes/jerk-rubbed-chicken-thighs-with-home-made-mango-habanero-hot-sauce-313780\">Jerk Rubbed Chicken Thighs with Home-Made Mango-Habanero Hot Sauce</a>, and <a href=\"https://spoonacular.com/recipes/yogurt-and-cucumber-dip-cacik-891875\">Yogurt and Cucumber Dip Cacik</a>.",
      "recipeTime": 45,
      "recipeLikes": 9
  },
  "664147": {
      "recipeDescription": "Tuscan White Bean Soup with Olive Oil and Rosemary is a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe with 6 servings. This main course has <b>242 calories</b>, <b>16g of protein</b>, and <b>1g of fat</b> per serving. For <b>50 cents per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>Autumn</b> event. 22 people found this recipe to be tasty and satisfying. Head to the store and pick up olive oil, rosemary, garlic, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 79%</b>, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/white-bean-soup-with-pasta-and-rosemary-oil-drizzle-855454\">White Bean Soup with Pastan and Rosemary Oil Drizzle</a>, <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-and-fennel-stew-with-orange-and-rosemary-105383\">Tuscan White Bean and Fennel Stew With Orange and Rosemary</a>, and <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-soup-1054940\">Tuscan White Bean Soup</a>.",
      "recipeTime": 45,
      "recipeLikes": 22
  },
  "664547": {
      "recipeDescription": "Vegetable Dip might be just the hor d'oeuvre you are searching for. This recipe serves 3. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has <b>210 calories</b>, <b>16g of protein</b>, and <b>4g of fat</b> per serving. For <b>$1.84 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It will be a hit at your <b>The Super Bowl</b> event. If you have vegetables, onion, lowfat yogurt, and a few other ingredients on hand, you can make it. Overall, this recipe earns a <b>spectacular spoonacular score of 96%</b>. <a href=\"https://spoonacular.com/recipes/vegetable-dip-407029\">Vegetable Dip</a>, <a href=\"https://spoonacular.com/recipes/italian-vegetable-dip-268772\">Italian Vegetable Dip</a>, and <a href=\"https://spoonacular.com/recipes/roasted-vegetable-dip-444123\">Roasted Vegetable Dip</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 1
  },
  "664680": {
      "recipeDescription": "The recipe Vegetarian Mushroom Shepherd's Pie is ready <b>in around 45 minutes</b> and is definitely an awesome <b>gluten free and dairy free</b> option for lovers of European food. For <b>$1.16 per serving</b>, you get a hor d'oeuvre that serves 12. One serving contains <b>113 calories</b>, <b>5g of protein</b>, and <b>5g of fat</b>. 11 person were glad they tried this recipe. This recipe from Foodista requires ground pepper, thyme, unrefined sunflower oil, and paprika. All things considered, we decided this recipe <b>deserves a spoonacular score of 83%</b>. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/vegetarian-mushroom-shepherds-pie-1404517\">Vegetarian Mushroom Shepherd's Pie</a>, <a href=\"https://spoonacular.com/recipes/vegetarian-mushroom-shepherds-pie-1374865\">Vegetarian Mushroom Shepherd's Pie</a>, and <a href=\"https://spoonacular.com/recipes/vegetarian-mushroom-shepherds-pie-with-vegan-version-122196\">Vegetarian Mushroom Shepherd's Pie - With Vegan Version</a>.",
      "recipeTime": 45,
      "recipeLikes": 11
  },
  "715385": {
      "recipeDescription": "Slow Cooker Baked Potato Soup might be a good recipe to expand your main course collection. This recipe serves 3. One portion of this dish contains approximately <b>35g of protein</b>, <b>33g of fat</b>, and a total of <b>884 calories</b>. For <b>$2.83 per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. 992 people were glad they tried this recipe. It is brought to you by Pink When. It is perfect for <b>Autumn</b>. If you have green onion tops, cream, water, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>9 hours</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-569219\">Slow cooker baked potato soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-1399117\">Slow Cooker Baked Potato Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-731389\">Slow Cooker Baked Potato Soup</a> for similar recipes.",
      "recipeTime": 540,
      "recipeLikes": 992
  },
  "715391": {
      "recipeDescription": "Forget going out to eat or ordering takeout every time you crave Mexican food. Try making Slow Cooker Chicken Taco Soup at home. One portion of this dish contains about <b>24g of protein</b>, <b>4g of fat</b>, and a total of <b>312 calories</b>. This gluten free and dairy free recipe serves 6 and costs <b>$1.41 per serving</b>. 2182 people have tried and liked this recipe. It works well as a main course. If you have black beans, chili beans, canned tomatoes, and a few other ingredients on hand, you can make it. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes around <b>8 hours and 5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns an <b>awesome spoonacular score of 95%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1399115\">Slow Cooker Chicken Taco Soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1228993\">Slow Cooker Chicken Taco Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1369307\">Slow Cooker Chicken Taco Soup</a>.",
      "recipeTime": 485,
      "recipeLikes": 2182
  },
  "715415": {
      "recipeDescription": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
      "recipeTime": 55,
      "recipeLikes": 1866
  },
  "715421": {
      "recipeDescription": "Cheesy Chicken Enchilada Quinoa Casserole might be just the <b>Mexican</b> recipe you are searching for. One serving contains <b>594 calories</b>, <b>34g of protein</b>, and <b>24g of fat</b>. This gluten free recipe serves 4 and costs <b>$2.62 per serving</b>. A mixture of corn, pepper, canned tomatoes, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes approximately <b>30 minutes</b>. It will be a hit at your <b>Autumn</b> event. Plenty of people made this recipe, and 9912 would say it hit the spot. It works well as an affordable main course. It is brought to you by Pink When. With a spoonacular <b>score of 97%</b>, this dish is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cheesy-chicken-enchilada-quinoa-casserole-1317125\">Cheesy Chicken Enchilada Quinoa Casserole</a>, <a href=\"https://spoonacular.com/recipes/cheesy-chicken-enchilada-quinoa-casserole-1340231\">Cheesy Chicken Enchilada Quinoa Casserole</a>, and <a href=\"https://spoonacular.com/recipes/cheesy-chicken-enchilada-quinoa-casserole-1280325\">Cheesy Chicken Enchilada Quinoa Casserole</a>.",
      "recipeTime": 30,
      "recipeLikes": 9912
  },
  "715424": {
      "recipeDescription": "Need a <b>gluten free and dairy free main course</b>? The Best Chili could be an excellent recipe to try. This recipe makes 8 servings with <b>326 calories</b>, <b>33g of protein</b>, and <b>7g of fat</b> each. For <b>$2.07 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This recipe from Pink When has 32767 fans. <b>The Super Bowl</b> will be even more special with this recipe. From preparation to the plate, this recipe takes roughly <b>2 hours and 10 minutes</b>. This recipe is typical of American cuisine. If you have tomato paste, oregano, cumin, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is excellent. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/5th-annual-chili-contest-entry-chili-con-carne-y-frijoles-618022\">5th Annual Chili Contest: Entry – Chili Con Carne y Frijoles</a>, <a href=\"https://spoonacular.com/recipes/5th-annual-chili-contest-entry-chili-mac-weekly-menu-1215721\">5th Annual Chili Contest: Entry – Chili Mac + Weekly Menu</a>, and <a href=\"https://spoonacular.com/recipes/10th-annual-chili-contest-entry-weeknight-white-chicken-chili-1145314\">10th Annual Chili Contest: Entry – Weeknight White Chicken Chili</a>.",
      "recipeTime": 130,
      "recipeLikes": 32767
  },
  "715446": {
      "recipeDescription": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains <b>434 calories</b>, <b>44g of protein</b>, and <b>12g of fat</b>. This recipe serves 6. For <b>$2.7 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately <b>8 hours and 10 minutes</b>. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. <b>Autumn</b> will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 99%</b>, which is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1578321\">Slow Cooker Beef Stew</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1241707\">Slow Cooker Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1281171\">Slow Cooker Beef Stew</a>.",
      "recipeTime": 490,
      "recipeLikes": 57
  },
  "715447": {
      "recipeDescription": "You can never have too many main course recipes, so give Easy Vegetable Beef Soup a try. This dairy free recipe serves 8 and costs <b>$3.45 per serving</b>. One serving contains <b>566 calories</b>, <b>45g of protein</b>, and <b>19g of fat</b>. 130 people were glad they tried this recipe. It will be a hit at your <b>Autumn</b> event. A mixture of salt, seasoning, on carrots, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Pink When. From preparation to the plate, this recipe takes roughly <b>2 hours and 30 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 97%</b>, which is awesome. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-1050610\">Easy Vegetable Beef Soup</a>, <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-177116\">Easy Vegetable-Beef Soup</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-beef-soup-459390\">Easy Vegetable Beef Soup</a>.",
      "recipeTime": 150,
      "recipeLikes": 130
  },
  "715495": {
      "recipeDescription": "Turkey Tomato Cheese Pizza might be just the <b>Mediterranean</b> recipe you are searching for. For <b>$1.84 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This hor d'oeuvre has <b>221 calories</b>, <b>10g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 6. Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today. This recipe from Pink When has 910 fans. From preparation to the plate, this recipe takes around <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/turkey-tomato-pizza-430522\">Turkey Tomato Pizza</a>, <a href=\"https://spoonacular.com/recipes/tomato-cheese-pizza-430570\">Tomato Cheese Pizza</a>, and <a href=\"https://spoonacular.com/recipes/cheese-tomato-pizza-696636\">Cheese & Tomato Pizza</a>.",
      "recipeTime": 15,
      "recipeLikes": 910
  },
  "715497": {
      "recipeDescription": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>457 calories</b>. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>super spoonacular score of 99%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583\">Berry Banana Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311\">Berry Banana Breakfast Smoothie</a>.",
      "recipeTime": 5,
      "recipeLikes": 689
  },
  "715523": {
      "recipeDescription": "Chorizo and Beef Quinoa Stuffed Pepper is a <b>gluten free</b> main course. One portion of this dish contains approximately <b>51g of protein</b>, <b>37g of fat</b>, and a total of <b>685 calories</b>. This recipe serves 4 and costs $3.69 per serving. Plenty of people made this recipe, and 1254 would say it hit the spot. It is brought to you by Pink When. If you have bell peppers, chorizo, chili powder, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>30 minutes</b>. With a spoonacular <b>score of 93%</b>, this dish is super. Similar recipes include <a href=\"https://spoonacular.com/recipes/pepper-stuffed-peppers-with-chorizo-498937\">Pepper-Stuffed Peppers with Chorizo</a>, <a href=\"https://spoonacular.com/recipes/chorizo-red-pepper-stuffed-potatoes-with-roasted-garlic-aioli-22379\">Chorizo & Red Pepper Stuffed Potatoes With Roasted Garlic Aioli</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-and-ground-turkey-stuffed-pepper-1318051\">QUINOAn AND GROUND TURKEY STUFFED PEPPER</a>.",
      "recipeTime": 30,
      "recipeLikes": 1254
  },
  "715533": {
      "recipeDescription": "The recipe Filet Mignon Soft Tacos is ready <b>in roughly 45 minutes</b> and is definitely a tremendous <b>gluten free and pescatarian</b> option for lovers of Mexican food. This recipe makes 2 servings with <b>514 calories</b>, <b>49g of protein</b>, and <b>29g of fat</b> each. For <b>$4.21 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. It works well as a pretty expensive main course. This recipe is liked by 400 foodies and cooks. Head to the store and pick up corn tortillas, cracked pepper, guacamole, and a few other things to make it today. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/the-secret-to-easy-skillet-filet-mignon-steak-tacos-1063645\">The Secret to Easy Skillet Filet Mignon Steak Tacos</a>, <a href=\"https://spoonacular.com/recipes/the-secret-to-easy-skillet-filet-mignon-steak-tacos-1375033\">The Secret to Easy Skillet Filet Mignon Steak Tacos</a>, and <a href=\"https://spoonacular.com/recipes/the-secret-to-easy-skillet-filet-mignon-steak-tacos-1369305\">The Secret to Easy Skillet Filet Mignon Steak Tacos</a>.",
      "recipeTime": 45,
      "recipeLikes": 400
  },
  "715540": {
      "recipeDescription": "Summer Berry Salad might be a good recipe to expand your hor d'oeuvre recipe box. This recipe serves 1. One portion of this dish contains around <b>2g of protein</b>, <b>1g of fat</b>, and a total of <b>98 calories</b>. For <b>$1.75 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. A mixture of strawberries, blackberries, basalmic vinaigrette, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. 17 people have tried and liked this recipe. It is perfect for <b>The Fourth Of July</b>. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/berry-summer-salad-50848\">Berry Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/summer-berry-salad-485592\">Summer Berry Salad</a>, and <a href=\"https://spoonacular.com/recipes/chicken-berry-summer-salad-769303\">Chicken & Berry Summer Salad</a>.",
      "recipeTime": 45,
      "recipeLikes": 17
  },
  "715543": {
      "recipeDescription": "If you want to add more <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipes to your recipe box, Homemade Guacamole might be a recipe you should try. For <b>92 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. This recipe makes 4 servings with <b>170 calories</b>, <b>2g of protein</b>, and <b>15g of fat</b> each. It is an <b>inexpensive</b> recipe for fans of Mexican food. Many people really liked this hor d'oeuvre. This recipe from Pink When has 1330 fans. A mixture of roma tomato, onion, pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 97%</b>, this dish is amazing. Similar recipes are <a href=\"https://spoonacular.com/recipes/homemade-guacamole-883310\">Homemade Guacamole</a>, <a href=\"https://spoonacular.com/recipes/homemade-guacamole-1059336\">Homemade Guacamole</a>, and <a href=\"https://spoonacular.com/recipes/homemade-guacamole-1170259\">Homemade Guacamole</a>.",
      "recipeTime": 45,
      "recipeLikes": 1330
  },
  "715769": {
      "recipeDescription": "Broccolini Quinoa Pilaf requires approximately <b>30 minutes</b> from start to finish. For <b>$4.14 per serving</b>, you get a main course that serves 2. One portion of this dish contains around <b>20g of protein</b>, <b>31g of fat</b>, and a total of <b>625 calories</b>. Head to the store and pick up vegetable broth, onion, olive oil, and a few other things to make it today. A few people made this recipe, and 94 would say it hit the spot. It is a <b>rather expensive</b> recipe for fans of Mediterranean food. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Pick Fresh Foods. With a spoonacular <b>score of 98%</b>, this dish is excellent. Similar recipes are <a href=\"https://spoonacular.com/recipes/spring-broccolini-kale-quinoa-bowls-734866\">Spring Broccolini & Kale Quinoa Bowls</a>, <a href=\"https://spoonacular.com/recipes/orange-sesame-salmon-with-quinoa-broccolini-839832\">Orange-Sesame Salmon with Quinoa & Broccolini</a>, and <a href=\"https://spoonacular.com/recipes/black-pepper-goat-cheese-and-chard-quinoa-with-roasted-broccolini-625829\">Black Pepper Goat Cheese and Chard Quinoa with Roasted Broccolini</a>.",
      "recipeTime": 30,
      "recipeLikes": 94
  },
  "716195": {
      "recipeDescription": "You can never have too many middl eastern recipes, so give Spicy Indian-Style Hummus a try. For <b>44 cents per serving</b>, you get a hor d'oeuvre that serves 12. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>134 calories</b>, <b>5g of protein</b>, and <b>6g of fat</b> per serving. This recipe from foodandspice.blogspot.com has 161 fans. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Head to the store and pick up turmeric, chilies, sea salt, and a few other things to make it today. With a spoonacular <b>score of 96%</b>, this dish is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/indian-style-spicy-couscous-647863\">Indian Style Spicy Couscous</a>, <a href=\"https://spoonacular.com/recipes/red-onion-indian-spiced-hummus-217684\">Red onion & Indian-spiced hummus</a>, and <a href=\"https://spoonacular.com/recipes/indian-style-coleslaw-603940\">Indian-Style Coleslaw</a>.",
      "recipeTime": 45,
      "recipeLikes": 161
  },
  "716217": {
      "recipeDescription": "Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo) requires roughly <b>45 minutes</b> from start to finish. One serving contains <b>390 calories</b>, <b>8g of protein</b>, and <b>22g of fat</b>. This gluten free, dairy free, and lacto ovo vegetarian recipe serves 6 and costs <b>$3.19 per serving</b>. Head to the store and pick up chilies, rice vinegar, enoki mushrooms, and a few other things to make it today. 295 people found this recipe to be yummy and satisfying. It works well as a side dish. Plenty of people really liked this Vietnamese dish. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns an <b>awesome spoonacular score of 94%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/bnh-xo-vietnamese-happy-pancakes-891106\">Bánh xèo (Vietnamese Happy Pancakes)</a>, <a href=\"https://spoonacular.com/recipes/banh-xeo-bnh-xo-savory-vietnamese-crpe-1000958\">Banh Xeo (Bánh Xèo) – Savory Vietnamese Crêpe</a>, and <a href=\"https://spoonacular.com/recipes/banh-xeo-vietnamese-crepes-1661759\">Banh Xeo (Vietnamese Crepes)</a>.",
      "recipeTime": 45,
      "recipeLikes": 295
  },
  "716276": {
      "recipeDescription": "If you have around <b>45 minutes</b> to spend in the kitchen, Doughnuts might be an amazing <b>lacto ovo vegetarian</b> recipe to try. For <b>68 cents per serving</b>, you get a breakfast that serves 2. One serving contains <b>445 calories</b>, <b>13g of protein</b>, and <b>2g of fat</b>. If you have warm water, honey, powdered milk, and a few other ingredients on hand, you can make it. It is brought to you by Afrolems. Several people made this recipe, and 205 would say it hit the spot. With a spoonacular <b>score of 96%</b>, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/how-to-make-doughnuts-with-video-and-coffee-biscoff-bacon-doughnuts-573590\">How to make doughnuts (with video) and Coffee-Biscoff-Bacon Doughnuts</a>, <a href=\"https://spoonacular.com/recipes/everything-doughnuts-742597\">Everything Doughnuts</a>, and <a href=\"https://spoonacular.com/recipes/cranberry-doughnuts-428199\">Cranberry Doughnuts</a>.",
      "recipeTime": 45,
      "recipeLikes": 205
  },
  "716311": {
      "recipeDescription": "Mango Fried Rice is a Chinese main course. This recipe makes 2 servings with <b>486 calories</b>, <b>16g of protein</b>, and <b>4g of fat</b> each. For <b>$1.51 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. Several people made this recipe, and 262 would say it hit the spot. Head to the store and pick up scotch bonnet pepper, seasoning cubes, rice, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Afrolems. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Overall, this recipe earns a <b>great spoonacular score of 94%</b>. <a href=\"https://spoonacular.com/recipes/mango-pork-fried-rice-176007\">Mango-Pork Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/thai-beef-mango-fried-rice-1326163\">Thai Beef & Mango Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/thai-chicken-and-mango-fried-rice-509300\">Thai Chicken and Mango Fried Rice</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 262
  },
  "716330": {
      "recipeDescription": "Chicken and Mango Skewer takes roughly <b>45 minutes</b> from beginning to end. This recipe serves 1 and costs $4.51 per serving. One portion of this dish contains about <b>31g of protein</b>, <b>8g of fat</b>, and a total of <b>479 calories</b>. It is brought to you by Afrolems. A few people made this recipe, and 19 would say it hit the spot. A mixture of pepper, suya seasoning mix, mangos, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a pretty expensive main course. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. Overall, this recipe earns a <b>spectacular spoonacular score of 95%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/grilled-chicken-caesar-on-a-skewer-338979\">Grilled Chicken Caesar on a Skewer</a>, <a href=\"https://spoonacular.com/recipes/thai-chicken-skewer-appetizers-with-sweet-and-spicy-chili-sauce-621582\">Thai Chicken Skewer Appetizers with Sweet and Spicy Chili Sauce</a>, and <a href=\"https://spoonacular.com/recipes/smore-skewer-bites-568008\">S’more Skewer Bites</a>.",
      "recipeTime": 45,
      "recipeLikes": 19
  },
  "716361": {
      "recipeDescription": "You can never have too many main course recipes, so give Stir Fried Quinoa, Brown Rice and Chicken Breast a try. This recipe serves 1 and costs $3.58 per serving. One serving contains <b>750 calories</b>, <b>58g of protein</b>, and <b>20g of fat</b>. 39 people were impressed by this recipe. If you have cherry tomatoes, spring onion, butter, and a few other ingredients on hand, you can make it. It is brought to you by Afrolems. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>gluten free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is tremendous. Try <a href=\"https://spoonacular.com/recipes/stir-fried-chicken-with-broccoli-brown-rice-793247\">Stir-fried chicken with broccoli & brown rice</a>, <a href=\"https://spoonacular.com/recipes/stir-fried-broccoli-with-brown-rice-meat-optional-569617\">Stir-Fried Broccoli with Brown Rice {Meat Optional}</a>, and <a href=\"https://spoonacular.com/recipes/stir-fried-chickpeas-and-asparagus-with-brown-rice-and-lemon-ta-31848\">Stir-fried Chickpeas And Asparagus With Brown Rice And Lemon Ta</a> for similar recipes.",
      "recipeTime": 45,
      "recipeLikes": 39
  },
  "716381": {
      "recipeDescription": "Need a <b>gluten free, dairy free, and whole 30 main course</b>? Nigerian Snail Stew could be a tremendous recipe to try. This recipe serves 1 and costs $9.1 per serving. One serving contains <b>358 calories</b>, <b>24g of protein</b>, and <b>5g of fat</b>. 361 person have made this recipe and would make it again. It will be a hit at your <b>Autumn</b> event. A mixture of scotch bonnet peppers, bell pepper, tomatoes, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Afrolems. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. <a href=\"https://spoonacular.com/recipes/nigerian-kidney-bean-stew-with-a-peanut-sauce-112643\">Nigerian Kidney Bean Stew With a Peanut Sauce</a>, <a href=\"https://spoonacular.com/recipes/little-snail-rolls-369096\">Little Snail Rolls</a>, and <a href=\"https://spoonacular.com/recipes/maple-snail-cookies-76877\">Maple Snail Cookies</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 361
  },
  "716406": {
      "recipeDescription": "Asparagus and Pea Soup: Real Convenience Food requires approximately <b>20 minutes</b> from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has <b>217 calories</b>, <b>11g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 2. For <b>$1.78 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. <b>Autumn</b> will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a> for similar recipes.",
      "recipeTime": 20,
      "recipeLikes": 207
  },
  "716408": {
      "recipeDescription": "Greek-Style Baked Fish: Fresh, Simple, and Delicious might be just the <b>Mediterranean</b> recipe you are searching for. For <b>$3.04 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains roughly <b>28g of protein</b>, <b>12g of fat</b>, and a total of <b>343 calories</b>. This recipe serves 4. Plenty of people made this recipe, and 396 would say it hit the spot. It works well as a main course. Head to the store and pick up pepper, white wine, basil, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. It is a good option if you're following a <b>gluten free and pescatarian</b> diet. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns a <b>tremendous spoonacular score of 98%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/simple-greek-style-baked-fish-557560\">Simple Greek Style Baked Fish</a>, <a href=\"https://spoonacular.com/recipes/greek-style-baked-fish-526858\">Greek Style Baked Fish</a>, and <a href=\"https://spoonacular.com/recipes/delicious-greek-pastitsio-casserole-style-569500\">Delicious Greek Pastitsio {Casserole-Style}</a>.",
      "recipeTime": 30,
      "recipeLikes": 396
  },
  "716426": {
      "recipeDescription": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
      "recipeTime": 30,
      "recipeLikes": 3689
  },
  "716432": {
      "recipeDescription": "Finger Foods: Frittata Muffins might be a good recipe to expand your breakfast repertoire. This recipe makes 1 servings with <b>655 calories</b>, <b>50g of protein</b>, and <b>45g of fat</b> each. For <b>$2.96 per serving</b>, this recipe <b>covers 47%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Plenty of people made this recipe, and 601 would say it hit the spot. If you have salt and pepper, orange pepper, t cream, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free, lacto ovo vegetarian, primal, and ketogenic</b> diet. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns an <b>amazing spoonacular score of 97%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/finger-foods-frittata-muffins-1369183\">Finger Foods: Frittata Muffins</a>, <a href=\"https://spoonacular.com/recipes/38-power-foods-skinny-kiwifruit-muffins-524893\">{38 Power Foods} Skinny Kiwifruit Muffins</a>, and <a href=\"https://spoonacular.com/recipes/38-power-foods-skinny-broccoli-cheese-muffins-525064\">{38 Power Foods} Skinny Broccoli Cheese Muffins</a>.",
      "recipeTime": 45,
      "recipeLikes": 601
  },
  "716437": {
      "recipeDescription": "Chilled Cucumber Avocado Soup with Yogurt and Kefir is a <b>gluten free, lacto ovo vegetarian, and primal</b> hor d'oeuvre. This recipe serves 3 and costs $2.1 per serving. One portion of this dish contains approximately <b>9g of protein</b>, <b>7g of fat</b>, and a total of <b>189 calories</b>. 171 person were impressed by this recipe. A mixture of avocado, kefir, onion, and a handful of other ingredients are all it takes to make this recipe so yummy. <b>Autumn</b> will be even more special with this recipe. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns an <b>outstanding spoonacular score of 97%</b>. <a href=\"https://spoonacular.com/recipes/chilled-cucumber-avocado-and-yogurt-soup-21553\">Chilled Cucumber, Avocado, and Yogurt Soup</a>, <a href=\"https://spoonacular.com/recipes/chilled-cucumber-yogurt-soup-499125\">Chilled Cucumber-Yogurt Soup</a>, and <a href=\"https://spoonacular.com/recipes/chilled-cucumber-mint-yogurt-soup-608062\">Chilled Cucumber Mint Yogurt Soup</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 171
  },
  "716627": {
      "recipeDescription": "Easy Homemade Rice and Beans is a main course that serves 2. One serving contains <b>446 calories</b>, <b>19g of protein</b>, and <b>4g of fat</b>. For <b>$1.06 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. A mixture of optional: of hot sauce, canned tomatoes, water, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe from cooking2perfection.blogspot.com has 471 fans. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>35 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1311839\">Easy Homemade Rice and Beans</a>, <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1303021\">Easy Homemade Rice and Beans</a>, and <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1230117\">Easy Homemade Rice and Beans</a> are very similar to this recipe.",
      "recipeTime": 35,
      "recipeLikes": 471
  },
  "729366": {
      "recipeDescription": "Plantain Salad could be just the <b>gluten free and pescatarian</b> recipe you've been looking for. For <b>$5.4 per serving</b>, you get a main course that serves 1. One serving contains <b>607 calories</b>, <b>21g of protein</b>, and <b>18g of fat</b>. Head to the store and pick up finger of plantain, parmesan cheese, bell pepper, and a few other things to make it today. This recipe from Afrolems has 126 fans. From preparation to the plate, this recipe takes about <b>45 minutes</b>. With a spoonacular <b>score of 98%</b>, this dish is spectacular. Try <a href=\"https://spoonacular.com/recipes/how-to-spiralize-a-plantain-plantain-rice-and-beans-563745\">How to Spiralize a Plantain & Plantain “Rice” and Beans</a>, <a href=\"https://spoonacular.com/recipes/honey-mustard-crunchy-chicken-plantain-salad-509763\">Honey Mustard Crunchy Chicken Plantain Salad</a>, and <a href=\"https://spoonacular.com/recipes/collard-greens-salad-with-fried-plantain-and-sumac-1432767\">Collard Greens Salad With Fried Plantain and Sumac</a> for similar recipes.",
      "recipeTime": 45,
      "recipeLikes": 126
  },
  "756814": {
      "recipeDescription": "Powerhouse Almond Matcha Superfood Smoothie is a breakfast that serves 2. One serving contains <b>289 calories</b>, <b>11g of protein</b>, and <b>13g of fat</b>. For <b>$2.59 per serving</b>, this recipe <b>covers 27%</b> of your daily requirements of vitamins and minerals. If you have chia seeds, matcha tea powder, banana, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. This recipe from Foodista has 80 fans. From preparation to the plate, this recipe takes around <b>10 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/powerhouse-almond-matcha-superfood-smoothie-1244781\">Powerhouse Almond Matcha Superfood Smoothie</a>, <a href=\"https://spoonacular.com/recipes/chocolate-almond-superfood-smoothie-1600269\">Chocolate Almond Superfood Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/powerhouse-golden-turmeric-smoothie-882363\">Powerhouse Golden Turmeric Smoothie</a>.",
      "recipeTime": 10,
      "recipeLikes": 80
  },
  "765011": {
      "recipeDescription": "If you want to add more <b>gluten free, lacto ovo vegetarian, and primal</b> recipes to your recipe box, Snap Pean and Green Bean Salad with Arugula Pesto might be a recipe you should try. This side dish has <b>314 calories</b>, <b>12g of protein</b>, and <b>22g of fat</b> per serving. This recipe serves 6. For <b>$2.22 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe is liked by 127 foodies and cooks. Head to the store and pick up wax beans, basil leaves, cilantro, and a few other things to make it today. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is amazing. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/snap-peas-and-green-beans-with-arugula-mint-pesto-875123\">Snap Peas and Green Beans with Arugula-Mint Pesto</a>, <a href=\"https://spoonacular.com/recipes/snap-peas-and-green-beans-with-arugula-mint-pesto-1229543\">Snap Peas and Green Beans with Arugula-Mint Pesto</a>, and <a href=\"https://spoonacular.com/recipes/snap-peas-and-green-beans-with-arugula-mint-pesto-1295733\">Snap Peas and Green Beans with Arugula-Mint Pesto</a>.",
      "recipeTime": 45,
      "recipeLikes": 127
  },
  "766453": {
      "recipeDescription": "You can never have too many middl eastern recipes, so give Hummus and Za'atar a try. This recipe serves 4. One portion of this dish contains about <b>34g of protein</b>, <b>31g of fat</b>, and a total of <b>778 calories</b>. For <b>$1.61 per serving</b>, this recipe <b>covers 44%</b> of your daily requirements of vitamins and minerals. If you have chickpeas, olive oil, sea salt, and a few other ingredients on hand, you can make it. It works best as a marinade, and is done in about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. 35 people have made this recipe and would make it again. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns a <b>great spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/chopped-hummus-dip-with-zaatar-180958\">Chopped Hummus Dip with Za'atar</a>, <a href=\"https://spoonacular.com/recipes/mediterranean-hummus-toast-with-zaatar-1067472\">Mediterranean Hummus Toast with Za’atar</a>, and <a href=\"https://spoonacular.com/recipes/hummus-deviled-eggs-with-zaatar-exercise-challenge-1195539\">Hummus Deviled Eggs with Za’atar {Exercise Challenge}</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 35
  },
  "769774": {
      "recipeDescription": "If you have roughly <b>45 minutes</b> to spend in the kitchen, Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO) might be an awesome <b>gluten free, dairy free, paleolithic, and primal</b> recipe to try. One portion of this dish contains about <b>48g of protein</b>, <b>5g of fat</b>, and a total of <b>417 calories</b>. For <b>$9.3 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. It works well as a side dish. This recipe is liked by 4 foodies and cooks. If you have beef broth, sweet potatoes, salt/pepper and favorite healthy seasonings, and a few other ingredients on hand, you can make it. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is excellent. Similar recipes include <a href=\"https://spoonacular.com/recipes/paleo-s-chicken-stuffed-sweet-potatoes-592982\">Paleo s: Chicken Stuffed Sweet Potatoes</a>, <a href=\"https://spoonacular.com/recipes/whole30-paleo-stuffed-sweet-potatoes-1162795\">Whole30 & Paleo Stuffed Sweet Potatoes</a>, and <a href=\"https://spoonacular.com/recipes/harvest-paleo-vegan-stuffed-sweet-potatoes-1043992\">Harvest Paleo Vegan Stuffed Sweet Potatoes</a>.",
      "recipeTime": 45,
      "recipeLikes": 4
  },
  "782585": {
      "recipeDescription": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad</a>, <a href=\"https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad</a>.",
      "recipeTime": 45,
      "recipeLikes": 309
  },
  "782600": {
      "recipeDescription": "Quinoa Salad with Vegetables and Cashews is a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> hor d'oeuvre. One serving contains <b>309 calories</b>, <b>7g of protein</b>, and <b>24g of fat</b>. This recipe serves 6 and costs $1.47 per serving. This recipe is liked by 88 foodies and cooks. A mixture of olive oil, quinoa, dijon mustard, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by foodandspice.blogspot.com. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is outstanding. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cashews-and-vegetables-114102\">Cashews and Vegetables</a>, <a href=\"https://spoonacular.com/recipes/quinoa-salad-with-vegetables-1536631\">Quinoa Salad with Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/zesty-quinoa-with-broccoli-and-cashews-29709\">Zesty Quinoa With Broccoli And Cashews</a>.",
      "recipeTime": 45,
      "recipeLikes": 88
  },
  "782601": {
      "recipeDescription": "Red Kidney Bean Jambalayan is a main course that serves 6. One portion of this dish contains approximately <b>18g of protein</b>, <b>6g of fat</b>, and a total of <b>393 calories</b>. For <b>$1.68 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. 53 people were glad they tried this recipe. A mixture of vegetable stock, tomatoes, onion, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. This recipe is typical of Cajun cuisine. It is brought to you by foodandspice.blogspot.com. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 99%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/red-kidney-bean-jambalaya-1407231\">Red Kidney Bean Jambalaya</a>, <a href=\"https://spoonacular.com/recipes/red-kidney-bean-salad-94525\">Red Kidney Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a>.",
      "recipeTime": 45,
      "recipeLikes": 53
  },
  "782622": {
      "recipeDescription": "Chocolate Peanut Butter Cinnamon Smoothie is a <b>gluten free, dairy free, and fodmap friendly</b> breakfast. This recipe serves 1 and costs $1.5 per serving. One portion of this dish contains roughly <b>27g of protein</b>, <b>21g of fat</b>, and a total of <b>420 calories</b>. If you have ice cubes, banana, jif cinnamon peanut butter, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Only a few people really liked this Southern dish. 5 people found this recipe to be tasty and satisfying. It is brought to you by fullbellysisters.blogspot.com. With a spoonacular <b>score of 96%</b>, this dish is super. <a href=\"https://spoonacular.com/recipes/cinnamon-apple-peanut-butter-smoothie-1177081\">Cinnamon Apple Peanut Butter Smoothie</a>, <a href=\"https://spoonacular.com/recipes/peanut-butter-chocolate-chip-protein-smoothie-with-kura-smoothie-starter-629513\">Peanut Butter Chocolate Chip Protein Smoothie with Kura Smoothie Starter</a>, and <a href=\"https://spoonacular.com/recipes/chocolate-peanut-butter-smoothie-113511\">Chocolate-Peanut butter Smoothie</a> are very similar to this recipe.",
      "recipeTime": 45,
      "recipeLikes": 5
  },
  "794349": {
      "recipeDescription": "Broccoli and Chickpea Rice Salad takes roughly <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>355 calories</b>, <b>15g of protein</b>, and <b>10g of fat</b> per serving. This recipe serves 6. For <b>$1.13 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. It works well as a main course. 44 people were glad they tried this recipe. It is brought to you by foodandspice.blogspot.com. A mixture of ground pepper, broccoli florets, olive oil, and a handful of other ingredients are all it takes to make this recipe so tasty. With a spoonacular <b>score of 99%</b>, this dish is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1380823\">Broccoli and Chickpea Rice Salad</a>, <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1401089\">Broccoli and Chickpea Rice Salad</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1287405\">Broccoli and Chickpea Rice Salad</a>.",
      "recipeTime": 45,
      "recipeLikes": 44
  },
  "794538": {
      "recipeDescription": "Almond Joy Protein Shake might be a good recipe to expand your beverage recipe box. One portion of this dish contains roughly <b>24g of protein</b>, <b>41g of fat</b>, and a total of <b>485 calories</b>. This gluten free, dairy free, fodmap friendly, and ketogenic recipe serves 1 and costs <b>$2.24 per serving</b>. 22 people found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is brought to you by fullbellysisters.blogspot.com. Head to the store and pick up coconut, chocolate almond milk, coconut milk, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is super. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/almond-joy-breakfast-shake-chocolate-coconut-protein-shake-996923\">Almond Joy Breakfast Shake – Chocolate Coconut Protein Shake</a>, <a href=\"https://spoonacular.com/recipes/almond-joy-protein-shake-1283415\">Almond Joy Protein Shake</a>, and <a href=\"https://spoonacular.com/recipes/almond-joy-protein-shake-549372\">Almond Joy Protein Shake</a>.",
      "recipeTime": 45,
      "recipeLikes": 22
  },
  "795751": {
      "recipeDescription": "Chicken Fajita Stuffed Bell Pepper takes approximately <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>526 calories</b>, <b>50g of protein</b>, and <b>24g of fat</b> per serving. For <b>$4.35 per serving</b>, you get a main course that serves 3. 159 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine. This recipe from Pink When requires cumin, cilantro, salsa, and chili powder. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/stuffed-bell-peppers-551310\">Stuffed Bell Peppers</a>, <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-1348405\">Stuffed Bell Pepper</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-526845\">Stuffed Bell Pepper</a>.",
      "recipeTime": 45,
      "recipeLikes": 159
  },
  "798400": {
      "recipeDescription": "The recipe Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant could satisfy your Indian craving in around <b>45 minutes</b>. This recipe serves 6 and costs 94 cents per serving. This hor d'oeuvre has <b>129 calories</b>, <b>7g of protein</b>, and <b>2g of fat</b> per serving. It is brought to you by foodandspice.blogspot.com. If you have black-eyed peas, olive oil, globe, and a few other ingredients on hand, you can make it. This recipe is liked by 32 foodies and cooks. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/roasted-eggplant-and-swiss-chard-lasagna-1070265\">Roasted Eggplant and Swiss Chard Lasagna</a>, <a href=\"https://spoonacular.com/recipes/pumpkin-black-eyed-pea-and-coconut-curry-1065869\">Pumpkin, Black-Eyed Pea, and Coconut Curry</a>, and <a href=\"https://spoonacular.com/recipes/spicy-black-eyed-pea-relish-31042\">Spicy Black-eyed Pea Relish</a> for similar recipes.",
      "recipeTime": 45,
      "recipeLikes": 32
  },
  "975070": {
      "recipeDescription": "Instant Pot Chicken Taco Soup could be just the <b>gluten free and dairy free</b> recipe you've been looking for. This recipe serves 4. One serving contains <b>346 calories</b>, <b>25g of protein</b>, and <b>8g of fat</b>. For <b>$2.72 per serving</b>, this recipe <b>covers 40%</b> of your daily requirements of vitamins and minerals. It works best as a main course, and is done in around <b>25 minutes</b>. If you have chilis, water, corn, and a few other ingredients on hand, you can make it. 6 people have tried and liked this recipe. It is perfect for <b>Autumn</b>. This recipe is typical of Mexican cuisine. It is brought to you by Pink When. With a spoonacular <b>score of 95%</b>, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-1336121\">Instant Pot Chicken Taco Soup</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-1337813\">Instant Pot Chicken Taco Soup</a>, and <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-944691\">Instant Pot Chicken Taco Soup</a>.",
      "recipeTime": 25,
      "recipeLikes": 6
  },
  "982371": {
      "recipeDescription": "Instant Pot Quinoa Grain Bowl might be a good recipe to expand your main course recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>416 calories</b>, <b>16g of protein</b>, and <b>10g of fat</b> per serving. This recipe serves 4 and costs $3.02 per serving. From preparation to the plate, this recipe takes roughly <b>13 minutes</b>. A mixture of baby brussell sprouts, broccoli, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. 1 person has made this recipe and would make it again. It is brought to you by Pink When. With a spoonacular <b>score of 96%</b>, this dish is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/instant-pot-quinoa-grain-bowl-1693765\">Instant Pot Quinoa Grain Bowl</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-sausage-cabbage-bowl-with-quinoa-or-stovetop-901463\">Instant Pot Sausage Cabbage Bowl with Quinoa (or Stovetop)</a>, and <a href=\"https://spoonacular.com/recipes/crock-pot-chicken-fajita-bowl-grain-free-paleo-1224627\">Crock Pot Chicken Fajita Bowl (Grain-Free, Paleo)</a>.",
      "recipeTime": 13,
      "recipeLikes": 1
  },
  "1095753": {
      "recipeDescription": "Roasted Cauliflower Detox Bowl with Tahini Sauce might be just the main course you are searching for. One serving contains <b>549 calories</b>, <b>18g of protein</b>, and <b>30g of fat</b>. This recipe serves 2 and costs $3.06 per serving. 1 person were glad they tried this recipe. A mixture of kale leaves, garlic, ground cumin, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>50 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is awesome. <a href=\"https://spoonacular.com/recipes/quinoa-bowl-with-roasted-cauliflower-and-tahini-dressing-862308\">Quinoa Bowl with Roasted Cauliflower and Tahini Dressing</a>, <a href=\"https://spoonacular.com/recipes/quinoa-bowl-with-roasted-cauliflower-and-tahini-dressing-1667949\">Quinoa Bowl with Roasted Cauliflower and Tahini Dressing</a>, and <a href=\"https://spoonacular.com/recipes/roasted-cauliflower-with-tahini-sauce-658541\">Roasted Cauliflower with Tahini Sauce</a> are very similar to this recipe.",
      "recipeTime": 50,
      "recipeLikes": 1
  }
}
recipeInformation :any[]=[];
isFavoriteImages: { [id: string]: boolean } = {};

  constructor(private homeRecipeService:HomeRecipeService , private activatedRoute: ActivatedRoute) {}
  

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(params => {
    //     this.searchParam = params['searchQuery'] || ''; // Default to an empty string if not present
    //     // Handle the searchQuery parameter as needed
    //     console.log(this.searchParam);
    //     let recipeIDS="";
    //     this.homeRecipeService.searchByRecipe(this.searchParam).subscribe((data: any) => {
    //       this.recipes = data.results;
        
    //       // Loop through each recipe and fetch additional information
    //       for (const recipe of this.recipes) {
    //         recipeIDS += recipe.id;
    //         recipeIDS += ",";
    //       }
          
    //       // Remove the trailing comma
    //       if (recipeIDS.length > 0) {
    //         recipeIDS = recipeIDS.slice(0, -1);
    //       }
          
    //       this.homeRecipeService.getRecipeInformation(recipeIDS).subscribe((recipeinfo:any)=>{
    //         this.recipeInformation =recipeinfo;
    //         for (const recipeinfo of this.recipeInformation) {
    //           this.recipeDictionary[recipeinfo.id]={
    //            "recipeDescription":recipeinfo.summary,
    //            "recipeTime":recipeinfo.readyInMinutes,
    //            "recipeLikes":recipeinfo.aggregateLikes
    //           }
    //          }
        
    //       });
    //       console.log(this.recipes);
          
        
    //       console.log(this.recipeDictionary);
    //     });
        
    //         console.log(this.searchParam);
    //   });
//    this.searchParam=this.activatedRoute.snapshot.paramMap.get('searchQuery')?.trim();

    
    this.retrieveStoredData();
      // console.log(this.recipes);
      
  
      // console.log(this.recipeDictionary);
      console.log(this.isFavoriteImages);

    
  }
  toggleFavorite(id: any): void {
    console.log("inside favorite function");

    // Toggle the favorite status for the clicked recipe id
    this.isFavoriteImages[id] = !this.isFavoriteImages[id];
    console.log(this.isFavoriteImages[id]);

    // Update the stored data in local storage
    this.updateStoredData();
  }

  private retrieveStoredData(): void {
    const storedData = localStorage.getItem('mySetKey');
    if (storedData) {
      // If data exists, parse it and update the isFavoriteImages object
      const storedSet = new Set<string>(JSON.parse(storedData));

      this.recipes.forEach(recipe => {
        this.isFavoriteImages[recipe.id] = storedSet.has(JSON.stringify({recipeId:recipe.id,
        recipeImage:recipe.image,
        recipeTitle:recipe.title,
        recipeDescription:this.recipeDictionary[recipe.id]?.recipeDescription,
        recipeTime:this.recipeDictionary[recipe.id]?.recipeTime,
        recipeLikes:this.recipeDictionary[recipe.id]?.recipeLikes  
      }));
       
      });
    }
  }

  private updateStoredData(): void {
    // Update the stored data in local storage
    const mySet = new Set<string>();
    this.recipes.forEach(recipe => {
      if (this.isFavoriteImages[recipe.id]) {
       
        mySet.add( JSON.stringify({recipeId:recipe.id,
        recipeImage:recipe.image,
        recipeTitle:recipe.title,
        recipeDescription:this.recipeDictionary[recipe.id]?.recipeDescription,
        recipeTime:this.recipeDictionary[recipe.id]?.recipeTime,
        recipeLikes:this.recipeDictionary[recipe.id]?.recipeLikes  
      }));
        
      }
    });
    localStorage.setItem('mySetKey', JSON.stringify(Array.from(mySet)));
  }
  
  
  


  
  
  // toggleFavorite(id: any): void {
  //   console.log("inside favorite function");
  
  //   // Toggle the favorite status for the clicked recipe id
  //   this.isFavoriteImages[id] = !this.isFavoriteImages[id];
  //   console.log(this.isFavoriteImages[id]);
  
  //   // Initialize an empty set
  //   let mySet = new Set<number>();
  
  //   // Check if the set already exists in local storage
  //   const storedSet = localStorage.getItem('mySetKey');
  //   if (storedSet) {
  //     // If it exists, retrieve it and parse it back to a set
  //     mySet = new Set<number>(JSON.parse(storedSet));
  //   }
  
  //   // Add or remove the recipe ID based on the favorite status
  //   if (this.isFavoriteImages[id]) {
  //     // If it's a favorite, add the ID to the set
  //     mySet.add(id);
  //   } else {
  //     // If it's not a favorite, remove the ID from the set
  //     mySet.delete(id);
  //   }
  
  //   // Store the updated set back in local storage
  //   localStorage.setItem('mySetKey', JSON.stringify(Array.from(mySet)));
  // }
  
  
  

}
