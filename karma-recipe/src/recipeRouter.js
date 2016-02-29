/**
 * Created by fgusmao on 2/29/16.
 */
var app = window.app || {};
app.Routers = app.Routers || {};

app.Routers.RecipeRouter = Backbone.Router.extend({
    routes: {
        'recipe/:id': 'openRecipe',
        'recipe/:id/variation': 'createVariation'
    },
    openRecipe: function() {

    },
    createVariation: function () {

    }
});
