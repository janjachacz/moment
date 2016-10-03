export default function wrap(Type, fn) {
    return function() {
        var m = arguments.length ? new Type(this) : this;
        return fn.apply(m, arguments);
    };
}
