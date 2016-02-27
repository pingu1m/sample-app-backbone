/**
 * Created by fgusmao on 2/27/16.
 */

var app = window.app || {};
app.Views = app.Views || {};

app.Views.Recipe = Backbone.View.extend({
    template: Handlebars.compile($('#recipe-tmpl').html()),
    initialize: function() {
        this.listenTo(this.model, 'change:note', this.updateNoteDisplay);

        return this;
    },
    render: function() {
        var data = this.model.toJSON();
        this.$el.html(this.template(data));
    },
    events: {
        'click .add-note': 'triggerAddNoteView',
        'click .cancel-note': 'triggerNormalView',
        'click .save-note': 'saveNote'
    },
    triggerAddNoteView: function() {
        this.$('.note-area, .save-note, .cancel-note').removeClass('hidden');
        this.$('.add-note').addClass('hidden');
    },
    triggerNormalView: function() {
        this.$('.note-area, .save-note, .cancel-note').addClass('hidden');
        this.$('.add-note').removeClass('hidden');
    },
    saveNote: function() {
        this.$('.note-area, .save-note, .cancel-note').addClass('hidden');
        this.$('.add-note, .note').removeClass('hidden');

        var note = this.$('.note-area').val();
        this.model.set('note', note);
    },
    updateNoteDisplay: function () {
        this.$('.note').text(this.model.get('note'));
    }
});