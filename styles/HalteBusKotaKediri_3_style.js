var size = 0;
var placement = 'point';
function categories_HalteBusKotaKediri_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Halte Ahmad Dahlan':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(58,4,4,0.5725490196078431)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(173,131,222,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Halte Imam Bonjol':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(58,4,4,0.5725490196078431)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(68,150,222,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Halte Permata Hijau':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(58,4,4,0.5725490196078431)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(222,153,93,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Halte Semampir':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(58,4,4,0.5725490196078431)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(104,220,158,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Halte Semeru':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(58,4,4,0.5725490196078431)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(223,92,164,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_HalteBusKotaKediri_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Name");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_HalteBusKotaKediri_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
