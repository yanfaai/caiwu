(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('象州县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"451322","properties":{"name":"象州县","cp":[109.705065,23.973793],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAAA@@CC@AAA@AACAE@A@A@C@@@A@AB@@ABA@A@A@A@C@@@A@AB@BA@@BAD@@A@AB@@@DABABADADCBA@@@@@@A@GEACA@CC@ACEAAACGECCCACAA@G@A@IDIFABGFIDABCBCACBCHABAJAF@@BHBJLT@B@B@DBFBBABBD@BAB@B@BABAF@BAF@B@B@F@B@@ABCBCDA@ABE@AAA@ABCBGFCBA@C@@BBB@B@BA@@BA@AA@HABBBA@@DAB@@@B@B@B@@AB@BB@@B@B@@@B@BAD@@@B@@ADCAAB@B@BA@A@A@A@@@CDABA@@B@B@BA@ABGB@@ABAB@@A@@B@BA@@D@@A@A@C@@B@BA@CB@B@B@@@B@@@@@@A@@@@B@B@B@@@B@@@@@B@@@BBB@@BD@@@@AB@@@B@@B@@AF@@@@@@@AA@@@@@@@@BA@@@A@@BB@@@@@B@@@@@@@@@B@@@@BB@@B@@@B@BB@@BC@@@A@B@@@BB@@@B@@@@@@@@@@A@@@@B@@@@@B@@@@@@@AB@@@@@B@B@@@@@BB@@A@@B@@@@BBD@B@B@@BB@BBB@BBB@BCF@BBD@B@BAD@@@BA@@@@@@@BBB@B@BB@@B@@@B@@ABB@@B@@@@@B@@AB@B@BB@@@@@@B@@BB@@@B@B@@BB@@B@@@@@BA@@DB@@A@@@@BB@A@@B@@@@@@@B@@@@@BBB@@B@@DB@@@@@@B@@@@@BB@@B@@B@B@@@@@BB@@@A@@@@@@@A@@@AB@@B@@@@@B@@A@B@@B@@@@@@@@@@BA@@B@@@BA@@B@@@AA@ABABA@@@@B@@BB@@@@ABA@@@AA@@@@A@@B@@@@@B@@B@B@BABA@@BB@@@BBB@B@@BBBAB@@@B@B@BABBDC@ABA@@@ABAB@@@DAB@@@@@@BBBB@@@BB@@@ABAB@@@@@BD@@BA@B@BAB@@@B@@@@@B@B@D@@@@@BBAD@@@DBDF@@ABAD@B@B@@@@B@@@B@@@@@@@@@@BB@AB@@@B@@B@@@BB@B@@B@BA@@B@@BBB@@@B@@@BDD@BABA@AB@@ABAB@@C@@@@B@@AB@BA@@@@B@@BB@B@@A@@BA@@@@BAB@@C@AAA@AA@@@AA@A@@@A@@@AB@BD@@@AB@@B@@@BDB@@B@BB@@@ABAB@@@B@@@B@@@B@@@@@B@@@BB@@BD@@@BB@@@BB@@@@@@B@@@BAB@@@BB@B@@B@@BB@@@@AB@@@B@B@F@B@B@@AB@BA@@B@@B@@@B@B@@@@B@B@BB@@BDB@@@BB@@@@B@@B@@@BD@@@B@@@@@B@B@B@@BB@@B@@BAB@@BBBB@BBAB@@@@A@@B@BB@@B@@B@@B@@B@@B@B@@@D@@@BBBDB@@@B@@AB@@@B@@@BBB@D@B@D@B@@@BA@D@@@@@BA@A@@@C@A@A@@B@@L@F@DD@@B@@@BAB@B@@@B@BBBAB@@@B@@@@BB@@B@@@BB@@@B@BBB@@BDDB@@@@AB@B@BABA@@D@B@@@BADA@@B@BB@AD@@AB@B@@BBBB@@@@A@@@@B@@A@@@A@@B@@@B@@B@@@@BA@@D@@@@BB@@@@@A@@BBB@@A@@B@B@@B@B@BB@@@@@B@B@@BBBABB@@B@@BB@@AB@B@@BB@DA@B@@@@@BB@@B@@@BB@B@D@A@@@DJ@B@@@B@B@B@@@@@@B@BB@BBB@@BBDF@@@BB@@@@BBA@@@@BB@@@@@B@@@@A@@@@B@@@@B@@@@@B@AB@B@@@B@@@BA@@@BBA@BBA@BB@B@BB@B@@BB@@B@@A@A@BD@@BB@@ABB@@@@@BBB@@BD@@@@@@@@BBA@BB@A@@B@@@@B@@@@@@@@BB@@@@BB@B@B@DBA@B@@B@@@B@@@BA@@B@B@@BBB@@BBBA@@@@@C@@@@BA@@@DB@@@@@@ABA@@B@@A@@@BBBB@@A@@B@@@D@@B@B@@B@B@BABABAB@B@@BB@@@@B@@BB@@@DDAB@@BB@@@@B@@BB@B@B@B@@@B@B@BB@@@@A@@@@B@@A@@B@AA@@B@@@@BBDA@AB@@@@@B@B@@BBAB@@@BAB@B@B@@A@@B@@@@@@@@@B@@B@@@AB@@@@@@@B@@@@@@@B@@B@@B@@@@AB@@BBA@@B@@B@@@@B@@B@@@@B@BBB@B@@@B@@@@@BB@@B@BBB@@A@@BB@A@@B@@@BA@@@@DAB@@@BBB@@B@AB@B@@@@B@@@@B@@@@@BD@@B@BABABAB@BA@B@B@@B@@@@B@@@B@@@@B@BBB@B@@@@BBB@@@BB@@@@BB@@@DBB@DC@@B@B@B@@B@@B@@@B@@@BB@@B@@@B@@@DBB@@A@@B@@@BB@@D@@AB@B@B@@@B@@@BA@AB@@ABAB@@@F@@@@BD@@BB@@ABA@@@AD@@BAB@D@@@B@B@B@B@@@F@B@NAB@F@BBH@H@JB@@BDFBBBBHF\\RFDDFHLB@@@DFB@BDDAHA@@BABA@ABAB@BAB@@B@@BAD@@@@@BBB@BBD@D@B@BBB@B@B@D@BBB@@B@@BB@@@B@D@@@@BB@BAD@BB@@@@B@B@BBBB@DB@@@BB@BB@@B@B@@@D@D@B@B@BBBB@@BBB@B@@@B@@B@@@BBB@B@@@@@@A@@B@@@B@@@@@B@@@@@B@BBA@B@B@@B@@@@B@@@@BB@@@B@@ABADB@@BA@@BB@@@A@@@A@BBAB@B@@@BB@BB@@D@BAB@B@BBB@B@BAD@@A@A@@DA@A@@BABCBA@A@@B@B@@D@BB@DDDDFDB@B@B@B@BBB@BABA@@B@@@BAB@B@BBBBD@BBB@@@D@@@DBB@@@@BB@@@@@BBBB@@@B@B@@@@AB@@A@@@@@@@@@@D@@@B@BA@@@AF@B@B@@B@BBB@@@@@D@@@@@B@B@BB@@F@B@@@B@@@B@@@BAB@BAB@@@@@BD@B@@B@B@B@B@@@B@B@@@DA@@@AD@@@BBB@@BB@@AB@@@B@@A@@BA@@@@@@B@@B@B@DBB@@@@AB@@B@@BAB@B@@@@BBBBB@@B@B@B@@@BB@@BB@B@DB@@B@@@@B@@@@@@BB@@@@@B@@@@@B@@BB@@@@B@@@@@B@B@@@BAB@@@@@@@@@@B@BAB@@@@@B@BDB@@BBB@@@@@B@@AA@A@@@@AB@@A@@@@@A@A@@@@@@@@B@@@B@@@@@BB@@B@@@B@@B@@@@B@@BB@@@B@@B@@BBB@BAB@B@BC@A@AB@@AB@B@DA@@B@B@BB@@B@@A@@B@@A@@@@BA@@@A@@A@@@@@@A@@A@@@@@BA@A@@@@B@@@BAB@@@@@@A@@@@@@AA@@@A@@BA@@B@@ABA@@AAB@@A@@@@BC@@@A@@B@@@BE@ABCA@@@C@CA@@A@@@CB@ACA@@A@ADA@@@A@E@AA@B@@@@C@A@@@A@C@@@C@@BA@A@@BA@@@AA@@@@@@BA@ABA@@@C@@@A@@@@A@@@A@@AB@@A@A@@@AAA@CA@@@@@@@@BA@@@@@@@BA@@@AB@@@@@BAAAB@@@@@BC@A@A@A@@B@@@@@AA@@A@@A@A@A@@@@@A@@@@BA@AAA@@@@@@@A@@BC@A@@@@B@@@BAB@DAB@B@BAB@F@@@BB@ABC@@BA@@@ABA@A@@@A@AA@@ABAAA@@BA@C@A@@@A@A@@@AB@AABC@A@A@AB@BA@@B@@@@CBA@A@CBC@@BA@C@@AB@@@BA@@B@BAB@@AB@@@@AA@@@A@@B@@ABCBAAA@@@A@@A@@@@BA@@@@@A@@@@@@@ABBDAD@@@B@B@@A@@B@@@BABB@@BA@@@@B@@A@@@A@@@@A@@A@A@A@@@@@@A@A@@BAB@@A@@@@AAA@A@BA@A@@@AA@@AB@@AAAB@@A@ABA@A@A@@ACB@@A@@@A@@@A@@@@DAB@@E@@@A@@@@B@@A@@@@B@@@@@@@@A@@B@@@@@@B@A@@@@@@BA@@A@@@A@@@@@AAACCBA@AA@@@@@B@@@@BB@@@@@@@B@@@@@B@@@BA@@@@AA@AA@@ABA@@@@@@@A@@@@A@@@AA@AAAA@@AB@@@@A@AA@@A@@@A@@@ABAB@@A@@@@@@C@@@A@@@@@@@@@@AABA@@BA@AB@BA@@@@AA@AA@A@@@@A@AA@A@@AA@@A@@AA@C@A@A@@@@@A@@@@@@DD@@@BB@BB@@BAD@DBB@DBB@@A@AB@@@@A@@BABBDBB@B@@@@@@A@@BAB@B@@@@@D@@B@@@@B@@AD@@@BA@@@@@@@@ABA@@@@@AA@@@B@@AAA@@AA@@B@@@@A@@A@@@@A@@@A@@A@@@@B@@@@@@AB@A@B@@A@@B@B@A@@@@A@@A@@A@@@@@@BA@@@A@@@@@@B@@@@@@AB@@@BB@@@A@@@@@A@@@@@@@ABABABA@ABAB@@A@A@@B@@@@@@@@AB@@@@@B@BAB@BBB@@@BAB@@@B@B@@@@@BAB@@BB@@@@@@AB@D@@AB@BBB@BBB@@@@B@@@@@BB@F@@@B@B@B@@@@@B@@@B@@BDBD@@AB@@@B@BAB@B@DA@@B@F@BBB@@@BA@A@@@BBBB@@@B@@@D@B@BB@@@@@BB@@@AB@@@B@@BA@ABAB@@@BABB@@B@@@BB@@@@BB@@B@BA@@B@@@@@BA@A@@BB@@@A@@@@@A@A@@@@BAD@B@@@@A@A@@BA@@DCB@@@BA@A@@BAB@@@BA@@@BB@@B@@BA@@@BB@BBB@B@B@@@B@@@B@B@@BB@B@B@BBBBB@@@BB@@@@B@B@@B@@@@D@B@BA@AF@B@@A@@@@A@C@A@@ABABAB@@@B@B@@@@@BAB@@AB@@@@A@@B@@@@@B@@@@@@@@@BB@@@@B@B@B@@ABA@AB@@@@A@@B@BA@@@AB@@@B@DCBA@@@AB@@A@AAA@@AG@@AA@@@@A@@BA@@AA@@ADC@CDCBA@@@A@@@ABA@ABA@AB@@A@A@@@AB@@C@A@A@AAA@AAA@ABA@@@A@AB@@@AABA@@@A@@A@AB@@CACC@ABA@ABC@@@A@@BC@@@@DABABA@@B@B@B@DA@@A@A@@@AA@A@@BABBB@D@@A@A@@B@@@B@BAD@@AB@BAHC@@A@@C@AB@@ABAB@BAF@AA@A@ACC@@ABC@A@ABC@@@A@A@A@A@@@C@AB@@A@BA@ABABE@@@A@A@A@AAE@AC@A@@@@B@@AB@@ADA@@A@@@AAAA@@AAA@@A@A@CBA@CC@AAA@@A@AA@@@AAABA@AAAAA@A@A@@A@A@ABA@ABABC@ABCBABA@A@A@CAA@@AA@@AAAAAA@@@ACA@AA@A@@AA@@@A@@AA@@@C@A@@@A@ABA@@BA@A@A@A@AA@AA@@@@BA@EA@@AA@CBCB@BAB@BABA@@@CAAACC@@@A@A@BB@BBDE@A@AD@@@DDB@B@B@@A@AACA@A@AAA@A@@@@@AA@B@@A@@A@@@@A@@AA@@@AC@ABAACBC@A@A@A@A@@AA@@@AAAA@@A@@@ABA@AAA@AA@@A@@AAA@CCB@@@B@@@BAB@B@B@B@B@BA@AC@A@AAA@@A@@@@AAAB@@C@AA@@@A@A@@@C@@BAB@DAAA@C@CB@@A@A@AB@@ABA@A@A@@AAA@A@EBAB@BABCBA@A@AB@@A@AA@@B@@@BA@AB@@A@@DABA@A@@AA@@@C@A@@A@CDE@ABC@@BABADE@A@@AA@@AB@@A@@B@@A@@@A@@@@@A@@@A@A@@@@AA@@@@@A@@@@@ABA@C@AB@B@BA@@@A@A@@@AAA@@@A@A@@@@BA@@@A@@A@@@BA@@A@@@A@@A@@@@@@AAA@@@BA@@AA@A@@@@A@@@@@AAA@A@A@@@@B@@A@A@AB@@A@A@@@A@@B@B@BA@@@A@A@@AA@@AB@B@@@@@AAA@AB@@A@@@@A@@EC@ABA@@@AB@@@@@A@CBA@C@C@A@ABAD@@A@@@@A@AAA@AA@AA@@@@AA@AA@@AC@@@A@AA@@A@DA@@B@BABBBAB@B@DA@@B@BA@AAC@C@@AA@A@@BA@@@A@@@A@@@A@@@ABA@A@@AC@@@AA@@AAA@@CB@@@@A@@BC@A@@BA@AB@@AB@@@B@BA@@BA@ABA@ABCBCDA@A@@@@B@@B@@@@@A@@@A@@AA@AA@@ABA@@@AA@@AB@@A@AB@BA@@@A@@AAA@CBEA@A@A@@@A@AC@A@CAAAA@@A@@AACA@@ACA@@AAA@@AA@A@AB@@A@ABA@@A@@A@AAA@CB@@CBC@C@A@ABAAA@EB@@ABAB@B@B@BA@ABADA@AB@D@BAB@@AA@@AA@C@@AAA@@A@@E@@@A@@@AAC@C@A@@@@A@AAAA@@FAD@DAB@@AB@@@@A@A@@@A@A@A@A@@@A@@A@AA@AAAA@AA@A@CAAACA@@@A@@ACA@@AAA@C@AB@AABA@@@A@A@A@A@A@@BA@C@C@A@C@@CC@ABC@AAA@C@@@ABA@A@A@C@@BCCCAC@A@A@C@@@C@@@A@A@A@C@@DA@B@@DABA@A@@B@BAB@B@B@B@@A@A@A@@@@@A@@@A@@@@@A@@@@@@@A@@@A@@@A@A@A@@@AA@@@@AA@@@@A@AC@A@@@AA@@AC@@ACA@BCBCBA@A@@B@@A@A@@@A@A@A@AA@@@AACAACBAAA@@@AD@@C@ABAAABA@@@A@@AC@A@@@A@A@@@@@CAAAA@A@E@@@E@AAA@G@A@AAEAA@@AAFK@CBABEAA@A@ABA@@BA@AA@@@A@AC@AAA@@A@A@AB@BABC@AA@AAAA@@@CCA@A@A@A@@AB@DAJE@@BAB@@@C@@@CAAA@@ABA@A@C@A@@@@BA@@B@B@@A@ABA@A@AB@@AB@B@@A@@B@@AD@@AB@@C@A@CAA@A@EAA@C@CB@@@@@BC@@B@B@@@@@B@BABB@@@@B@@ABB@@B@@@D@@@B@@@B@@CB@@@A@B@@A@@D@@@B@@@@@BBB@@@@BBA@@B@@BB@@AB@@AB@@AB@B@@@@@@AB@B@@@B@B@B@@@@@@@@@B@@@@ABA@@@A@AB@@@@AB@@AB@@@BAD@@A@CBAB@@A@A@CBA@@BA@C@@B@@A@@@AB@@A@@@@@AB@@AA@@@@@BA@A@@@A@@@A@GAAAA@@@A@CBAAA@AAA@@BA@ABAB@@EA@BA@@@A@ECCAE@@BAB@@A@@@AAAAAAC@EBC@A@ABCAA@C@A@CA@@AB@@@B@@@BCD@B@BAB@@@D@@@D@B@DBDFDBB@BB@@BBBBB@B@@@B@@@B@BAB@@@BA@@BA@AB@B@@@BBB@B@BB@@B@@CBA@AB@BA@A@A@AB@@@@AB@DAB@@ADAB@@@@@B@@@B@@B@@@@B@@AD@B@@ABA@@@@BA@AAA@A@@@CD@@A@@B@B@B@BAB@DAB@BAB@B@BAD@@D@DBB@BBB@@B@@BB@BB@ABA@@B@BA@A@A@@@AAA@AAA@C@C@@@A@AB@@@BAB@BE@A@AD@@ABA@@@@B@B@B@B@B@@@BABA@ADC@@BA@@@A@A@C@@@A@@B@BA@A@@@@BA@C@@BA@@@@B@B@DBB@BBD@@@BB@@@B@B@B@B@B@@@@@D@@@B@B@@@B@B@@@BB@AD@DA@@@A@@BA@@D@@AF@D@DABBB@BAB@@@@@B@@@BAB@@@D@B@@@D@@BB@B@@@@@@@@@@B@@AB@B@BAB@@@B@@@B@@@B@@@B@@ABC@ABA@A@A@A@ABA@AB@BA@AB@@ABCA@@C@A@A@A@A@CDAD@@@B@BAB@B@B@BAB@B@@@B@@@BBD@BBB@B@B@B@BA@EDEFCBCBCBABA@C@@@A@A@EACAGAKGKGCCEAKCCAMCCACACAECECAAC@GAGAEBC@C@E@@@C@@@A@CAEACACCA@AAAACAAAAA@AAA@AACCCAACAAAECAAAAACAACGAE@A@@@AAMAECC@A@CCG@AAA@AAACACAEG"],"encodeOffsets":[[112159,24408]]}}],"UTF8Encoding":true});}));