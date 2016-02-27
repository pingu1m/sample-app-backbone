/**
 *
 * Created by fgusmao on 2/27/2016.
 */

var FIXTURES = window.FIXTURES || {};

FIXTURES.recipes = {

    noRestricions: {
        name: 'Marinara',
        ingredients: [
            {
                baseIngredient: 'tomate',
                quantity: '8',
                modifier: 'cortado'
            },
            {
                baseIngredient: 'cebola',
                quantity: '1',
                modifier: 'em cubos'
            },
            {
                baseIngredient: 'garlic',
                quantity: '2 clove',
                modifier: 'minced'
            }
        ]
    },
    withNuts: {
        name: 'Marinara',
        ingredients: [
            {
                baseIngredient: 'brocoli',
                quantity: '1 head',
                modifier: ''
            },
            {
                baseIngredient: 'butter',
                quantity: '3',
                modifier: 'cubos'
            },
            {
                baseIngredient: 'lemon',
                quantity: '1/4',
                modifier: 'suco'
            },
            {
                baseIngredient: 'almonds',
                isNut: true,
                quantity: '1/2 copo',
                modifier: 'triturado'
            }
        ]
    },
    withEggs: {
        name: 'Omelete',
        ingredients: [
            {
                baseIngredient: 'ovos',
                quantity: '4',
                isEggs: true,
                modifier: 'frito'
            },
            {
                baseIngredient: 'Bread',
                quantity: '3',
                modifier: 'slices'
            }
        ]
    },
    withMeat: {
        name: 'Churrasco',
        ingredients: [
            {
                baseIngredient: 'Carne Bovina',
                quantity: '1 kilo',
                isVegetarian: false,
                modifier: 'frito'
            },
            {
                baseIngredient: 'Bread',
                quantity: '3',
                modifier: 'slices'
            }
        ]
    },
   vegetarian: {
       name: 'Carne de Soja',
       ingredients: [
           {
               baseIngredient: 'Carne de soja',
               quantity: '4',
               isVegetarian: true,
               modifier: 'cozido'
           },
           {
               baseIngredient: 'Arroz',
               quantity: '500 gramas',
               modifier: 'cozido'
           }
       ]

   }
};
