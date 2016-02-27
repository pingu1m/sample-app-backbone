/**
 * Created by fgusmao on 2/27/16.
 */

var FIXTURES = window.FIXTURES || {};

FIXTURES.server = {
    'recipes' : {
        'ok': [
            '200',
            {'Content-Type': 'application/json'},
            JSON.stringify([FIXTURES.recipes.noRestricions])
        ]
    }
};
