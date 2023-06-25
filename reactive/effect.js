"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trigger = exports.track = exports.effect = void 0;
var activeEffect;
var effect = function (fn) {
    var _effect = function () {
        activeEffect = _effect;
        fn();
    };
    _effect();
};
exports.effect = effect;
var targetMap = new WeakMap();
var track = function (target, key) {
    var depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    var deps = depsMap.get(key);
    if (!deps) {
        deps = new Set();
        depsMap.set(key, deps);
    }
    deps.add(activeEffect);
};
exports.track = track;
var trigger = function (target, key) {
    var depsMap = targetMap.get(target);
    var deps = depsMap.get(key);
    deps.forEach(function (effect) { return effect(); });
};
exports.trigger = trigger;
