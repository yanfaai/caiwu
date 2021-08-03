
import pandas as pd
from PyQt5.QtWebEngineWidgets import QWebEngineView

from pyecharts.charts import Bar, Pie
from pyecharts import options as opts
from qtpandas.models.DataFrameModel import DataFrameModel
from PyQt5 import QtCore, QtGui, QtWidgets

from demo1 import My_window
import os
import glob
import re
import shutil
import xlrd

FONT = QtGui.QFont('微软雅黑', 12, weight=10)
FONT.setBold(True)


class Window_(DataFrameModel):
    # def __init__(self):
    #     super().__init__()

    def data(self, index, role=None):
        if role == QtCore.Qt.TextAlignmentRole:
            return QtCore.Qt.AlignCenter
        return DataFrameModel.data(self, index, role)


class Ui_Form(My_window, QtWidgets.QWidget):


    def __init__(self):

        QtWidgets.QWidget.__init__(self)
        My_window.__init__(self)
        self.move(10, 10)
        # self.resize(1455, 780)
        self.setFixedSize(1380,780)
        self.brows = QWebEngineView(self)

        self.font=QtGui.QFont('微软YA')

        self.setWindowTitle("天工矿业财务数据(二级）可视系统")
        QtWidgets.QToolTip.setFont(QtGui.QFont('黑体',10))

    def setupUi(self):

        self.brows.setGeometry(360,40,950,600)

        self.table = QtWidgets.QTableView(self)
        self.table.setGeometry(QtCore.QRect(10, 40, 350, 600))
        self.table.setFrameShape(QtWidgets.QFrame.NoFrame)

        self.horizontalLayoutWidget = QtWidgets.QWidget(self)
        self.horizontalLayoutWidget.setGeometry(QtCore.QRect(10, 680, 1200, 80))

        self.horizontalLayout = QtWidgets.QHBoxLayout(self.horizontalLayoutWidget)
        self.horizontalLayout.setContentsMargins(120, 0, 0, 50)

        self.comboBox = QtWidgets.QComboBox(self.horizontalLayoutWidget)
        if os.path.exists('./合并'):
            self.comboBox.addItems(os.listdir('./合并/'))
        else:
            QtWidgets.QMessageBox.information(self,'警告','请返回第二页获取数据  !!!',
                                              QtWidgets.QMessageBox.Yes,QtWidgets.QMessageBox.No)
        self.comboBox.currentTextChanged.connect(self.pd_merg)
        self.horizontalLayout.addWidget(self.comboBox)

        self.comboBox_1=QtWidgets.QComboBox(self.horizontalLayoutWidget)
        self.comboBox_1.addItems(['内网','Bar_2','Pie_2'])
        self.comboBox_1.currentTextChanged.connect(self.char_)
        self.horizontalLayout.addWidget(self.comboBox_1)

        self.comboBox_3 = QtWidgets.QComboBox(self.horizontalLayoutWidget)
        self.comboBox_3.addItems(['管理费用明细', '财务费用明细表', '利润表'])
        self.comboBox_3.currentTextChanged.connect(self.pd_merg)
        self.horizontalLayout.addWidget(self.comboBox_3)

        self.comboBox_2 = QtWidgets.QComboBox(self.horizontalLayoutWidget)
        self.comboBox_2.addItems(['内网', 'Bar', 'Pie'])
        self.comboBox_2.currentTextChanged.connect(self.bar_)
        # self.comboBox_2.currentTextChanged.connect(self.char_)
        self.horizontalLayout.addWidget(self.comboBox_2)

        self.comboBox_4=QtWidgets.QComboBox(self.horizontalLayoutWidget)
        self.comboBox_4.addItems(['管理费用明细合并','财务费用明细表合并','利润表合并'])
        self.comboBox_4.currentTextChanged.connect(self.merg)
        self.horizontalLayout.addWidget(self.comboBox_4)

        self.pushButton_2 = QtWidgets.QPushButton('返回上页', self.horizontalLayoutWidget)
        self.pushButton_2.clicked.connect(self.return_)
        self.horizontalLayout.addWidget(self.pushButton_2)

        self.pushButton = QtWidgets.QPushButton('退出系统', self.horizontalLayoutWidget)
        self.pushButton.setToolTip('<font color=red>选择退出，不留痕迹</font>')
        self.pushButton.clicked.connect(self.esc)

        self.horizontalLayout.addWidget(self.pushButton)

        self.label = QtWidgets.QLabel(self)
        self.label.setGeometry(20,5,1490,30)
        # self.qcolor = QColorDialog.getColor() #调色板
        # red, green, blue, _ = self.qcolor.getRgb()
        # self.label.setStyleSheet("color:rgb({},{},{},255)".format(4, 15, 25))

        self.label.setFont(FONT)
    def cur_time(self):
        book=xlrd.open_workbook(glob.glob('./合并/*.xls')[0])
        sheet=book.sheet_by_name('利润表')
        cur_data=sheet.cell_value(1,3)
        cur_data=xlrd.xldate.xldate_as_tuple(cur_data,datemode=0) # 时间转换
        return cur_data


    def return_(self):
        self.hide()
        from demo3 import Ui_Form
        self._ui = Ui_Form()
        self._ui.setupUi()
        self._ui.show()

    def pd_merg(self):  # 合并
        try:
            date=self.cur_time()
            file=os.getcwd()+'/合并/'
            book=xlrd.open_workbook(file+ self.comboBox.currentText())
            sheet=book.sheet_by_name(self.comboBox_3.currentText())
            curr_date=sheet.cell_value(1,0)
            self.df_1 = pd.read_excel(file + self.comboBox.currentText(),
                                      sheet_name=self.comboBox_3.currentText(),
                                      usecols='A,C,D', header=2, nrows=59, keep_default_na=True)
            self.df_1[list(self.df_1.columns)[0]] = self.df_1[list(
                self.df_1.columns)[0]].str.replace('[（）0-9.一二三四五以：净亏损减小合计号填列 、“”*－-]','')
            self.df_1[list(self.df_1.columns)[1]] = self.df_1[list(
                self.df_1.columns)[1]] / 10000
            self.df_1[list(self.df_1.columns)[2]] = self.df_1[list(
                self.df_1.columns)[2]] / 10000
            self.df_1 = self.df_1.round(2)
            self.df_1 = self.df_1.fillna('')
            self.df_1[list(self.df_1.columns)[0]]=self.df_1[list(self.df_1.columns)[0]].str.strip() # 或者 .str.replace(' ','')
            self.df_1 = self.df_1[self.df_1[list(self.df_1.columns)[2]] != '']
            self.df_1 = self.df_1[self.df_1[list(self.df_1.columns)[2]] != 0]
            # self.df_1.drop_duplicates(subset=[list(self.df_1.columns)[1]],keep='first',inplace=True) #去重 对报表有副作用
            self.label.setText(curr_date+'  '*40+self.comboBox_3.currentText()+'视图'
                                                                              +'   '*20+'编制日期：'+''*10+str(date[0])+'年'+str(date[1])+'月')

            self.Module_1=Window_()
            # self.Module_1 = DataFrameModel()
            self.Module_1.setDataFrame(self.df_1)
            self.table.setModel(self.Module_1)
            self.table.verticalHeader().setVisible(False)
            self.table.setColumnWidth(0,180)
            self.table.setColumnWidth(1,80)
            self.table.setColumnWidth(2,80)
            # self.table.resizeColumnToContents(0)
            # self.table.resizeColumnToContents(1)
            # self.table.resizeColumnToContents(2)
            return self.df_1
        except:
            QtWidgets.QMessageBox.information(self,'警告','被加密，无法运行！\n先返回上页单击破解保护按钮',
                                              QtWidgets.QMessageBox.Yes,QtWidgets.QMessageBox.No)

    def merg(self):
        try:
            date=self.cur_time()

            data_list = []
            for i in glob.glob('./合并/*.xls'):
                if not re.search('.*新洲.*', i):
                    data = pd.read_excel(i, sheet_name=self.comboBox_4.currentText()[:-2],
                                         header=2, nrows=59, usecols='A,C,D',
                                         keep_default_na=True)
                    data_list.append(data)
            data_1 = pd.concat(data_list, axis=0)
            data_1[list(data_1.columns)[0]] = data_1[list(data_1.columns)[0]].str.replace('[（）0-9.一二三四五以：净亏损减小合计号填列 、“”*－-]','')
            data_1[list(data_1.columns)[1]] = data_1[list(data_1.columns)[1]] / 10000
            data_1[list(data_1.columns)[2]] = data_1[list(data_1.columns)[2]] / 10000
            data_2 = data_1.groupby(data_1.columns[0], as_index=False, sort=False, axis=0).sum()
            data_2 = data_2.round(2)
            data_2=data_2.fillna('')
            data_2 = data_2[data_2[list(data_2.columns)[2]] != 0]
            data_2 = data_2[data_2[list(data_2.columns)[2]] != '']
            data_2[list(data_2.columns)[0]]=data_2[list(data_2.columns)[0]].str.strip()
            # data_2.drop_duplicates(subset=[list(data_2.columns)[1],], keep='first',
            #                           inplace=True) # 去重 对于财务报表有副作用

            self.label.setText(str(date[0])+'年'+str(date[1])+'月： '+'天工矿业公司'+self.comboBox_4.currentText().replace('明细表',''))
            self.Module_1=Window_()
            # self.Module_1 = DataFrameModel()
            self.Module_1.setDataFrame(data_2)
            self.table.setModel(self.Module_1)
            self.table.verticalHeader().setVisible(False)
            self.table.setColumnWidth(0,150)
            self.table.setColumnWidth(1,80)
            self.table.setColumnWidth(2,80)

            return data_2
        except:
            QtWidgets.QMessageBox.information(self, '警告', '被加密，无法运行！\n先返回上页单击破解保护按钮 !!!',
                                              QtWidgets.QMessageBox.Yes, QtWidgets.QMessageBox.No)

    def bar_(self):
        try:
            TEXT = self.comboBox_2.currentText()
            self.data_2 = self.merg()
            if TEXT == 'Bar':
                self.bar=Bar(opts.InitOpts(width='1050px',height='550px',bg_color='skyblue',page_title='天工矿业公司'))

                self.bar.set_global_opts(datazoom_opts=opts.DataZoomOpts(is_show=True, type_='inside'),
                                         legend_opts=opts.LegendOpts(type_='scroll'),
                                         toolbox_opts=opts.ToolboxOpts(is_show=True,orient='horizontal'),
                                         tooltip_opts=opts.TooltipOpts(trigger='axis',axis_pointer_type='cross'))
                self.bar.add_xaxis(xaxis_data=list(self.data_2[list(self.data_2.columns)[0]]))
                self.bar.add_yaxis('本月实际',y_axis=list(self.data_2[list(self.data_2.columns)[1]]))
                self.bar.add_yaxis('累计实际',y_axis=list(self.data_2[list(self.data_2.columns)[2]]))

                self.bar.render('./Btg_.html')
                url_1=os.getcwd()+'/Btg_.html'
                self.brows.load(QtCore.QUrl.fromLocalFile(url_1))

            elif TEXT=='Pie':
                self.data_5=self.data_2
                # print(self.data_5.index)
                self.pie=Pie(opts.InitOpts(width='1050px',height='700px',bg_color='skyblue',page_title='天工矿业公司'))
                self.pie.set_global_opts(legend_opts=opts.LegendOpts(type_='scroll',is_show=True,orient='vertical',pos_left='left')
                                         ,toolbox_opts=opts.ToolboxOpts(is_show=True),
                                         tooltip_opts=opts.TooltipOpts(trigger='item'))
                self.pie.add('本月数',data_pair=[self.z for self.z in zip(self.data_5[self.data_5.columns[0]],
                                                        self.data_5[self.data_5.columns[1]])],radius=['35%','55%'])
                self.pie.set_series_opts(label_opts=opts.LabelOpts(formatter='{@[0]}万元'))
                self.pie.render('./Ptg_.html')
                url=os.getcwd()+'/Ptg_.html'
                self.brows.load(QtCore.QUrl.fromLocalFile(url))
            else:
                self.brows.load(QtCore.QUrl('https://portal.jiugang.com/login.jsp'))
                self.label.setText('  ' * 60 + '集团网站：https://portal.jiugang.com/login.jsp')

        except:
            QtWidgets.QMessageBox.information(self, '警告', '被加密，无法运行！\n先返回上页单击破解保护按钮 !!!',
                                              QtWidgets.QMessageBox.Yes, QtWidgets.QMessageBox.No)

            self.brows.load(QtCore.QUrl('https://portal.jiugang.com/login.jsp'))
            self.label.setText('  '*60+'集团网站：https://portal.jiugang.com/login.jsp')

    def char_(self):
        try:
            self.data_6=self.pd_merg()
            TEXT = self.comboBox_1.currentText()
            # print(TEXT)
            if TEXT == 'Bar_2':
                self.bar = Bar(opts.InitOpts(width='1050px',height='550px',bg_color='skyblue',page_title='天工矿业公司'))
                self.bar.set_global_opts(datazoom_opts=opts.DataZoomOpts(is_show=True, type_='inside'),
                                         legend_opts=opts.LegendOpts(type_='scroll'),
                                         toolbox_opts=opts.ToolboxOpts(is_show=True, orient='horizontal'),
                                         tooltip_opts=opts.TooltipOpts(trigger='axis',axis_pointer_type='cross'))
                self.bar.add_xaxis(xaxis_data=list(self.data_6[list(self.data_6.columns)[0]]))
                self.bar.add_yaxis('本月实际', y_axis=list(self.data_6[list(self.data_6.columns)[1]]))
                self.bar.add_yaxis('累计实际', y_axis=list(self.data_6[list(self.data_6.columns)[2]]))

                self.bar.render('./BtgM_.html')
                url_1=os.getcwd()+'/BtgM_.html'
                self.brows.load(QtCore.QUrl.fromLocalFile(url_1))

            elif TEXT == 'Pie_2':
                # self.data_7 = self.data_2
                print(self.data_6.index)
                self.pie = Pie(opts.InitOpts(width='1050px',height='700px',bg_color='skyblue',page_title='天工矿业公司'))
                self.pie.set_global_opts(
                    legend_opts=opts.LegendOpts(type_='scroll', is_show=True, orient='vertical', pos_left='left')
                    , toolbox_opts=opts.ToolboxOpts(is_show=True))

                self.pie.add('本月数', data_pair=[self.z for self.z in zip(self.data_6[self.data_6.columns[0]],
                                                                        self.data_6[self.data_6.columns[1]])],
                             radius=['35%', '55%'])
                self.pie.set_series_opts(label_opts=opts.LabelOpts(formatter='{b}:{c}'))
                self.pie.render('./PtgM_.html')
                url=os.getcwd()+'/PtgM_.html'
                self.brows.load(QtCore.QUrl.fromLocalFile(url))
            else:
                self.brows.load(QtCore.QUrl('https://portal.jiugang.com/login.jsp'))
                self.label.setText('  ' * 60 + '集团网站：https://portal.jiugang.com/login.jsp')

        except:
            QtWidgets.QMessageBox.information(self, '警告', '被加密，无法运行！\n先返回上页单击破解保护按钮 !!!',
                                              QtWidgets.QMessageBox.Yes, QtWidgets.QMessageBox.No)

            self.brows.load(QtCore.QUrl('https://portal.jiugang.com/login.jsp'))
            self.label.setText('  '*60+'集团网站：https://portal.jiugang.com/login.jsp')


    def esc(self):
        if  os.path.exists('./单体') and os.path.exists('./合并'):
            shutil.rmtree('./单体')
            shutil.rmtree('./合并')
            self.close()
        else:
            QtWidgets.QMessageBox.information(self,'错误提示','请确认是否已清空数据源文件 !!!',
                                              QtWidgets.QMessageBox.Yes,
                                              QtWidgets.QMessageBox.No)


if __name__ == "__main__":
    import sys
    QtWidgets.QApplication.setAttribute(QtCore.Qt.AA_UseSoftwareOpenGL)
    app = QtWidgets.QApplication(sys.argv)
    Form = QtWidgets.QWidget()
    ui = Ui_Form()
    ui.setupUi()
    ui.show()
    sys.exit(app.exec_())
