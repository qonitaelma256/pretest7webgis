ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([608182.321000, 9132581.448000, 614357.321000, 9138852.912500]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Zonajangkauan800m_1 = new ol.format.GeoJSON();
var features_Zonajangkauan800m_1 = format_Zonajangkauan800m_1.readFeatures(json_Zonajangkauan800m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Zonajangkauan800m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonajangkauan800m_1.addFeatures(features_Zonajangkauan800m_1);
var lyr_Zonajangkauan800m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonajangkauan800m_1, 
                style: style_Zonajangkauan800m_1,
                popuplayertitle: 'Zona jangkauan 800 m',
                interactive: true,
                title: '<img src="styles/legend/Zonajangkauan800m_1.png" /> Zona jangkauan 800 m'
            });
var format_Zonajangkauan400m_2 = new ol.format.GeoJSON();
var features_Zonajangkauan400m_2 = format_Zonajangkauan400m_2.readFeatures(json_Zonajangkauan400m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Zonajangkauan400m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonajangkauan400m_2.addFeatures(features_Zonajangkauan400m_2);
var lyr_Zonajangkauan400m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonajangkauan400m_2, 
                style: style_Zonajangkauan400m_2,
                popuplayertitle: 'Zona jangkauan 400 m',
                interactive: true,
                title: '<img src="styles/legend/Zonajangkauan400m_2.png" /> Zona jangkauan 400 m'
            });
var format_HalteBusKotaKediri_3 = new ol.format.GeoJSON();
var features_HalteBusKotaKediri_3 = format_HalteBusKotaKediri_3.readFeatures(json_HalteBusKotaKediri_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_HalteBusKotaKediri_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HalteBusKotaKediri_3.addFeatures(features_HalteBusKotaKediri_3);
var lyr_HalteBusKotaKediri_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HalteBusKotaKediri_3, 
                style: style_HalteBusKotaKediri_3,
                popuplayertitle: 'Halte Bus Kota Kediri',
                interactive: true,
    title: 'Halte Bus Kota Kediri<br />\
    <img src="styles/legend/HalteBusKotaKediri_3_0.png" /> Halte Ahmad Dahlan<br />\
    <img src="styles/legend/HalteBusKotaKediri_3_1.png" /> Halte Imam Bonjol<br />\
    <img src="styles/legend/HalteBusKotaKediri_3_2.png" /> Halte Permata Hijau<br />\
    <img src="styles/legend/HalteBusKotaKediri_3_3.png" /> Halte Semampir<br />\
    <img src="styles/legend/HalteBusKotaKediri_3_4.png" /> Halte Semeru<br />' });
var group_group1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'group1'});

lyr_OSMStandard_0.setVisible(true);lyr_Zonajangkauan800m_1.setVisible(true);lyr_Zonajangkauan400m_2.setVisible(true);lyr_HalteBusKotaKediri_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Zonajangkauan800m_1,lyr_Zonajangkauan400m_2,lyr_HalteBusKotaKediri_3];
lyr_Zonajangkauan800m_1.set('fieldAliases', {'FID_dissol': 'FID_dissol', 'Name': 'Nama Halte', 'FID_Penggu': 'FID_Penggu', 'NAMZON': 'Jenis Zona', 'Luas_m2': 'Luas (m2)', });
lyr_Zonajangkauan400m_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Export': 'FID_Export', 'ObjectID': 'ObjectID', 'FacilityID': 'FacilityID', 'Name': 'Nama Halte', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', 'Luas': 'Luas', 'FID_Penggu': 'FID_Penggu', 'NAMZON': 'Jenis Zona', 'Jenis_area': 'Jenis_area', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas_m2': 'Luas (m2)', });
lyr_HalteBusKotaKediri_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'id': 'id', });
lyr_Zonajangkauan800m_1.set('fieldImages', {'FID_dissol': 'TextEdit', 'Name': 'TextEdit', 'FID_Penggu': 'TextEdit', 'NAMZON': 'TextEdit', 'Luas_m2': 'TextEdit', });
lyr_Zonajangkauan400m_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Export': 'TextEdit', 'ObjectID': 'TextEdit', 'FacilityID': 'TextEdit', 'Name': 'TextEdit', 'FromBreak': 'TextEdit', 'ToBreak': 'TextEdit', 'Luas': 'TextEdit', 'FID_Penggu': 'TextEdit', 'NAMZON': 'TextEdit', 'Jenis_area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas_m2': 'TextEdit', });
lyr_HalteBusKotaKediri_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'id': 'TextEdit', });
lyr_Zonajangkauan800m_1.set('fieldLabels', {'FID_dissol': 'hidden field', 'Name': 'inline label - always visible', 'FID_Penggu': 'hidden field', 'NAMZON': 'inline label - always visible', 'Luas_m2': 'inline label - always visible', });
lyr_Zonajangkauan400m_2.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'FID_Export': 'hidden field', 'ObjectID': 'hidden field', 'FacilityID': 'hidden field', 'Name': 'inline label - always visible', 'FromBreak': 'hidden field', 'ToBreak': 'hidden field', 'Luas': 'hidden field', 'FID_Penggu': 'hidden field', 'NAMZON': 'inline label - always visible', 'Jenis_area': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Luas_m2': 'inline label - always visible', });
lyr_HalteBusKotaKediri_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'REMARK': 'hidden field', 'id': 'hidden field', });
lyr_HalteBusKotaKediri_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});