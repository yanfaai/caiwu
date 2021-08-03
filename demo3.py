from PyQt5.QtGui import QFont
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5 import QtCore, QtWidgets
import os

from demo2 import Ui_windows
from pyecharts.charts import Bar, Pie
from pyecharts import options as opts
from win32com.client import Dispatch
from qtpandas.models.DataFrameModel import DataFrameModel
import pandas as pd
import shutil
import xlrd

class Window_(DataFrameModel):
    def __init__(self):
        super().__init__()

    def data(self, index, role=None):
        if role == QtCore.Qt.TextAlignmentRole:
            return QtCore.Qt.AlignCenter
        return DataFrameModel.data(self, index, role)
FONT=QFont('楷体',pointSize=14)
FONT.setBold(True)
class Ui_Form(Ui_windows):
    def __init__(self):
        # QtWidgets.QWidget.__init__(self)
        Ui_windows.__init__(self)  # 多继承，构造实例的时候，要继承2个父类
        self.move(10, 10)
        # self.resize(1455, 780)
        self.setFixedSize(1380,780)
        # super().setWindowOpacity(0.2)
        self.frame = QtWidgets.QFrame()
        self.GooLg = QWebEngineView(self)

    def setupUi(self):
        self.GooLg.setGeometry(QtCore.QRect(360, 30, 980, 520))
        self.tableView = QtWidgets.QTableView(self)
        self.tableView.setShowGrid(True)
        self.tableView.setFrameShape(self.frame.NoFrame)  # 设置外缘边框部显示

        self.tableView.setGeometry(QtCore.QRect(0, 30, 350, 520))

        self.horizontalLayoutWidget = QtWidgets.QWidget(self)
        self.horizontalLayoutWidget.setGeometry(QtCore.QRect(450, 690, 800, 61))

        self.horizontalLayout = QtWidgets.QHBoxLayout(self.horizontalLayoutWidget)
        self.horizontalLayout.setContentsMargins(0,0,0,0)

        self.pushButton_3 = QtWidgets.QPushButton('开始破解', self.horizontalLayoutWidget)
        self.pushButton_3.setToolTip('<font color=red>先破解了，再说！！！</font>')
        self.horizontalLayout.addWidget(self.pushButton_3)
        # self.pushButton_3.clicked.connect(self.vba_run)
        self.pushButton_3.clicked.connect(self.vba_call)
        self.comboBox_4=QtWidgets.QComboBox(self.horizontalLayoutWidget)
        self.comboBox_4.addItems(['管理费用明细合并','财务费用明细表合并','利润表合并'])
        self.horizontalLayout.addWidget(self.comboBox_4)
        self.comboBox_4.currentTextChanged.connect(self.union)

        self.comboBox_5=QtWidgets.QComboBox(self.horizontalLayoutWidget)
        self.comboBox_5.addItems(['Bar_sum','Pie_sum','内网'])
        self.horizontalLayout.addWidget(self.comboBox_5)
        self.comboBox_5.currentTextChanged.connect(self.uchar_)

        self.pushButton_2 = QtWidgets.QPushButton('下一页', self.horizontalLayoutWidget)
        self.horizontalLayout.addWidget(self.pushButton_2)
        self.pushButton_2.clicked.connect(self.next_)

        self.pushButton_4 = QtWidgets.QPushButton('返回上级', self.horizontalLayoutWidget)
        self.horizontalLayout.addWidget(self.pushButton_4)
        self.pushButton_4.clicked.connect(self.resc_)

        self.pushButton = QtWidgets.QPushButton('退出界面', self.horizontalLayoutWidget)
        self.horizontalLayout.addWidget(self.pushButton)
        self.horizontalLayout.setSpacing(50)
        self.pushButton.clicked.connect(self.exc)

        self.verticalLayoutWidget = QtWidgets.QWidget(self)
        self.verticalLayoutWidget.setGeometry(QtCore.QRect(450, 590, 800, 91))

        self.verticalLayout = QtWidgets.QHBoxLayout(self.verticalLayoutWidget)
        self.verticalLayout.setContentsMargins(0, 0, 0, 0)

        self.comboBox = QtWidgets.QComboBox(self.verticalLayoutWidget)
        if os.path.exists('单体'):
            self.comboBox.addItems(os.listdir('./单体'))
        else:
            QtWidgets.QMessageBox.information(self, '警告', '请返回第二页获取数据  !!!',
                                              QtWidgets.QMessageBox.Yes, QtWidgets.QMessageBox.No)
        self.comboBox.currentTextChanged.connect(self.pd_1)
        self.verticalLayout.addWidget(self.comboBox)
        spacerItem_1 = QtWidgets.QSpacerItem(30, 10, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.verticalLayout.addItem(spacerItem_1)
        self.comboBox_2 = QtWidgets.QComboBox(self.verticalLayoutWidget)
        self.comboBox_2.addItems(['内网', 'Bar', 'Pie'])
        self.comboBox_2.currentTextChanged.connect(self.charts)

        self.verticalLayout.addWidget(self.comboBox_2)

        spacerItem = QtWidgets.QSpacerItem(30, 10, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.verticalLayout.addItem(spacerItem)
        self.comboBox_3 = QtWidgets.QComboBox(self.verticalLayoutWidget)
        self.comboBox_3.addItems(['利润表', '管理费用明细', '财务费用明细表'])
        self.comboBox_3.currentTextChanged.connect(self.pd_1)
        self.verticalLayout.addWidget(self.comboBox_3)
        self.label_ = QtWidgets.QLabel('先单击破解按钮，单击后请稍等...',self)
        self.label_.setGeometry(QtCore.QRect(10, 670, 381, 30))
        self.QProgressBar = QtWidgets.QProgressBar(self)
        self.QProgressBar.setGeometry(0, 710, 250, 23)
        self.time = QtCore.QBasicTimer()
        self.QProgressBar.setValue(0)
        # self.QProgressBar.setRange(0,100)
        self.QProgressBar.setTextVisible(True)
        self.setp = 0


        # self.label_.setStyleSheet('font:12pt')
        # self.label_.setStyleSheet("font: 12pt \"Arial\";\n"
        #                          "font: 75 9pt \"Arial\";")
        self.label_2=QtWidgets.QLabel(self)
        self.label_2.setGeometry(10,0,1400,30)
        self.label_2.setFont(FONT)


    def resc_(self):
        self.hide()
        self.ui_ = Ui_windows()
        self.ui_.setUI()
        self.ui_.show()

    #
    def timerEvent(self, e):
        # global FONT
        if self.setp >= 100:
            self.time.stop()
            self.pushButton_3.setText('已破解保护')
            self.label_.setFont(FONT)

            self.label_.setText('OKey!! 请下一步操作!')

        else:
            self.setp = self.setp + 1
            self.QProgressBar.setValue(self.setp)

    def vba_call(self):  # 破解报表密码
        if self.time.isActive():
            # self.time.start(100,self)
            self.time.stop()
            self.pushButton_3.setText('开始破解')

        else:
            xls = Dispatch('Excel.Application')
            try:
                ur = os.getcwd() + '/pwd_1.xlsm'
                xls.Workbooks.Open(ur)
                self.time.start(10, self)
                xls.Run('looppwd')  # 宏名称 合并
                xls.Run('pwd_')  # 宏名称 单体

                self.pushButton_3.setText('停止')
                xls.Quit()
            except:
                QtWidgets.QMessageBox.information(self, '警告', '缺少破解环境及路径支持，请联系开发人员！！！',
                                                  QtWidgets.QMessageBox.Yes, QtWidgets.QMessageBox.No)
    def sheetinfo(self):

            book=xlrd.open_workbook(os.getcwd()+'/单体/'+self.comboBox.currentText())
            sheet=book.sheet_by_name('利润表')
            sheet_info=sheet.cell_value(1,0)
            sheet_data=sheet.cell_value(1,3)
            parse_data=xlrd.xldate_as_tuple(sheet_data,datemode=0)

            parse_year=str(parse_data[0])
            parse_Maoth=str(parse_data[1])

            return sheet_info,parse_year,parse_Maoth


    def union(self):
        DataFrame_=[]

        try:
            sheet_info = self.sheetinfo()
            for i in os.listdir(os.getcwd()+'/单体'):
                F=os.getcwd()+'/单体/'+i
                self.pd_2=pd.read_excel(io=F,sheet_name=self.comboBox_4.currentText()[:-2],nrows=59,header=2
                                        ,usecols='A,C,D',keep_default_na=True)
                DataFrame_.append(self.pd_2)
            DataFrame_=pd.concat(DataFrame_,axis=0)
            print(DataFrame_.columns)

            DataFrame_1=DataFrame_.groupby(list(DataFrame_.columns)[0],as_index=False,sort=False,axis=0).sum()
            DataFrame_1[list(DataFrame_1.columns)[0]]=DataFrame_1[list(DataFrame_1.columns)[0]].str.replace('[0-9’ ‘小计（）合一二三四.五、“”]','')

            DataFrame_1[list(DataFrame_1.columns)[1]]=DataFrame_1[list(DataFrame_1.columns)[1]]/10000
            DataFrame_1[list(DataFrame_1.columns)[2]] = DataFrame_1[list(DataFrame_1.columns)[2]] /10000
            DataFrame_1=DataFrame_1.round(2)
            DataFrame_1=DataFrame_1[DataFrame_1[list(DataFrame_1.columns)[2]]!=0]
            self.Module=Window_()
            self.Module.setDataFrame(DataFrame_1)
            self.tableView.setModel(self.Module)
            self.tableView.verticalHeader().setVisible(False)
            self.tableView.setColumnWidth(0,195)
            self.tableView.setColumnWidth(1,80)
            self.tableView.setColumnWidth(2,80)
            self.label_2.setText(' '*50+' '*10+self.comboBox_4.currentText()+'日期'+sheet_info[1]+'年'+sheet_info[2]+'月'+'    '+'作者：Tgky_Yan Fa ai')
            return DataFrame_1
        except:
            QtWidgets.QMessageBox.information(self, '警告', '先点击破解保护按钮 !!!',
                                              QtWidgets.QMessageBox.Yes, QtWidgets.QMessageBox.No)

    def pd_1(self):  # 单体


        try:
            info = self.sheetinfo()
            # info = self.sheetinfo()
            self.df = pd.read_excel('./单体/' + self.comboBox.currentText(), sheet_name=self.comboBox_3.currentText(),
                                    usecols='A,C,D', header=2, nrows=59, keep_default_na=True)
            self.df[list(self.df.columns)[0]]=self.df[list(self.df.columns)[0]].str.replace('[0-9’ ‘小计（）合一二三四.五、“”,]','')
            self.df[list(self.df.columns)[1]] = self.df[list(
                self.df.columns)[1]] / 10000
            self.df[list(self.df.columns)[2]] = self.df[list(
                self.df.columns)[2]] / 10000
            self.df = self.df.round(2)
            self.df = self.df.fillna('')

            self.df = self.df[self.df[list(self.df.columns)[2]] != '']
            self.df= self.df[self.df[list(self.df.columns)[2]] != 0]
            self.Module = Window_()
            self.Module.setDataFrame(self.df)
            self.tableView.setModel(self.Module)
            self.tableView.verticalHeader().setVisible(False)
            self.tableView.setColumnWidth(0,200)
            self.tableView.setColumnWidth(1,80)
            self.tableView.setColumnWidth(2,80)
            # self.tableView.resizeColumnToContents(0)
            # self.tableView.resizeColumnToContents(1)
            # self.tableView.resizeColumnToContents(2)
            self.label_2.setText(info[0]+' '*36+'视图: '+self.comboBox_3.currentText()+' '*25+'日期:'+info[1]+'年'+info[2]+'月')
            return self.df
        except:
            QtWidgets.QMessageBox.information(self, '警告', '先点击破解保护按钮 !!!',
                                              QtWidgets.QMessageBox.Yes, QtWidgets.QMessageBox.No)
        # self.tableView.horizontalHeader().resizeSection(0,220)
        # self.tableView.horizontalHeader().setMinimumSize(200,100)

    def charts(self):
        try:
            data_ = self.pd_1()
            if self.comboBox_2.currentText() == 'Bar':
                bar = (
                    Bar(init_opts=opts.InitOpts('1050px,555px', bg_color='skyblue'))
                        .set_global_opts(legend_opts=opts.LegendOpts(type_='scroll'),
                                         datazoom_opts=opts.DataZoomOpts(is_show=True, type_='inside'),
                                         toolbox_opts=opts.ToolboxOpts(is_show=True, orient='horizontal'),
                                         tooltip_opts=opts.TooltipOpts(trigger='axis',axis_pointer_type='cross'))
                       .add_xaxis(xaxis_data=list(data_[list(data_.columns)[0]]))
                       .add_yaxis(list(data_.columns)[1], list(data_[list(data_.columns)[1]]))
                       .add_yaxis(list(data_.columns)[2], list(data_[list(data_.columns)[2]]))
                    )
                bar.render('./SingTG.html')
                self.GooLg.load(QtCore.QUrl.fromLocalFile(os.getcwd() + '/SingTG.html'))

            elif self.comboBox_2.currentText() == 'Pie':
                pie = (
                    Pie(init_opts=opts.InitOpts('1050px', '555px', bg_color='skyblue'))
                        .set_global_opts(toolbox_opts=opts.ToolboxOpts(is_show=True),
                                         legend_opts=opts.LegendOpts(type_='scroll', is_show=True,
                                                                     orient='vertical',pos_left='left',
                                                                     item_gap=20,inactive_color='#cccccc'))
                        # .set_global_opts(opts.ToolBoxFeatureSaveAsImageOpts(type_='png',name='Tg',
                        #                                                     connected_background_color='skyblue',
                        #                                                     is_show=True,title='保存图PNG'))
                        # 重新设置全局 会覆盖前面的全局配置
                        .add(self.comboBox_3.currentText(),
                             data_pair=[z for z in zip(data_[list(data_.columns)[0]],
                                                        data_[list(data_.columns)[1]])],radius=['35%', '55%'])
                        .set_series_opts(label_opts=opts.LabelOpts(is_show=True, formatter='{@[0]}万元'))
                )
                pie.render('./TgPie.html')
                self.GooLg.load(QtCore.QUrl.fromLocalFile(os.getcwd() + '/TgPie.html'))
            else:
                self.GooLg.load(QtCore.QUrl('https://portal.jiugang.com/login.jsp'))
                self.label_2.setText('酒钢集团公司:  https://portal.jiugang.com/login.jsp')

        except:
            QtWidgets.QMessageBox.information(self, '警告', '数据被保护，请先单击破解按钮！！！',
                                              QtWidgets.QMessageBox.Yes, QtWidgets.QMessageBox.Yes)
            self.GooLg.load(QtCore.QUrl('https://www.jiugang.com'))
            self.label_2.setText('酒钢集团公司:  https://portal.jiugang.com/login.jsp')

    def uchar_(self):
        try:
            un_data=self.union()
            if self.comboBox_5.currentText()=='Bar_sum':
                self.bar = Bar(opts.InitOpts(width='1050px',height='550px',bg_color='skyblue',page_title='天工矿业公司'))
                self.bar.set_global_opts(datazoom_opts=opts.DataZoomOpts(is_show=True, type_='inside'),
                                         legend_opts=opts.LegendOpts(type_='scroll'),
                                         toolbox_opts=opts.ToolboxOpts(is_show=True, orient='horizontal'),
                                         tooltip_opts=opts.TooltipOpts(trigger='axis',axis_pointer_type='cross'))
                self.bar.add_xaxis(xaxis_data=list(un_data[list(un_data.columns)[0]]))
                self.bar.add_yaxis('本月实际', y_axis=list(un_data[list(un_data.columns)[1]]))
                self.bar.add_yaxis('累计实际', y_axis=list(un_data[list(un_data.columns)[2]]))

                self.bar.render('./BtgM_1.html')
                url_1=os.getcwd()+'/BtgM_1.html'
                self.GooLg.load(QtCore.QUrl.fromLocalFile(url_1))

            elif self.comboBox_5.currentText()=='Pie_sum':
                self.pie = Pie(opts.InitOpts(width='1050px',height='700px',bg_color='skyblue',page_title='天工矿业公司'))
                self.pie.set_global_opts(
                    legend_opts=opts.LegendOpts(type_='scroll', is_show=True, orient='vertical', pos_left='left')
                    , toolbox_opts=opts.ToolboxOpts(is_show=True))
                self.pie.add('本月数', data_pair=[self.z for self.z in zip(un_data[un_data.columns[0]],
                                                                        un_data[un_data.columns[1]])],
                             radius=['35%', '55%'])
                self.pie.set_series_opts(label_opts=opts.LabelOpts(formatter='{b}:{c}'))
                self.pie.render('./PtgM_1.html')
                url=os.getcwd()+'/PtgM_1.html'
                self.GooLg.load(QtCore.QUrl.fromLocalFile(url))
            else:
                self.GooLg.load(QtCore.QUrl('https://portal.jiugang.com/login.jsp'))
                self.label_2.setText('酒钢集团公司: https://portal.jiugang.com/login.jsp')
                # self.label.setText('  ' * 60 + '集团网站：https://portal.jiugang.com/login.jsp')

        except:
            QtWidgets.QMessageBox.information(self, '警告', '被加密，无法运行！\n先返回上页单击破解保护按钮 !!!',
                                              QtWidgets.QMessageBox.Yes, QtWidgets.QMessageBox.No)

            self.GooLg.load(QtCore.QUrl('https://portal.jiugang.com/login.jsp'))
            self.label_2.setText('酒钢集团公司: https://portal.jiugang.com/login.jsp')
            # self.label.setText('  '*60+'集团网站：https://portal.jiugang.com/login.jsp')

    def next_(self):
        try:
            info = self.sheetinfo()
            print(info)
            self.hide()
            from demo4 import Ui_Form
            self._gui = Ui_Form()
            self._gui.setupUi()
            self._gui.show()
        except:
            QtWidgets.QMessageBox.information(self, '警告', '先点击破解保护按钮 !!!',
                                              QtWidgets.QMessageBox.Yes, QtWidgets.QMessageBox.No)

    def exc(self):
        shutil.rmtree('./单体')
        shutil.rmtree('./合并')
        self.close()


if __name__ == "__main__":
    import sys
    QtWidgets.QApplication.setAttribute(QtCore.Qt.AA_UseSoftwareOpenGL)
    app = QtWidgets.QApplication(sys.argv)
    ui = Ui_Form()
    ui.setupUi()
    ui.show()
    sys.exit(app.exec_())


