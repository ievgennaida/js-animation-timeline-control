"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var animation_timeline_1 = require("./../lib/animation-timeline");
var asserts_1 = require("./asserts");
describe('TimelineStyleUtils', function () {
    describe('Draggable', function () {
        it('Keyframe is draggable by default', function () {
            var globalStyle = {
                rowsStyle: {
                    keyframesStyle: {},
                },
            };
            var keyframeStyle = { shape: animation_timeline_1.TimelineKeyframeShape.Rect };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.keyframeDraggable(keyframeStyle, null, globalStyle), true);
        });
        it('Keyframe draggable', function () {
            var globalStyle = {
                rowsStyle: {
                    keyframesStyle: {},
                },
            };
            var keyframeStyle = { draggable: true, shape: animation_timeline_1.TimelineKeyframeShape.Rect };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.keyframeDraggable(keyframeStyle, null, globalStyle), true);
        });
        it('Keyframe is not draggable', function () {
            var globalStyle = {
                rowsStyle: {
                    keyframesStyle: {},
                },
            };
            var keyframeStyle = { draggable: false, shape: animation_timeline_1.TimelineKeyframeShape.Rect };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.keyframeDraggable(keyframeStyle, null, globalStyle), false);
        });
        it('Keyframe row is not draggable than keyframe is not draggable', function () {
            var globalStyle = {
                rowsStyle: {
                    keyframesStyle: {},
                },
            };
            var rowStyle = { keyframesStyle: { draggable: false, shape: animation_timeline_1.TimelineKeyframeShape.Rect } };
            var keyframeStyle = { draggable: true, shape: animation_timeline_1.TimelineKeyframeShape.Rect };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.keyframeDraggable(keyframeStyle, rowStyle, globalStyle), false);
        });
        it('Keyframes are not draggable by general settings', function () {
            var globalStyle = {
                rowsStyle: {
                    keyframesStyle: {
                        draggable: false,
                    },
                },
            };
            var rowStyle = { keyframesStyle: { draggable: true, shape: animation_timeline_1.TimelineKeyframeShape.Rect } };
            var keyframeStyle = { draggable: true, shape: animation_timeline_1.TimelineKeyframeShape.Rect };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.keyframeDraggable(keyframeStyle, rowStyle, globalStyle), false);
        });
        it('Keyframes are draggable', function () {
            var globalStyle = {
                rowsStyle: {
                    keyframesStyle: {
                        draggable: true,
                    },
                },
            };
            var rowStyle = { keyframesStyle: { draggable: true, shape: animation_timeline_1.TimelineKeyframeShape.Rect } };
            var keyframeStyle = { draggable: true, shape: animation_timeline_1.TimelineKeyframeShape.Rect };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.keyframeDraggable(keyframeStyle, rowStyle, globalStyle), false);
        });
        it('Stripe is draggable by default', function () {
            var globalStyle = {
                rowsStyle: {
                    keyframesStyle: {
                        draggable: true,
                    },
                },
            };
            var rowStyle = { keyframesStyle: { draggable: true, shape: animation_timeline_1.TimelineKeyframeShape.Rect } };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.stripeDraggable(rowStyle, globalStyle), true);
        });
        it('Stripe is not draggable by row settings', function () {
            var globalStyle = {
                rowsStyle: {
                    keyframesStyle: {
                        draggable: true,
                    },
                },
            };
            var rowStyle = { stripeDraggable: false, keyframesStyle: { draggable: true, shape: animation_timeline_1.TimelineKeyframeShape.Rect } };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.stripeDraggable(rowStyle, globalStyle), false);
        });
        it('Stripe is not draggable by global settings', function () {
            var globalStyle = {
                rowsStyle: {
                    stripeDraggable: false,
                    keyframesStyle: {
                        draggable: true,
                    },
                },
            };
            var rowStyle = { stripeDraggable: false, keyframesStyle: { draggable: true, shape: animation_timeline_1.TimelineKeyframeShape.Rect } };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.stripeDraggable(rowStyle, globalStyle), false);
        });
    });
    describe('Row size', function () {
        it('Height is taken from row', function () {
            var globalStyle = {
                rowsStyle: {
                    height: 100,
                    keyframesStyle: {},
                },
            };
            var rowsStyle = { height: 50 };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.getRowHeight(rowsStyle, globalStyle), rowsStyle.height);
        });
        it('Height is taken from global settings', function () {
            var globalStyle = {
                rowsStyle: {
                    height: 100,
                    keyframesStyle: {},
                },
            };
            var rowsStyle = {};
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.getRowHeight(rowsStyle, globalStyle), globalStyle.rowsStyle.height);
        });
        it('Margin bottom is taken from global settings', function () {
            var globalStyle = {
                rowsStyle: {
                    height: 100,
                    marginBottom: 30,
                    keyframesStyle: {},
                },
            };
            var rowsStyle = {};
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.getRowMarginBottom(rowsStyle, globalStyle), globalStyle.rowsStyle.marginBottom);
        });
        it('Margin bottom is taken from row settings', function () {
            var globalStyle = {
                rowsStyle: {
                    height: 100,
                    marginBottom: 30,
                    keyframesStyle: {},
                },
            };
            var rowsStyle = { marginBottom: 43 };
            asserts_1.assert.equal(animation_timeline_1.TimelineStyleUtils.getRowMarginBottom(rowsStyle, globalStyle), rowsStyle.marginBottom);
        });
    });
});
//# sourceMappingURL=styleTests.js.map