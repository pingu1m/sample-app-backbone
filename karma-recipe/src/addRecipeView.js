/**
 * Created by fgusmao on 2/27/16.
 */
var app = window.app || {};
app.Views = app.Views || {};

app.Views.AddRecipe = Backbone.View.extend({
    template: Handlebars.compile($('#add-recipe-tmpl').html()),
    ingredientTemplate: Handlebars.compile($('#add-ingredient-tmpl').html()),
    instructionStepTemplate: Handlebars.compile($('#add-instruction-step-tmpl').html()),
    events: {
        'click .add-ingredient': 'addEmptyIngredient',
        'click .remove-ingredient': 'removeIngredient',
        'click .add-instruction-step': 'addEmptyInstructionStep',
        'click .remove-instruction-step': 'removeInstructionStep',
        'click .save-recipe': 'saveRecipe'
    },
    initialize: function () {
        if (!this.model) {
            this.model = new app.Models.Recipe();
        }
    },
    render: function () {
        var data = this.model.toJSON();
        this.$el.html(this.template(data));

        return this;
    },
    addEmptyIngredient: function () {
        this.$('.ingredient-list').append(this.ingredientTemplate());
    },
    removeIngredient: function () {
        $(evt.target).closest('.ingredient').remove();
    },
    addEmptyInstructionStep: function () {
        this.$('.instruction-steps').append(this.instructionStepTemplate());
    },
    removeInstructionStep: function () {
        $(evt.target).closest('.instruction-step').remove();
    },
    saveRecipe: function () {
        this.model.set('name', this.$('.recipe-name').val());

        // add and save ingredients
        var ingredients = [];
        this.$('.ingredient').each(function () {
            var ingredient = {};
            var $el = $(this);

            ingredient.quantity = $el.find('.quantity').val();
            ingredient.baseIngredient = $el.find('.base-ingredient').val();
            ingredient.modifier = $el.find('.modifier').val();

            ingredients.push(ingredient);
        });
        this.model.set('ingredients', ingredients);

        // Assemble and save instructions
        var instructions = [];
        this.$('.instruction-line').each(function () {
            instructions.push(this.value);
        });
        this.model.set('instructions', instructions);
    }
});
