/*
 * BRUSH - read / write Size (px) and Hardness (%) of the current brush tool, for the panel's sliders.
 * Reuses $._ext_BPP.readToolOptions / writeToolOptions (jsx/brush-pen-pressure.jsx).
 * Tools without a brush (Move, Marquee...) report "none"; set() switches to the Brush tool first.
 */
$._ext_BRUSH = {
    BRUSH_KEY: stringIDToTypeID('brush'),
    DIAMETER_KEY: stringIDToTypeID('diameter'),
    HARDNESS_KEY: stringIDToTypeID('hardness'),

    // "size|hardness" (rounded), or "none" when the current tool has no brush
    get: function () {
        var self = $._ext_BRUSH;
        var options = $._ext_BPP.readToolOptions();
        if (!options.hasKey(self.BRUSH_KEY)) return 'none';
        var brush = options.getObjectValue(self.BRUSH_KEY);
        if (!brush.hasKey(self.DIAMETER_KEY) || !brush.hasKey(self.HARDNESS_KEY)) return 'none';
        return Math.round(brush.getUnitDoubleValue(self.DIAMETER_KEY)) + '|' +
            Math.round(brush.getUnitDoubleValue(self.HARDNESS_KEY));
    },

    set: function (size, hardness) {
        var self = $._ext_BRUSH;
        var options = $._ext_BPP.readToolOptions();
        if (!options.hasKey(self.BRUSH_KEY)) {
            app.currentTool = 'paintbrushTool';
            options = $._ext_BPP.readToolOptions();
        }
        var brush = options.getObjectValue(self.BRUSH_KEY);
        brush.putUnitDouble(self.DIAMETER_KEY, charIDToTypeID('#Pxl'), Math.max(1, Math.min(5000, Number(size))));
        brush.putUnitDouble(self.HARDNESS_KEY, charIDToTypeID('#Prc'), Math.max(0, Math.min(100, Number(hardness))));
        options.putObject(self.BRUSH_KEY, options.getObjectType(self.BRUSH_KEY), brush);
        $._ext_BPP.writeToolOptions(options);
        return 'ok';
    }
};
