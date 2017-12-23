"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Generic ticker for Arbiter
var Ticker = exports.Ticker = function Ticker(_ref) {
    var symbol = _ref.symbol,
        ask = _ref.ask,
        bid = _ref.bid,
        last = _ref.last,
        low = _ref.low,
        high = _ref.high,
        volume = _ref.volume,
        _ref$timestamp = _ref.timestamp,
        timestamp = _ref$timestamp === undefined ? Date.now() : _ref$timestamp;

    _classCallCheck(this, Ticker);

    this.symbol = symbol;
    this.ask = Number(ask);
    this.bid = Number(bid);
    this.last = Number(last);
    this.low = Number(low);
    this.high = Number(high);
    this.volume = Number(volume);
    this.timestamp = new Date(timestamp);
};