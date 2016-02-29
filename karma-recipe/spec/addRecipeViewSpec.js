/**
 * Created by fgusmao on 2/27/16.
 */

describe('The add recipe view', function () {
    var addRecipeView;

    beforeEach(function () {
        addRecipeView = new app.Views.AddRecipe();
        addRecipeView.render();
        addRecipeView.$el.appendTo('body');
    });
    afterEach(function() {
        addRecipeView.$el.remove();
    });

    it('should have an editable field for name', function() {
        expect(addRecipeView.$el).toContainElement('input.recipe-name');
    });

    it('should allow a user to add ingredients', function() {
        expect(addRecipeView.$el).toContainElement('button.add-ingredient');

        addRecipeView.$('.add-ingredient').click();

        expect(addRecipeView.$el).toContainElement('.ingredient');
        expect(addRecipeView.$('.ingredient')).toContainElement('input.quantity');
        expect(addRecipeView.$('.ingredient')).toContainElement('input.base-ingredient');
        expect(addRecipeView.$('.ingredient')).toContainElement('input.modifier');
    });
    it('should allow a user to remove ingredients', function() {
        //addRecipeView.$('.add-ingredient').click();
        //addRecipeView.$('.remove-ingredient').click();

        //expect(addRecipeView.$el).not.toContanElement('.ingredient');
    });
    it('should allow a user to add instruction steps', function () {
        addRecipeView.$('.add-instruction-step').click();
        addRecipeView.$('.remove-instruction-step').click();

        expect(addRecipeView.$el).not.toContainElement('.instruction-step');
    });

    it('should update the model when clicking save', function () {
        // define recipe
        var recipeName ='Lasanha';
        var firstIngredient = {
            quantity: '400 ml',
            baseIngredient: 'water',
            modifier: ''
        };
        var secondIngredient = {
            quantity: '1 kilo',
            baseIngredient: 'massa',
            modifier: 'cozida'
        };
        var instructionOne = 'Boil water';
        var instructionTwo = 'Reduce heat and wait for 10 min';

        addRecipeView.$('.recipe-name').val(recipeName);

        // two ingredients
        addRecipeView.$('.add-ingredient').click();
        addRecipeView.$('.add-ingredient').click();

        var firstIngredientEl = addRecipeView.$('.ingredient').first();
        var secondIngredientEl = addRecipeView.$('.ingredient').last();

        firstIngredientEl.find('.quantity').val(firstIngredient.quantity);
        firstIngredientEl.find('.base-ingredient').val(firstIngredient.baseIngredient);

        secondIngredientEl.find('.quantity').val(secondIngredient.quantity);
        secondIngredientEl.find('.base-ingredient').val(secondIngredient.baseIngredient);
        secondIngredientEl.find('.modifier').val(secondIngredient.modifier);

        addRecipeView.$('.add-instruction-step').click();
        addRecipeView.$('.add-instruction-step').click();

        var firstInstructionEl = addRecipeView.$('.instruction-step').first();
        var secondInstructionEl = addRecipeView.$('.instruction-step').last();

        firstInstructionEl.find('.instruction-line').val(instructionOne);
        secondInstructionEl.find('.instruction-line').val(instructionTwo);

        addRecipeView.$('.save-recipe').click();

        expect(addRecipeView.model.get('name')).toEqual(recipeName);
        expect(addRecipeView.model.get('ingredients')).toEqual([firstIngredient,secondIngredient]);
        expect(addRecipeView.model.get('instructions')).toEqual([instructionOne,instructionTwo]);
    });
});
