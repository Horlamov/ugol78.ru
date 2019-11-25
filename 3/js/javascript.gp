function geoplugin_request() { return '188.242.130.28';} 
function geoplugin_status() { return '200';} 
function geoplugin_credit() { return 'Some of the returned data includes GeoLite data created by MaxMind, available from <a href=\'http://www.maxmind.com\'>http://www.maxmind.com</a>.';} 
function geoplugin_delay() { return '2ms';} 
function geoplugin_city() { return 'St Petersburg';} 
function geoplugin_region() { return 'St.-Petersburg';} 
function geoplugin_regionCode() { return 'SPE';} 
function geoplugin_regionName() { return 'St.-Petersburg';} 
function geoplugin_areaCode() { return '';} 
function geoplugin_dmaCode() { return '';} 
function geoplugin_countryCode() { return 'RU';} 
function geoplugin_countryName() { return 'Russia';} 
function geoplugin_inEU() { return 0;} 
function geoplugin_euVATrate() { return ;} 
function geoplugin_continentCode() { return 'EU';} 
function geoplugin_latitude() { return '59.8944';} 
function geoplugin_longitude() { return '30.2642';} 
function geoplugin_locationAccuracyRadius() { return '5';} 
function geoplugin_timezone() { return 'Europe/Moscow';} 
function geoplugin_currencyCode() { return 'RUB';} 
function geoplugin_currencySymbol() { return '&#1088;&#1091;&#1073;';} 
function geoplugin_currencySymbol_UTF8() { return 'руб';} 
function geoplugin_currencyConverter(amt, symbol) { 
	if (!amt) { return false; } 
	var converted = amt * 64.3825; 
	if (converted <0) { return false; } 
	if (symbol === false) { return Math.round(converted * 100)/100; } 
	else { return '&#1088;&#1091;&#1073;'+(Math.round(converted * 100)/100);} 
	return false; 
} 
