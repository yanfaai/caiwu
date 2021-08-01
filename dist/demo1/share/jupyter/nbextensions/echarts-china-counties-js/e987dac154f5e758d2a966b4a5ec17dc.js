(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('宁陕县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610923","properties":{"name":"宁陕县","cp":[108.314283,33.310527],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@CCA@@@C@CAA@C@@AA@@@@A@A@A@@@A@AAA@@A@ABC@A@A@A@A@E@@@A@AAAA@@AAAAAAAAA@AA@@@@@@C@A@@@@@A@@@A@C@@@@@C@@BA@C@ABAAA@ABA@A@@@@D@BABA@ABA@A@A@CBCBA@EBE@ABCB@BA@AD@BA@ABA@AB@@@D@@CBA@C@A@@BAB@@A@C@A@A@C@I@A@ABA@CD@@@BCD@@AB@BBADADA@@B@J@DBB@DDB@DD@@@B@@@BB@@B@@B@BA@@D@@@@@BA@@BA@@@@B@@BB@@@AB@@ADA@ABABAB@B@@AB@@ABA@@@@@@B@@@DBD@@DB@@@@A@AB@BA@A@ABAB@@@B@@CB@@AB@BAB@B@B@@BB@BA@@B@@@@@B@@@BBDAB@@BDDFBD@BBB@B@B@@@B@BABA@@@@@A@CBC@EBE@CBABAB@@@B@@CB@BEB@@@B@@@@@B@@A@@@CBA@AB@@@@E@ABA@A@CBG@A@A@A@@BA@@B@@ABAB@BAB@BAD@B@@@BBB@B@B@@D@@@BBB@BB@@D@B@B@@@@BABCDC@A@CB@@A@AB@BA@A@@@A@@@ABA@AAABAAABCA@@CB@B@@@@EDA@ABABC@A@@@A@A@@@@@AA@@A@@AAAAAC@@@AAAACA@CA@A@AA@AA@A@AAA@AAA@AB@@@@AACAA@A@@AA@@@@CA@@@CA@@AC@@A@@@ABA@@BA@A@@BA@EDA@AB@@ADABA@@@C@EBC@A@ABC@@@A@@BA@@@AAA@@@A@AB@@@@A@@@@@AA@@@BA@@@C@@@A@AAAAC@E@@BABAB@@A@@@AB@BC@A@CB@@A@A@A@AB@@@@AB@@@B@D@B@@@@@@AAA@C@@@@@ABABCBCBABA@@@ABA@C@@@@BABA@@@A@@@AB@@A@A@A@@BE@AAC@AAA@AAE@@@ABA@AAA@C@A@ABA@A@A@EBA@A@A@AA@@CB@@AAA@@BABA@@BA@C@@BABADABC@A@A@@@AB@@@D@B@@@B@@A@@AA@B@@AA@@@AB@@A@@AA@A@AB@@ABA@E@C@@@@@ABABADAB@@@B@@@B@@@@B@BB@@BB@BBB@B@BBB@@@B@B@B@@BB@DB@BBBDBFDBBDB@D@BB@@B@@A@A@@@ADA@AB@B@@@BB@@BB@@AD@@@B@DA@@B@F@B@@AB@@AFAF@B@B@@@B@@@@ADAB@@B@@BB@AB@@@BA@@@AAAA@@@A@CA@@AA@AB@@ABAB@@@B@B@@@BAB@@@@@@B@@@B@@@DA@@@@@@B@@BBD@D@@@BC@@BABA@@BEB@BEDADAB@DA@@BAB@@BBBB@@@@EB@B@BA@@@AAA@AEA@@AAAC@@AA@AA@C@@A@@@CAA@CBAAC@@@A@@AA@A@A@A@C@C@A@AA@ABAA@@A@@AA@A@AAA@AA@AA@AAC@@@ACAAAA@CAC@A@C@@@CBA@C@CBCBA@A@A@CAA@@@@@A@ABEBCBAAA@@@@B@B@@A@@@A@A@@@ABA@C@C@A@E@@@ABC@@@A@C@CAA@CAA@A@@@CA@@AA@@A@A@A@E@C@C@@@A@@@E@AAAAACAAAA@@CCGCAAA@@@I@@@@B@BAD@@@D@@BBBB@BBB@@@@@@GAA@@@@@@@BD@@@B@BAB@FA@AD@@AB@@@B@@@@C@A@CACAA@A@AA@A@@ACB@@@@A@C@C@CBA@CBAB@BAB@@A@@@A@@AA@@A@A@@@A@CBEBA@A@BB@BA@@BA@@@AA@@C@A@@@@@ABB@@BCL@BABAB@DAJBBBD@DBB@D@@B@@BB@@B@BB@@BHDBB@@BB@@B@@@@@DBB@@ABB@@B@@B@B@@@DA@@DCBAB@@@BDBB@B@@@@A@@B@@@BBBBBBB@BBB@@BB@B@BA@BB@B@@@BBB@B@@@B@@B@B@@@BDD@BBB@BHHBDB@@B@BB@B@BB@BB@@@B@@@D@BADBB@B@B@@@@@@D@BDB@BB@@@BB@@B@BBBB@@@BAD@B@DBB@B@F@@@BABCDA@@@A@@@A@A@A@CB@@A@@B@FA@@BC@A@@@@BB@B@F@@@DBBBB@BBFBB@BD@@DDB@B@F@@@B@DFDDDB@@BB@@JCB@BAD@@@@@BA@@@@@BB@@@@AB@@ABA@@@C@A@@@@BA@@BB@@B@DCDAB@BCBA@@@@@BBBFD@@@B@@@BAB@B@@BBDB@B@@@@@B@@CBAB@@@FBB@@@BB@@@B@@B@BB@BBBBDBBDDDB@@BB@BA@@BBBB@@BB@BAB@@@BBD@@B@@@B@@@B@@@BBDD@B@@@DABAD@@AB@@A@@BA@AB@B@B@DA@@D@@ABE@@BA@@@@F@F@D@BABC@@@AB@@@@A@A@C@A@@@CDC@@B@@@B@@@@@B@BA@@@A@A@A@@@A@A@@@@BA@@@ABA@AB@@C@AB@@A@@BC@@@A@@DA@@B@@ABA@@B@@@BAAA@@@@AA@AA@AA@AA@A@@@@@AAA@AABA@A@AB@@@@CBADABABCD@B@@ABBB@F@@@BA@@@ABA@@@@BAB@@@BA@CB@@@@@B@BA@CAEBA@A@A@@BA@@@A@AA@@@@AAAA@@@@CBABC@@BA@@BC@GD@@C@AB@B@@ABA@CBC@A@AB@@@B@D@B@B@BBB@BB@@@@B@B@BAB@D@@A@C@AB@@BB@B@BDBB@@B@@@@BB@@BB@@@B@BDDBB@@@BBD@@A@A@ABAB@DAB@B@B@@B@@B@@@DAD@B@@BB@DBB@@@BAB@B@@AB@@@B@BABABC@@@ABBB@B@@@BA@@B@B@B@B@@@BBBBBAB@@@BAB@D@BB@@B@@BBAB@B@@BDB@BB@@FFBB@B@BB@@@B@@@BB@B@@@B@@CB@BA@A@ABCDAB@B@@@B@@@BA@@@@B@@BB@@@B@BA@@B@B@B@@@BA@@@ABA@AB@BAB@@AB@@@@DB@B@B@@ABAB@@@B@@@D@@AB@BAD@B@@@B@@@@@@B@B@BBB@B@B@B@@@AD@DBB@@@B@B@BB@@B@BABAB@@@BB@BB@B@@BB@@@@AB@D@@@B@@@B@B@DA@@BABA@@BA@@B@B@@@@AB@@BB@DABAD@@@F@BAB@@@DADAD@BABA@@BA@@B@@@BAD@B@D@B@B@@BBBBBBBB@@@B@@BB@@BB@BBBBBBD@@DD@@@@ABADA@@BAB@BBBAB@BB@B@HB@@B@@BBD@B@@BB@@DDDBBBBBFD@@BBD@B@DBB@@@BB@@B@B@D@D@@@FAB@@@DAF@D@B@B@BABAFCDCBAD@B@BA@@BABABAB@BAB@B@DBBB@@@BBB@@BBBB@B@@BBB@B@@@B@B@BBB@BBBB@@@@BABADABAB@BAF@@@BAB@DA@ADA@@DC@@@@B@B@B@DBBB@BD@D@@@DABAB@@@DADBB@BBB@B@B@BBB@BAB@BA@@B@BAB@B@BBDB@@DBB@@@BB@@BB@@@@@B@D@@@BBBBB@BBB@B@BD@B@DCB@@@JCB@B@@@BBB@@@BAB@BA@@B@B@BD@@B@B@@BB@@B@@@BBB@D@@@@B@D@B@@@DAFAB@B@BBBAB@D@@@B@D@FBD@@B@B@@@BDDBDDDBBB@BB@@@BB@@B@@@BB@B@BB@@BDBB@BBBB@DB@@B@@B@@@D@BBD@@@@BBD@B@B@B@BBB@BBB@D@BBB@@BD@BDDBD@@@@B@BB@@BDBBB@@D@D@B@D@B@BAFAHAF@DAD@B@@@D@B@@@B@@B@@@@FFB@B@BBF@@BB@DBBDB@BBB@BBB@@B@DBB@@@B@@DDBBB@@@BBB@BBD@@BF@B@F@@@@@@B@@@FAD@@@BBBBB@@@@B@B@B@DAB@D@BAF@B@BBBADBD@B@D@BBF@BCBAB@@@@A@CBA@@@A@CBABA@ABAB@B@F@DAD@DA@@B@B@B@BA@AB@AABA@A@AB@BABCD@BADC@@BCBA@@@@D@J@B@@@@@BB@B@B@@BF@@@BBB@@B@BBBAB@B@@@BBB@BBB@DD@@D@@@FB@@B@BBBBB@BBB@BBB@BB@@D@B@@@B@BB@@BB@B@@@@BBBBBBBB@@DF@@D@B@@@BB@BB@DB@BD@B@BB@B@@DBBB@BB@B@BBB@DAF@BABBD@BB@@B@@@@B@@D@BB@BB@@@BBB@D@@@B@B@@@BABA@@BADAB@B@DA@@BAB@BAB@B@@@BABA@@BBB@D@B@BADA@@B@D@BAB@@@B@B@DBB@B@@@DCB@BAB@@A@@BBBAJB@@BADAB@DAD@B@D@@@@@AA@C@ABC@A@AB@BA@@@A@@BAB@D@@@DA@A@AB@@ABA@@@A@ADA@A@@@A@@@@BCDA@AB@@@B@BBB@@@B@DAD@D@D@@@@@BA@@@@B@BBBB@@HAD@B@B@B@@@@@@BB@@@@B@@B@B@BB@@@@@B@@@@@D@@BB@BA@@BADA@@BA@@B@B@BAB@@@@@@B@D@@BB@BD@@BBBBDBBB@DBB@@B@B@DBDBBB@@@BBB@@@BA@@BBB@@B@@BBB@@@BAB@B@BBB@BB@@A@@BB@@@@@D@@@B@B@@D@BBD@B@B@BBBB@B@@@D@@ABAF@D@B@@@@@DBBBB@B@@H@DBB@D@BBB@@@B@F@BB@@DBFBB@B@@@FBDDD@@BBDDFB@@BB@BABAB@@@BCB@@@D@B@B@BAB@@@B@B@BBB@@@@@BCB@B@B@B@BAB@B@@@B@B@B@B@B@@@D@@@B@DBFBB@B@DAB@BA@@B@DBB@@B@@BAA@@AA@@A@A@A@AB@@ABCB@DAB@B@D@@@D@D@DB@@@@BBDB@BB@B@B@D@BAB@B@@D@@BBBBB@BBF@BBD@DBB@B@@BDBDBBBB@@@B@BAB@BCB@BAB@@B@@@@FB@@DB@@B@F@BA@@BA@@@C@CBC@A@@AA@AAC@@B@@AAA@A@@AAAAAC@A@A@@BA@@@CDE@ABABA@@B@DA@@@@BA@@B@HCBABA@AB@@@BABBB@@ABABAB@BA@@B@B@@@@@AB@@@D@@BDBBDBBBDDB@D@B@HABA@@@@BB@@B@BB@BAB@@B@B@B@DB@@HD@@DB@@@@@@@@@B@@@B@@B@B@BAB@BABAB@BB@@B@@BB@FDBBJBDBB@D@D@@AB@BA@A@@@AB@B@F@@@@ABA@@@@@@@AAA@@@@@A@@BABA@A@@A@@AC@AA@@@A@@@@@A@@A@A@AA@@A@@@@A@A@@@ADAB@@@@ABE@@@AAA@@@AAA@A@C@@@@@AA@@@GAAA@@DABA@@@C@@BA@@BA@A@@@AB@BBBAD@@@D@@@B@B@@@B@BAB@@@DBDB@@DA@@DB@@BA@@BAD@@@@AD@DA@@BBB@DBD@@@BA@AB@DBB@BBBB@@BBB@BBD@D@@@B@@A@@@@BAD@BAB@B@D@@@B@B@BB@@D@@AB@D@B@@@DBB@B@DBD@BAB@BB@@BBBB@@@ADC@ABABA@@B@B@@A@A@A@ABA@@@AD@@@BAB@@ABAB@BABABA@@B@B@BB@@BAB@B@B@B@BAB@@@BAB@BA@A@AA@@A@@@CBA@@@A@AB@@ABAB@BAB@BA@A@@B@@@@ADABC@A@@BA@@B@@@@A@@AC@@@A@ACA@@CA@@AA@A@A@A@AB@AA@@BA@@@A@A@@BA@AA@@@A@@EA@@AAAAC@A@A@@BA@ABA@AA@@@CCEE@@B@AA@@AC@A@@AA@@CA@@A@@@@A@@B@@C@@@A@@@A@@AAA@@@@A@@@A@A@A@@@AA@BA@@@AA@@A@AB@@A@@AA@@@@AC@A@@EC@AA@@@@@A@A@@@A@C@A@@@A@A@@@@BABCBA@@BA@@BABA@A@ABA@A@A@@BA@@@E@@@A@@B@B@@@@BB@@AB@@A@A@AB@B@BA@@BAB@B@@@@ABA@A@CB@@ABA@@@A@A@C@C@A@@@@A@@AA@@A@@AC@@@@A@A@AA@@A@A@@@AA@AA@@@@AAAA@@AAC@C@@@CA@A@@@A@@@@A@A@C@@AA@@BA@AAA@@@BA@@@AAA@@AC@CAA@AAA@A@@AC@@@AAA@A@AA@AAAAA@@@A@@@A@@@CCAC@ACA@@ACAA@@@@CB@BA@AA@@ECAAAA@@A@A@AAAAAAAA@AA@@@EB@@@BA@A@A@A@@@@@A@@@ABA@@BA@C@A@A@C@A@A@A@A@@@ABA@@BCBCB@@ABA@@AA@A@CA@@AA@@AAA@@@ACAE@A@ADC@ABAB@@A@G@@B@@A@@B@B@B@BAB@BABA@AB@DB@@B@B@B@FBB@BBD@B@@@BA@@@A@A@@@AB@BADC@AB@@ABCDCBC@@B@B@BAB@@A@AAA@AA@ACA@@AA@A@@@A@@@A@A@AB@@A@C@A@CC@@AAAA@@AAA@@AA@AACAAAAC@@@@@A@A@@AA@@BC@@@AACAA@@@AAAAAAA@@@A@A@A@@@AA@@A@A@@@@CAA@AAC@AAC@@@AACA@@AA@A@@@@@CB@@CAEAA@A@C@A@AACA@AA@A@A@@GC@@AAA@AC@@C@@@@@CA@A@@AC@AAC@C@@CAA@CAA@@@A@@@AAABAB@@ABA@@@C@CAC@C@E@@@@A@@FC@@BA@@@ADCB@@@DBB@@@@@EEC@@AC@CCA@@@C@A@AC@@@A@@AAAA@A@@A@@@A@ABA@EF@DAB@@A@@@AACC@@A@A@@@ABA@E@@@A@A@AB@@A@@BA@A@CACAA@@@@@AA@A@@@A@@A@A@C@A@AAA@@@A@@@AB@@@BA@CBABA@AB@@@B@@@BA@@BA@@BA@@@@BCBA@A@@@C@A@@@@@AD@BAD@B@B@@A@AAA@A@GBA@@@A@GA@@CC@@A@A@@@A@A@A@@@A@@DA@ABA@ABAB@@A@AA@@C@@@A@A@A@@BA@A@AB@@A@EA@@CC@@@C@A@@@A@@AAC@A@AA@@@A@@B@@AB@A@CAA@@@@A@@@C@@@C@C@AAA@@A@@A@@@C@A@E@EAC@@@ABA@@DA@@BAB@@A@ADE@ABA@A@A@@AA@C@@AA@@A@A@EA@@@@AAAAAACAAA@@A@AA@ACCACAE@@@CAC@@AAAA@A@@A@A@A@ACAACA@A@CA@@AEAA@AAA@AB@@@@AAC@@@A@AAA@@@AA@AAA@AGA@@CAAA@CCA@@A@BCAA@A@A@@@@@@@AB@@@B@DCBAB@DA@@@@DAB@BA@@@A@@DG@@BC@@@A@@AAAC@@@@@ABAB@@@@A@A@@AA@A@A@A@@@@@A@@CA@ABA@A@AAA@A@A@C@ABC@@@ABA@A@@@@D@B@B@@@@C@@BAB@@@@A@@@AEC@@@@A@A@AAA@AAAA@AAA@AA@AAAAA@@AAA@AAC@@@ABA@@A@ACA@@AAA@A@@ACC@AACA@@@AAA@C@@@A@A@A@A@A@@@AA@@@BAB@@@B@AE@@BA@A@A@@AC@A@@B@@A@A@A@A@@@C@A@AAC@A@A@@A@CA@@A@AA@A@A@ABA@A@@@@@A@A@@@A@@B@BABC@A@A@A@@AA@AA@@@BA@A@@@CAA@CBA@AB@AA@A@@@A@A@A@@@CBA@@@AAC@A@@@A@@AA@A@@AA@@AA@A@@@A@@@C@A@@BC@ABAB@D@FC@@BBB@F@@@BB@@@@B@F@F@B@@@B@@@CD@@@BC@@BB@@@@@BAFAD@B@DBFBF@D@DBB@B@B@B@DBB@BDB@B@BBHDB@DBB@B@FBB@B@BD@@DDB@@B@@@BBBADB@@@@@F@B@DAB@FAB@B@@@B@B@B@DADBD@B@DAB@@@D@@@DAB@BABAB@BCB@BA@@A@@A@A@A@AAAA@@A@@@AB@DADABAB@DEB@B@DCDA@ABB@AB@@@B@@AB@BAFC@@BABAB@@@B@@@@@@A@@@A@@@AAA@AA@CB@@A@@C@@A@C@@AAAAAAA@C@@CAA@A@AB@@A@A@A@A@A@ABAA@BA@A@@@A@A@A@A@C@AB@@A@@@@A@@@A@@A@@A@A@@@AAA@@A@AAA@A@C@A@A@@A@@@@@AAAAA@ABABA@@@C@@CA@@@A@A@@E@C@A@A@AC@@BA@@@A@A@@@A@@A@AA@ACA@AAA@AAC@@A@A@CBA@C@E@A@ABC@@@A@@@AAAEA@AA@AA@A@@BA@AA@@C@AB@A@@@@ACA@A@ABA@@@CAAAA@AA@AAAAA@A@@B@BA@@@AAADA@@@C@@@@@ABA@C@@AAAC@A@C@@@@@AAC@AAA@AACAA@A@@A@@@E@AAA@CACAA@A@A@@@A@@@AACACAA@AC@A@A@C@@@@DA@@B@B@@@D@@@@A@A@@@@DEBA@@DAB@D@DAB@B@@ADABABAB@BA@@BAB@BABAB@B@@@BC@@BAB@@AB@BA@AB@@A@@@CB@@A@@@ABA@ABA@A@@@A@@FCBAB@B@D@D@@AB@BAB@BABAB@B@@AB@BAD@BAH@AAAAAAA@@AA@C@A@AAACAA@B@@ABABA@A@@@@@AAA@@@IA@@A@@@A@@@A@@@@AA@A@C@A@ABA@@ACBA@AA@@C@@@A@C@@@A@@@AAA@ABA@@AA@@@@@A@AB@@CBA@ABCBA@A@ABA@ABAB@@@@A@A@CCA@@@ABC@CBA@A@A@AAA@@@AAAAA@@@C@A@AAE@@@@@CB@@@@C@CAA@AA@@A@CAA@A@CAA@A@A@@A@A@@AAAA@@AA@@C@@@AAA@@@AACC@@ACA@CBA@A@E@@A@@AC"],"encodeOffsets":[[111133,33929]]}}],"UTF8Encoding":true});}));