/**
 *
 * Created by fgusmao on 2/27/2016.
 */

describe('A page with backbone', function() {
  it('should have access to Underscore', function() {
    expect(window._).toBeDefined();
    expect(window._.VERSION).toBeDefined();
  });
  it('should have access to Backbone', function() {
    expect(window.Backbone).toBeDefined();
    expect(window.Backbone.Model).toBeDefined();
    expect(window.Backbone.Collection).toBeDefined();
    expect(window.Backbone.View).toBeDefined();
  });
});
