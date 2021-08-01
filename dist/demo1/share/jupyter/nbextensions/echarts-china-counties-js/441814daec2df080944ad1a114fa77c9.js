(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('八公山区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"340405","properties":{"name":"八公山区","cp":[116.83349,32.631379],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AB@@BBC@@AA@C@ABA@AD@B@@ADBDA@A@@@@AA@AA@AAAA@A@@@A@A@@BA@CB@@AB@@AB@@@@A@@@AB@@AB@@AB@@A@@BAA@@@A@@AAC@A@@AA@@CCDIB@B@BADABCFCD@BBF@D@DADAB@BABCBCBC@IBC@ABAB@@AD@F@FBB@D@D@BADBDHFHFFHBH@BAB@BCDABIFAB@B@BBBBFHHDAB@FHDFBDFFCBDF@@BAFATGB@@@@AD@DA@@DAB@FCFA@AHEBEBGBE@CBG@EBABABEDCBAHEBBBB@@BB@@DDBBFHFFDDBAJEHE@AAAAB@@AACECCACCC@@NGA@FCHCBA@CJGJEHE@@AC@ACCEMCACAA@@AA@@A@@@A@AB@@@LF@@L@AE@AAA@AA@CC@AB@BA@A@@A@@@BACEB@@A@AAAA@@@A@A@A@A@@@@AA@A@A@CD@@A@@@@BABAB@AAA@@@@@@A@@@@@@@@AED@@@@AB@@A@@@A@C@C@B@BG@@@@@A@@@A@A@@CE@@CDAABABCBCBA@@BA@@AACACB@@EBABA@A@A@G@@D@B@D@@ADAB@B"],"encodeOffsets":[[119640,33391]]}}],"UTF8Encoding":true});}));