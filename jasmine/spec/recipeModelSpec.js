/**
 * Created by fgusmao on 2/27/2016.
 */

describe('A recipe', function () {
    it('should exist', function () {
        expect(app.Models.Recipe).toBeDefined();
    });
    it('should have certaion defaults', function() {
        var recipe = new app.Models.Recipe();

        expect(recipe.get('name')).toEqual('Unnamed');
        expect(recipe.get('rating')).toEqual(0);
        expect(recipe.get('ingredients').length).toEqual(0);
        expect(recipe.get('instructions').length).toEqual(0);
    })
    it('Should identify if it has nuts', function() {
        var noRestricionsRecipe = new app.Models.Recipe({
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
        })
    })
});

