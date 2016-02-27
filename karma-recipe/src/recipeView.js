/**
 * Created by fgusmao on 2/27/16.
 */

var app = window.app || {};
app.Views = app.Views || {};

app.Views.Recipe = Backbone.View.extend({
    template: Handlebars.compile($('#recipe-tmpl').html()),
    render: function() {
        var data = this.model.toJSON();

        this.$el.html(this.template(data));
    }
});