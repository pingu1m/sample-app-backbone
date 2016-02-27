/**
 *
 * Created by fgusmao on 2/27/2016.
 */

var app = window.app || {};
app.Models = app.Models || {};

app.Models.Recipe = Backbone.Model.extend({
    defaults: function() {
        return {
            name: 'Unnamed',
            rating: 0,
            ingredients: [],
            instructions: [],
            dateAdded: Date.now()
        };
    },
    checkForIngredientType: function(propertyName) {
        var ingredients = this.get('ingredients');
        for(var i= 0, l= ingredients.length; i < l; i++) {
            var ingredient = ingredients[i];
            if(ingredient[propertyName]) {
                return true;
            }
        }
        return false;
    },
    containsNuts: function() {
        return this.checkForIngredientType('isNut');
    },
    containsEggs: function() {
        return this.checkForIngredientType('isEggs');
    },
    isVegetarian: function() {
        return this.checkForIngredientType('isVegetarian');
    }

});

