(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('雁峰区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"430406","properties":{"name":"雁峰区","cp":[112.6154,26.840602],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AA@@@A@@AAAA@@@AA@@AAAAA@AC@AA@@@@AA@@@@@@AA@@A@@A@@A@@@A@@A@@A@@AA@AAA@@@@@A@@@@AA@@@@@@@@@@@@@@AA@A@@@AAA@@@A@@AA@A@@@@@@@A@@@@@A@@AA@@@A@@@@@@@@ACGDC@ODCDCDADA@CBA@@CAAC@AAC@EDEFAFAF@F@DDDDNBFCDA@C@FDJNDD@D@FBDDBDDFHNTBBFF@DABADDDFFXNB@BBFBFDFDB@BBDD@F@D@B@D@B@D@@ADAB@BAB@D@@AD@B@@D@@@HBD@@@B@BBD@@@D@@@@@@@D@@@@@@@BA@@@@@A@A@@@AB@@A@A@@@A@@@A@A@@B@@A@@@A@A@@@@@A@@@A@@@AB@@A@@@A@@@@@@@A@@@A@@BA@@@A@@@@B@@@BA@@BA@@B@@@BA@@@@@@B@@@@@@AB@@@@@@@B@@@@A@@@@@@B@@@@@@@@@@AB@@@@@@@B@@@@@B@@@@@@AB@@@@@@@B@@@@@B@B@@@@@@@B@DADAFABA@@@@@AB@@@BA@@@@@@B@@A@@@@@@B@B@@@B@B@@@BAB@@@@@B@@@@@B@@@B@D@B@@@@@BA@@@@@@@@B@@@@@@@@@B@@@@@BA@@BA@@@@@@BA@@@@@A@@@A@@BA@@@A@@@A@@@A@A@@@@@@@@@A@@@@@@@A@@@@@A@@@@@C@@@A@@@A@A@A@@@A@@@A@@@@@AA@@A@AB@@@@AAA@G@EACAE@G@C@C@AAAAGCACACA@@@@A@A@A@A@@@A@@@A@A@@@@@@BA@A@@@@@@@ABA@@@A@@@CBA@A@A@@@ABA@@@A@@@A@@@A@A@@@A@A@A@@@A@@@@@C@AB@@A@@@A@A@@@A@A@@@E@@@A@AAA@@@A@@@A@A@@@AA@@@@A@A@@AA@A@@A@@A@@@AAA@@@A@"],"encodeOffsets":[[115308,27451]]}}],"UTF8Encoding":true});}));