/**
 *
 * Created by fgusmao on 2/27/16.
 */

describe('A recipe collection', function() {
    var fakeServer;

    beforeEach(function() {
        fakeServer = sinon.fakeServer.create();
        fakeServer.respondImmediately = true;
    });

    afterEach(function () {
        fakeServer.restore();
    });


    it('should exist', function() {
        expect(app.Collections.Recipes).toBeDefined();
    });
    it('should contain recipes', function() {
        var recipes = new app.Collections.Recipes([
            FIXTURES.recipes.noRestricions,
            FIXTURES.recipes.withEggs
        ]);
        expect(recipes.length).toEqual(2);
        expect(recipes.first() instanceof app.Models.Recipe).toBeTruthy();
    });
    it('should consolidade recipe names', function() {
        var recipes = new app.Collections.Recipes([
            FIXTURES.recipes.noRestricions,
            FIXTURES.recipes.noRestricions,
            FIXTURES.recipes.withEggs
        ]);
        expect(recipes.getRecipeNames()).toEqual(['Marinara','Omelete']);
    });
    it('should return the most recent recipe of a given name', function() {
        var recipes = new app.Collections.Recipes([
            FIXTURES.recipes.noRestricions,
            FIXTURES.recipes.noRestricionsRecent
        ]);

        var newstDate = recipes.getNewestForName('Marinara').get('dateAdded');

        expect(newstDate).toEqual(FIXTURES.recipes.noRestricionsRecent.dateAdded);
    });
    it('should have a remote data source', function () {
        var recipes = new app.Collections.Recipes();

        expect(recipes.url).toBeDefined();
    });
    it('should populate data from the back end', function() {
        var recipes = new app.Collections.Recipes();

        fakeServer.respondWith('/recipes', FIXTURES.server.recipes.ok);

        recipes.fetch();

        expect(recipes.length).toBeGreaterThan(0);
    });
});
