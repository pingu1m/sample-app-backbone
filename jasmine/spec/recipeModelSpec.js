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
    });
    it('Should identify if it has nuts', function() {
        var noRestricionsRecipe = new app.Models.Recipe(FIXTURES.recipes.noRestricions);
        var withNutsRecipe = new app.Models.Recipe(FIXTURES.recipes.withNuts);

        expect(noRestricionsRecipe.containsNuts()).toBeFalsy();
        expect(withNutsRecipe.containsNuts()).toBeTruthy();

    });
    it('Should identify if it has eggs', function() {
        var noRestricionsRecipe = new app.Models.Recipe(FIXTURES.recipes.noRestricions);
        var withEggsRecipe = new app.Models.Recipe(FIXTURES.recipes.withEggs);

        expect(noRestricionsRecipe.containsEggs()).toBeFalsy();
        expect(withEggsRecipe.containsEggs()).toBeTruthy();

    });
    it('Should identify vegetarian food', function() {
        var meatRecipe = new app.Models.Recipe(FIXTURES.recipes.withMeat);
        var vegetarianRecipe = new app.Models.Recipe(FIXTURES.recipes.vegetarian);

        expect(meatRecipe.isVegetarian()).toBeFalsy();
        expect(vegetarianRecipe.isVegetarian()).toBeTruthy();

    })
});

