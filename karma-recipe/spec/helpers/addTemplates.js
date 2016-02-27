/**
 * Created by fgusmao on 2/27/16.
 */

(function () {
    $body = $('body');
    for (var path in window.__html__) {
        $body.append(window.__html__[path]);
    }
}());
