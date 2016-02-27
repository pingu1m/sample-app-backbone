/**
 * Created by fgusmao on 2/27/16.
 */

var app = window.app || {};
app.Collections = app.Collection || {};

app.Collections.Recipes = Backbone.Collection.extend({
    model: app.Models.Recipe,
    url: '/recipes',
    comparator: 'dateAdded',
    getRecipeNames: function() {
        return _.uniq(this.pluck('name'));
    },
    getNewestForName: function(recipeName) {
        var variations = this.where({
            name: recipeName
        });

        return _.last(variations);
    }
});