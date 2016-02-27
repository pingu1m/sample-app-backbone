/**
 *
 * Created by fgusmao on 2/27/2016.
 */

describe('A page with backbone', function() {
  it('should have access to Underscore', function() {
    expected(window._).toBeDefined();
    expected(window._.VERSION).toBeDefined();
  })
});
