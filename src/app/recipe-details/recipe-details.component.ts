import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeRecipeService } from '../home/home-recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  // recipeInfo:any[]=[];
  recipeInfo={
    "vegetarian": true,
    "vegan": true,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 12,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 309,
    "healthScore": 100,
    "creditsText": "blogspot.com",
    "sourceName": "blogspot.com",
    "pricePerServing": 134.63,
    "extendedIngredients": [
        {
            "id": 10016049,
            "aisle": "Canned and Jarred",
            "image": "dry-cannellini-beans.jpg",
            "consistency": "SOLID",
            "name": "cannellini beans",
            "nameClean": "dried cannellini beans",
            "original": "1 1/4 cups dried cannellini (white kidney) beans (3 3/4 cups cooked)",
            "originalName": "1/4 cups dried cannellini (white kidney) beans cooked)",
            "amount": 3.75,
            "unit": "cups",
            "meta": [
                "dried",
                "white",
                "cooked",
                "( kidney)"
            ],
            "measures": {
                "us": {
                    "amount": 3.75,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 757.5,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 93604,
            "aisle": "Ethnic Foods",
            "image": "curry-leaves.jpg",
            "consistency": "SOLID",
            "name": "curry leaves",
            "nameClean": "curry leaves",
            "original": "handful of dried curry leaves, crumbled (or 1 bay leaf)",
            "originalName": "dried curry leaves, crumbled (or 1 bay leaf)",
            "amount": 1,
            "unit": "handful",
            "meta": [
                "dried",
                "crumbled",
                "(or 1 bay leaf)"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "handful",
                    "unitLong": "handful"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "handful",
                    "unitLong": "handful"
                }
            }
        },
        {
            "id": 2041,
            "aisle": "Produce",
            "image": "tarragon.jpg",
            "consistency": "SOLID",
            "name": "tarragon",
            "nameClean": "tarragon",
            "original": "1/4 cup fresh tarragon",
            "originalName": "fresh tarragon",
            "amount": 0.25,
            "unit": "cup",
            "meta": [
                "fresh"
            ],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 12.75,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 11215,
            "aisle": "Produce",
            "image": "garlic.png",
            "consistency": "SOLID",
            "name": "garlic",
            "nameClean": "garlic",
            "original": "1 clove garlic, minced or crushed",
            "originalName": "garlic, minced or crushed",
            "amount": 1,
            "unit": "clove",
            "meta": [
                "minced",
                "crushed"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "clove",
                    "unitLong": "clove"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "clove",
                    "unitLong": "clove"
                }
            }
        },
        {
            "id": 9152,
            "aisle": "Produce",
            "image": "lemon-juice.jpg",
            "consistency": "LIQUID",
            "name": "juice of lemon",
            "nameClean": "lemon juice",
            "original": "juice from 1 lemon (3 tablespoons)",
            "originalName": "juice from 1 lemon",
            "amount": 3,
            "unit": "",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 3,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 3,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 9156,
            "aisle": "Produce",
            "image": "zest-lemon.jpg",
            "consistency": "SOLID",
            "name": "lemon zest",
            "nameClean": "lemon peel",
            "original": "1 teaspoon grated lemon zest",
            "originalName": "grated lemon zest",
            "amount": 1,
            "unit": "teaspoon",
            "meta": [
                "grated"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                }
            }
        },
        {
            "id": 4053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consistency": "SOLID",
            "name": "olive oil",
            "nameClean": "olive oil",
            "original": "1/2 cup olive oil",
            "originalName": "olive oil",
            "amount": 0.5,
            "unit": "cup",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 108,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 4053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consistency": "SOLID",
            "name": "olive oil",
            "nameClean": "olive oil",
            "original": "2 teaspoons olive oil",
            "originalName": "olive oil",
            "amount": 2,
            "unit": "teaspoons",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 2,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 2,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 1002030,
            "aisle": "Spices and Seasonings",
            "image": "pepper.jpg",
            "consistency": "SOLID",
            "name": "cracked pepper",
            "nameClean": "black pepper",
            "original": "fresh cracked black pepper to taste",
            "originalName": "fresh cracked black pepper to taste",
            "amount": 6,
            "unit": "servings",
            "meta": [
                "fresh",
                "black",
                "to taste"
            ],
            "measures": {
                "us": {
                    "amount": 6,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 6,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        },
        {
            "id": 1012047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "sea salt",
            "nameClean": "coarse sea salt",
            "original": "1 teaspoon sea salt, or to taste",
            "originalName": "sea salt, or to taste",
            "amount": 1,
            "unit": "teaspoon",
            "meta": [
                "to taste"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                }
            }
        },
        {
            "id": 11260,
            "aisle": "Produce",
            "image": "mushrooms.png",
            "consistency": "SOLID",
            "name": "mushrooms",
            "nameClean": "fresh mushrooms",
            "original": "8 large white mushrooms, sliced",
            "originalName": "white mushrooms, sliced",
            "amount": 8,
            "unit": "large",
            "meta": [
                "white",
                "sliced"
            ],
            "measures": {
                "us": {
                    "amount": 8,
                    "unitShort": "large",
                    "unitLong": "larges"
                },
                "metric": {
                    "amount": 8,
                    "unitShort": "large",
                    "unitLong": "larges"
                }
            }
        },
        {
            "id": 11260,
            "aisle": "Produce",
            "image": "mushrooms-white.jpg",
            "consistency": "SOLID",
            "name": "mushrooms",
            "nameClean": "fresh mushrooms",
            "original": "8 large white mushrooms, sliced",
            "originalName": "white mushrooms, sliced",
            "amount": 8,
            "unit": "large",
            "meta": [
                "white",
                "sliced"
            ],
            "measures": {
                "us": {
                    "amount": 8,
                    "unitShort": "large",
                    "unitLong": "larges"
                },
                "metric": {
                    "amount": 8,
                    "unitShort": "large",
                    "unitLong": "larges"
                }
            }
        },
        {
            "id": 1012046,
            "aisle": "Condiments",
            "image": "whole-grain-mustard.png",
            "consistency": "LIQUID",
            "name": "grain mustard",
            "nameClean": "whole grain mustard",
            "original": "1 to 1 1/2 teaspoons Dijon or grain mustard, to taste",
            "originalName": "Dijon or grain mustard, to taste",
            "amount": 1,
            "unit": "teaspoons",
            "meta": [
                "to taste"
            ],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                }
            }
        }
    ],
    "id": 782585,
    "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "http://foodandspice.blogspot.com/2016/05/cannellini-bean-and-asparagus-salad.html",
    "image": "https://spoonacular.com/recipeImages/782585-556x370.jpg",
    "imageType": "jpg",
    "summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad</a>, <a href=\"https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad</a>.",
    "cuisines": [],
    "dishTypes": [
        "side dish",
        "lunch",
        "main course",
        "salad",
        "main dish",
        "dinner"
    ],
    "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
    ],
    "occasions": [],
    "winePairing": {
        "pairedWines": [
            "chardonnay",
            "sauvignon blanc",
            "gruener veltliner"
        ],
        "pairingText": "Chardonnay, Sauvignon Blanc, and Gruener Veltliner are my top picks for Salad. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. You could try Cakebread Reserve Chardonnay. Reviewers quite like it with a 4.5 out of 5 star rating and a price of about 65 dollars per bottle.",
        "productMatches": [
            {
                "id": 434275,
                "title": "Cakebread Reserve Chardonnay",
                "description": "The 2014 Chardonnay Reserve offers seductively fresh, creamy aromas of golden apple and Asian pear fruit nicely complemented by notes of creme brulee, vanilla and mineral. Rich and full on the palate, the wine reveals a core of deeply concentrated spiced apple, melon and citrus flavors that maintain their intensity throughout a long, mineral-tinged finish. Boasting deep reserves of fruit coupled with exemplary balance, the Chardonnay Reserve is delicious now, but will age beautifully in bottle for another 5-7 years.\nPair this wine with sweet potato soup with chestnuts and brandy.",
                "price": "$64.98999786376953",
                "imageUrl": "https://spoonacular.com/productImages/434275-312x231.jpg",
                "averageRating": 0.8999999761581421,
                "ratingCount": 26,
                "score": 0.8873417483100409,
                "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fcakebread-reserve-chardonnay-2014%2F327584"
            }
        ]
    },
    "instructions": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water. Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart. Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch. Transfer to the salad bowl.Now cook the mushrooms. Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid. Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.Pour the dressing over the salad, season with salt and pepper, and toss. Serve at room temperature or chilled.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                    "ingredients": [
                        {
                            "id": 10716050,
                            "name": "cannellini beans",
                            "localizedName": "cannellini beans",
                            "image": "cooked-cannellini-beans.png"
                        },
                        {
                            "id": 14412,
                            "name": "water",
                            "localizedName": "water",
                            "image": "water.png"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 480,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 2,
                    "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                    "ingredients": [
                        {
                            "id": 14412,
                            "name": "water",
                            "localizedName": "water",
                            "image": "water.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404669,
                            "name": "sauce pan",
                            "localizedName": "sauce pan",
                            "image": "sauce-pan.jpg"
                        }
                    ]
                },
                {
                    "number": 3,
                    "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                    "ingredients": [
                        {
                            "id": 93604,
                            "name": "curry leaves",
                            "localizedName": "curry leaves",
                            "image": "curry-leaves.jpg"
                        },
                        {
                            "id": 2004,
                            "name": "bay leaves",
                            "localizedName": "bay leaves",
                            "image": "bay-leaves.jpg"
                        },
                        {
                            "id": 0,
                            "name": "beans",
                            "localizedName": "beans",
                            "image": "kidney-beans.jpg"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 60,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 4,
                    "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                    "ingredients": [
                        {
                            "id": 11011,
                            "name": "asparagus",
                            "localizedName": "asparagus",
                            "image": "asparagus.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404783,
                            "name": "bowl",
                            "localizedName": "bowl",
                            "image": "bowl.jpg"
                        }
                    ],
                    "length": {
                        "number": 6,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 5,
                    "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                    "ingredients": [
                        {
                            "id": 11260,
                            "name": "mushrooms",
                            "localizedName": "mushrooms",
                            "image": "mushrooms.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404783,
                            "name": "bowl",
                            "localizedName": "bowl",
                            "image": "bowl.jpg"
                        }
                    ]
                },
                {
                    "number": 6,
                    "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                    "ingredients": [
                        {
                            "id": 11260,
                            "name": "mushrooms",
                            "localizedName": "mushrooms",
                            "image": "mushrooms.png"
                        },
                        {
                            "id": 4582,
                            "name": "cooking oil",
                            "localizedName": "cooking oil",
                            "image": "vegetable-oil.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "localizedName": "frying pan",
                            "image": "pan.png"
                        }
                    ],
                    "length": {
                        "number": 5,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 7,
                    "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                    "ingredients": [
                        {
                            "id": 9152,
                            "name": "lemon juice",
                            "localizedName": "lemon juice",
                            "image": "lemon-juice.jpg"
                        },
                        {
                            "id": 9156,
                            "name": "lemon zest",
                            "localizedName": "lemon zest",
                            "image": "zest-lemon.jpg"
                        },
                        {
                            "id": 11011,
                            "name": "asparagus",
                            "localizedName": "asparagus",
                            "image": "asparagus.png"
                        },
                        {
                            "id": 4053,
                            "name": "olive oil",
                            "localizedName": "olive oil",
                            "image": "olive-oil.jpg"
                        },
                        {
                            "id": 2041,
                            "name": "tarragon",
                            "localizedName": "tarragon",
                            "image": "tarragon.jpg"
                        },
                        {
                            "id": 2046,
                            "name": "mustard",
                            "localizedName": "mustard",
                            "image": "regular-mustard.jpg"
                        },
                        {
                            "id": 11215,
                            "name": "garlic",
                            "localizedName": "garlic",
                            "image": "garlic.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404771,
                            "name": "food processor",
                            "localizedName": "food processor",
                            "image": "food-processor.png"
                        },
                        {
                            "id": 404726,
                            "name": "blender",
                            "localizedName": "blender",
                            "image": "blender.png"
                        },
                        {
                            "id": 404783,
                            "name": "bowl",
                            "localizedName": "bowl",
                            "image": "bowl.jpg"
                        }
                    ]
                },
                {
                    "number": 8,
                    "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                    "ingredients": [
                        {
                            "id": 1102047,
                            "name": "salt and pepper",
                            "localizedName": "salt and pepper",
                            "image": "salt-and-pepper.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 9,
                    "step": "Serve at room temperature or chilled.",
                    "ingredients": [],
                    "equipment": []
                }
            ]
        }
    ],
    "originalId": null,
    "spoonacularScore": 99.53536987304688,
    "spoonacularSourceUrl": "https://spoonacular.com/cannellini-bean-and-asparagus-salad-with-mushrooms-782585"
}
  constructor(private router: Router, private activatedRoute: ActivatedRoute ,private homeRecipeService:HomeRecipeService) {}
  ngOnInit(): void {
    let currentrecipeId:any=this.activatedRoute.snapshot.paramMap.get('recipeId');
    //console.log(this.activatedRoute.snapshot.paramMap.get('recipeId'));
    // this.homeRecipeService.getRecipeInformationById(currentrecipeId).subscribe((data: any) => {
    // this.recipeInfo=data;
    // console.log(this.recipeInfo);
    // });
    
}

}
