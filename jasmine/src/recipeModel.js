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
            instructions: []
        };
    }
});

