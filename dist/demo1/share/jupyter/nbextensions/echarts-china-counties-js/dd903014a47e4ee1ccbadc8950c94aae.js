(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('通州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320612","properties":{"name":"通州区","cp":[121.073828,32.06568],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@O@IA@@A@A@IA@BCBOBEBCBQLA@AB@@HHB@@@@@DNBB@F@@@@ADBF@B@@QFEBC@CC@@CBE@G@@@BFHN@@AB@@@BBBA@A@@@A@@@@@@@ADADA@ADA@@@BBADET@@ALCJ@DAD@BAFB@f@@BD\\@BAPB@BDDAADABA@A@@BABCD@B@@@BAB@@SMEAGCKCKC@A@@BASDCBE@A@@BAA@BCN@BBFBJCBCCCEAAA@A@@BCB@AADCJ@BAFAB@@E@E@BLBJBLD@TCDBH@H@CFA@ADABALAH@BBD@B@@LABB@BBD@D@@BDGD@J@FEA_@K@A@OAM@Q@A@CA@FE@A@@D@@@BA@@@@@@@@@A@@B@@AA@@@@@@B@@@@@@@A@@@@@@@@@ADB@@B@B@@BB@@CB@@A@@@@@@@@B@@@@@@@@@@@@@@@B@B@@@@@B@@@BB@@B@B@DAB@B@@B@F@B@B@BBBDDB@@@@@BBBDF@@BB@@DDBB@B@B@@SJ@@@BGBA@BD@@AB@D@@CA@@A@@@A@CCAAA@@A@@@AAB@@C@@@@@@DGC@@CFABC@CA@@A@@@@@AAECC@AAA@CCEA@@CCA@@@@@ABA@AB@@A@BB@@D@@@@BB@AB@BBB@F@B@DAB@FDDD@@B@@@B@@@@DB@B@@B@B@@@B@@BD@@@@@ABCDCF@@AF@@A@ABABIFADCB@@ABA@ADCDCF@@A@AAA@CA@@A@A@@@C@CA@@@@@BA@A@@B@@CA@@A@A@AA@BA@AA@@AB@@EBA@A@@DA@BBA@CB@B@@@@@BBDC@IFA@C@@@@@@@BF@B@D@@ABCAA@CBA@CBIIMOEEECIKEECCIGOOAAAAAAACACAECKAE@@AAAGEIAEEK@AACACCIACCIEKAECIIc@MAAYBqADRDFLTFFBD@DA@@BC@KBWDGBABAD@BE^DBFDJF@@FFB@FDB@B@HB@B@DAT@BB@@B@B@@AHD@BB@@@@BB@@BB@@@@BB@DBBBA@B@@@@@@@@@@@B@@@@BBABBBB@@@B@@@@@B@@@@@B@@BD@@@@@B@D@@@DB@@RD@@H@@@@B@@FB@AB@@@A@BABB@B@@@FAFAFAC@@C@@@@B@@AB@@@BA@@@A@@@@BBBBD@BDH@B@D@BB@@@@@BA@@@AB@@@B@B@B@DA@@D@DB@@BADA@@@@B@@@@A@@B@BB@@@BBB@@B@@@B@@A@@B@@@B@BA@@B@B@@@BB@B@B@D@@@B@@@B@D@@@@@D@@@@@B@@B@@B@@BB@@@B@D@@@@A@@BA@A@ABBD@@@@@@BB@@@BC@@AC@@B@@@BC@A@E@F\\@@B@BFB@@B@BA@@@@@@F@@F@BBJ@B@BB@B@@@B@AB@@@H@@C@@@AAA@@@E@@@@D@@@@C@@@@B@B@@@BBBBB@B@H@JAB@H@@@B@D@@BB@B@@@B@DBABA@@@@BBBBD@@AB@@@@A@A@A@A@A@IAE@C@A@A@BB@@BB@@DD@@BBBD@B@@AB@@@B@BAD@B@BB@@@@@@@@@B@B@@@B@@@BB@B@@@BB@@@@@B@B@F@@ABBA@AB@B@BADC@@@@BA@@D@@@BLBRBNBB@@D@BD@B@BF@@B@B@@@@@B@@@DA@@D@BA@@B@@@B@BAB@@ABC@A@@B@DBF@@@@BBDA@@@@@@B@B@@@@@@B@@AB@@@@BB@@@@D@@@@AB@@AA@@AB@@@@@@AA@B@@@B@@@BABAB@B@B@B@@A@@@@@@BBD@BAB@@@@@B@BBB@@@@@@@B@@@@DFBF@@DFBDFHFJBHBHBBB@@@B@BAB@B@BBD@@@BAB@@AB@D@D@D@DA@ADC@@@A@@@AC@AA@A@@BADA@@B@BBDAB@B@BA@@@B@@B@B@@B@@@B@@B@@B@@@B@B@@BH@ABA@@B@@A@@@@B@BD@@B@@C@@@@@@@C@@B@@DDABB@@B@B@@B@@@@A@@B@@@B@@@@BDC@@@A@BDB@BBA@DD@@@BAB@@@@@BABA@@@BBAD@@B@@BH@ABB@D@FA@@@A@@BADAB@@@@@@B@B@@@@@@@@F@@A@@B@B@@@@ADADABA@BB@@@@A@@B@@@BAB@@@A@@@B@BA@@@@@AB@@A@@@A@@B@@A@@@@DA@@BB@BA@@AAB@@A@@BB@BAB@B@@@A@BB@@@@B@@AD@@@@@@AD@@AA@@@@@B@@ABC@@D@@@@@BB@@@B@@D@@@AD@@@BB@@@@@HB@F@@D@B@@@BC@@B@@@A@@AB@@@@AB@@AB@@BD@@@B@@@B@ABB@@CB@@BB@@@B@@AB@@B@@@@@A@@@@@BB@@@@@D@@A@@@ADB@@@@DBAEBE@A@@@@D@B@B@@@B@@B@@B@@B@B@BC@@@A@@@@BB@@FB@@@@@@@@@@BA@@BFBB@F@D@D@D@@@B@B@D@B@@@D@DAB@D@@@D@B@B@F@@AB@@CB@D@@@B@BBB@@@B@@A@@B@BAB@B@BABA@@DCDB@BB@@@BAB@@DB@@@BB@BB@BADB@@BDBB@@BDBBD@B@D@DBD@BB@@B@F@@@D@@@@B@@@@BB@@@@@AB@@@@@@B@@B@D@B@@@@@B@B@BBB@@@BAB@@BB@@@B@@@B@@B@@@@B@B@@@B@@B@@@@B@@AB@@@@BB@B@B@@BB@BA@@BBBBDW@@F@F@FA@AB@@@A@B@@@B@@AB@@A@@B@B@@B@B@@B@@@@@BB@@@A@@B@@BB@@@@@@@@@B@@@@@@@@BB@@A@AB@@@@@@@@@@B@@@@B@BCDAA@BAAAA@@@@@B@@A@@@@B@@@@@@@@A@@BA@@A@@@@@@AAAB@@@@BBA@@BA@@@BBA@@AA@@B@B@@@@ABADBB@@A@BBA@A@@D@@@@@@B@@@BA@@@@BB@@@BA@@@@B@@@B@@B@@BA@@@@B@@@@B@B@@B@@@@@BBB@@A@@@BBB@@BA@@@@@AA@AAA@@@@@@@@A@@@@BAB@@B@@@@B@@@@A@A@@@@@@@A@@B@@@@@@@@A@@@@B@@AB@@@@A@ABAB@@A@BD@D@@@B@@@@@B@@@@@B@B@@@@@@AB@@AB@@A@@B@BB@@B@@B@@@@BB@@@A@@B@B@@@B@@@@@@AB@B@@AB@@@BA@C@@@B@@@AB@@@@A@@@@@A@@@A@@FAD@@@H@@CHBJ@R@XCJAB@jGVCB@F@LAPA@@NARC@@@B@@B@@@@B@@@BB@D@B@@@@@@ABC@@B@@@B@@@@AD@F@DBDBD@D@B@B@DABAB@DA@@D@B@@ADA@A@A@ABABAB@B@BABA@@DB@@B@BBBB@@NARAB@LBLBHBD@XBH@tB\\@P@JBB@D@F@F@F@FBB@B@J@BBBBD@@AB@BBB@BBF@BB@@@AB@B@@@B@B@DB@@B@B@B@FADA@@B@BB@@@B@@@@ABCDADAB@@BB@@BBB@D@B@@@BABAB@@AB@D@B@B@B@B@DBFAF@B@B@BADAJGLILGTGHAbECQNkHOsO@AAAACA@AAGA@AA@@A@@B@@@B@DC@A@@@A@@@A@@@AACAAA@@A@AAA@AACACAE@@@AA@@@BO@@@A@@@A@@@C@E@A@I@@@@UA@@@B@D@@@@CB@@A@E@E@ABE@EB@@C@O@A@@@@GC@A@EAG@CAEBM@QAG@E@CBE@G@CA@FGAAPE@G@AZO@iCU@QA@AA@@@]AM@@HA@CCA@A@CC@A@@@@BA@@@@AACC@@A@BA@@AEBAAA@@BA@A@@AIAA@A@@BA@@@AA@@A@@@@@A@AA@@@@@@@@@A@@@@@@@@A@@B@@@@@@@AAB@@A@@BAA@BC@A@@AA@A@@@AA@@@A@@@A@AA@@@A@A@@@@@A@@AAA@@AABA@@@@@AA@A@@AA@@@@@@AA@@@@A@@@AA@@A@@@A@@AAA@@@@@@@A@C@@AAAC@@A@AC@@A@CCBA@@@AG@@A@A@A@@A@@@BA@A@@A@@AA@@A@@@@@@AA@@BAA@@@A@@@@@@A@@@@@AA@@@A@@@@@@@AA@A@@AAAAAB@@@@BA@@AAA@@BA@AA@@@A@@@@AB@@@AA@B@@A@@AA@@@@A@@@B@@@@@B@@@@A@@@@@@@A@@@AA@@@BAB@@@@@@@@@AA@@AA@@AC@@@@@@@@@@@A@@AA@@A@@@AC@@@@@@A@@@A@@@@@A@@@@@@@A@@@@BA@@@@A@@ABA@@@@AB@@AABAA@@A@@A@@A@@AA@@@@AA@@@ASAC@K@@@@SBW@S@@@A@Q@GAGC@A@GKBMBE@EBSBA@C@CBUB@@CAE@EAC@O@E@C@I@EABC@@@E@@A@G@Bc@@A@@C@@@@@ABGD@D@D@F@@@DOF@@ED@@@BKB@@E@@@@@S@A@@@Q@AC@E@A@@AAA@AAE@C@@@@@@BE@@@@BC@@@@BA@A@ABC@CBA@@@E@@@@@@@E@A@@@C@C@A@@@A@A@@@A@A@A@@@GA@@@@AA@@AAA@ABA@@@@AA@@@@B@@A@@@ABA@@@CB@@A@@BA@@@AA@@AA@@K@@@A@@@AB@@A@@@AUD@@@AEBGBAA"],"encodeOffsets":[[123971,32627]]}}],"UTF8Encoding":true});}));