/**
 * Created by fgusmao on 2/29/16.
 */

describe('The application router', function () {
    var router;

    afterEach(function () {
        Backbone.history.stop();
    });

    var routerSetup = function () {
        router = new app.Routers.RecipeRouter();
        Backbone.history.start();

    };
    it('should let us navigate to a recipe by id', function() {
        var routerSpy = spyOn(app.Routers.RecipeRouter.prototype, 'openRecipe');

        routerSetup();

        router.navigate('recipe/3', {trigger: true});

        expect(routerSpy).toHaveBeenCalled();
        expect(routerSpy).toHaveBeenCalledWith('3', null);
    });
    it('should let us create a variation based on another recipe', function() {
        var routerSpy = spyOn(app.Routers.RecipeRouter.prototype, 'createVariation');

        routerSetup();

        router.navigate('recipe/3/variation', {trigger: true});

        expect(routerSpy).toHaveBeenCalled();
        expect(routerSpy).toHaveBeenCalledWith('3', null);
    });
});
