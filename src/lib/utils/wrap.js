import { Moment } from '../moment/constructor';
import { Duration } from '../duration/constructor';
export { wrap, durationWrap };

function wrap(fn) {
    return function() {
        var m = arguments.length ? new Moment(this) : this;
        return fn.apply(m, arguments);
    };
}

function durationWrap(fn) {
    return function() {
        var m = arguments.length ? new Duration(this) : this;
        return fn.apply(m, arguments);
    };
}
