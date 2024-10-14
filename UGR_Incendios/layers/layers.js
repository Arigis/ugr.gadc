var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ArcGIS/World_Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'Open Street Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Regionres_2 = new ol.format.GeoJSON();
var features_Regionres_2 = format_Regionres_2.readFeatures(json_Regionres_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regionres_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regionres_2.addFeatures(features_Regionres_2);
var lyr_Regionres_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regionres_2, 
                style: style_Regionres_2,
                popuplayertitle: "Regiones",
                interactive: true,
    title: 'Regiones<br />\
    <img src="styles/legend/Regionres_2_0.png" /> Andina<br />\
    <img src="styles/legend/Regionres_2_1.png" /> Cono Sur<br />\
    <img src="styles/legend/Regionres_2_2.png" /> Metropolitana<br />\
    <img src="styles/legend/Regionres_2_3.png" /> Tropico<br />\
    <img src="styles/legend/Regionres_2_4.png" /> Valles<br />'
        });
var format_Municipios_3 = new ol.format.GeoJSON();
var features_Municipios_3 = format_Municipios_3.readFeatures(json_Municipios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_3.addFeatures(features_Municipios_3);
var lyr_Municipios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_3, 
                style: style_Municipios_3,
                popuplayertitle: "Municipios",
                interactive: true,
                title: '<img src="styles/legend/Municipios_3.png" /> Municipios'
            });
var format_Incendios20122024_4 = new ol.format.GeoJSON();
var features_Incendios20122024_4 = format_Incendios20122024_4.readFeatures(json_Incendios20122024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios20122024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendios20122024_4.addFeatures(features_Incendios20122024_4);
var lyr_Incendios20122024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendios20122024_4, 
                style: style_Incendios20122024_4,
                popuplayertitle: "Incendios 2012 - 2024",
                interactive: true,
                title: '<img src="styles/legend/Incendios20122024_4.png" /> Incendios 2012 - 2024'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_Regionres_2.setVisible(true);lyr_Municipios_3.setVisible(true);lyr_Incendios20122024_4.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_OSMStandard_1,lyr_Regionres_2,lyr_Municipios_3,lyr_Incendios20122024_4];
lyr_Regionres_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'regiones': 'regiones', 'COUNT_UPTE': 'COUNT_UPTE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Municipios_3.set('fieldAliases', {'UPTE_MUNIC': 'UPTE_MUNIC', 'regiones': 'regiones', 'AreaKm2': 'AreaKm2', });
lyr_Incendios20122024_4.set('fieldAliases', {'ID': 'ID', 'Fecha': 'Fecha', 'Lugar': 'Lugar', 'Lat': 'Lat', 'Lon': 'Lon', 'UPTE_Muni': 'UPTE_Muni', 'regiones': 'regiones', 'Evento_Ini': 'Evento_Ini', 'Evento_Fin': 'Evento_Fin', 'Area_Ha': 'Area_Ha', 'DescVegeta': 'DescVegeta', 'Pajonal_Ha': 'Pajonal_Ha', 'Arbustivo': 'Arbustivo', 'Bosque_Ha': 'Bosque_Ha', 'Cultivos_H': 'Cultivos_H', });
lyr_Regionres_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'regiones': 'TextEdit', 'COUNT_UPTE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Municipios_3.set('fieldImages', {'UPTE_MUNIC': 'TextEdit', 'regiones': 'TextEdit', 'AreaKm2': 'TextEdit', });
lyr_Incendios20122024_4.set('fieldImages', {'ID': 'TextEdit', 'Fecha': 'DateTime', 'Lugar': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'UPTE_Muni': 'TextEdit', 'regiones': 'TextEdit', 'Evento_Ini': 'DateTime', 'Evento_Fin': 'DateTime', 'Area_Ha': 'TextEdit', 'DescVegeta': 'TextEdit', 'Pajonal_Ha': 'TextEdit', 'Arbustivo': 'TextEdit', 'Bosque_Ha': 'TextEdit', 'Cultivos_H': 'TextEdit', });
lyr_Regionres_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'regiones': 'header label - visible with data', 'COUNT_UPTE': 'header label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Municipios_3.set('fieldLabels', {'UPTE_MUNIC': 'header label - visible with data', 'regiones': 'header label - visible with data', 'AreaKm2': 'header label - visible with data', });
lyr_Incendios20122024_4.set('fieldLabels', {'ID': 'hidden field', 'Fecha': 'header label - visible with data', 'Lugar': 'header label - visible with data', 'Lat': 'hidden field', 'Lon': 'hidden field', 'UPTE_Muni': 'header label - visible with data', 'regiones': 'header label - visible with data', 'Evento_Ini': 'hidden field', 'Evento_Fin': 'hidden field', 'Area_Ha': 'header label - visible with data', 'DescVegeta': 'header label - visible with data', 'Pajonal_Ha': 'hidden field', 'Arbustivo': 'hidden field', 'Bosque_Ha': 'hidden field', 'Cultivos_H': 'hidden field', });
lyr_Incendios20122024_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});