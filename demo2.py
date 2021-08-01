"""
思路
1 从邮箱拿去财务报表数据：
2 解压数据，并展示最终工作表
"""

from PyQt5.QtCore import QRect,QDate,Qt
from PyQt5.QtWidgets import QWidget,QApplication,QGridLayout,QDateEdit
from PyQt5.QtWidgets import QMessageBox,QLabel,QToolTip,QListWidget,QPushButton,QHBoxLayout
from PyQt5.QtGui import QIcon,QFont
import zmail
import re
import os
from zipfile import ZipFile
import sys
import shutil



from demo1 import My_window
import glob

Use_name='yanfaai@jiugang.com'
Password='orange.OO7'
class Ui_windows(My_window,QWidget):

    def __init__(self):
        QWidget.__init__(self)
        My_window.__init__(self)
        self.setGeometry(400, 200, 1000, 600)
        self.setWindowTitle('天工矿业公司')

        QToolTip.setFont(QFont('华文中宋', 10))
        self.setToolTip('<font color=red>作者：闫发爱</font>')

    def setUI(self):  # 创建button按钮从邮箱获取数据，保存到内存里面！
        # 添加菜单的时候 首先要创建菜单栏
        # self.menu_1=QMenuBar(self).addMenu('文件')
        # self.menu_1.addAction('导入')

        font = QFont()
        font.setBold(True)
        font.setPointSize(10)
        font.setWordSpacing(0.8)
        self.setFixedSize(1000, 600)
        self.grid = QGridLayout()


        self.lab_5 = QLabel('邮件发送日期:',self)
        self.lab_5.setFont(font)

        self.lab_6 = QLabel('邮件接受日期:', self)
        self.lab_6.setFont(font)

        self.car_1 = QDateEdit(self)  # 日历控件年-月-日 时:分:秒 M大写是为了区分“月”与“分”
        self.car_1.setToolTip('<font color=red>选择一个日期</font>')
        # 顺便说下HH为什么大写，是为了区分12小时制与24小时制。
        # 小写的h是12小时制，大写的H是24小时制。
        self.car_1.setMinimumDate(QDate.currentDate().addDays(0).addMonths(-12))
        # self.car_1.setDisplayFormat('yyyy-MM-dd') # 按要求显示格式
        self.car_1.setCalendarPopup(True)

        self.car_2 = QDateEdit(QDate.currentDate(), self)
        self.car_2.setToolTip('<font color=red>选择一个日期,下拉选择</font>')
        self.car_2.setFrame(False)
        self.car_2.setCalendarPopup(True)

        self.button_1 = QPushButton('获取数据', self)
        self.button_1.setToolTip('<font color=red>从公司邮箱获取信息</font>')
        self.button_2 = QPushButton('返回登录', self)
        self.button_3 = QPushButton('单体报表', self)
        self.button_3.setToolTip('<font color=red>获取21家公司单体报表</font>')
        self.button_4 = QPushButton('合并报表', self)
        self.button_4.setToolTip('<font color=red>获取7家公司合并报表</font>')
        self.button_5 = QPushButton('退出界面', self)
        self.button_5.setToolTip('<font color=red>退出就重来</font>')
        self.button_6 = QPushButton('下一页',self)
        self.button_6.setToolTip('<font color=red>下页更精彩</font>')
        self.listWidget_1 = QListWidget(self)
        self.listWidget_1.setWordWrap(True)  # 长文本换行

        self.listWidget_1.setToolTip('<font  color=red>数据信息</font>') # 气泡提示,可以支出富文本

        self.listWidget_2 = QListWidget(self)
        self.listWidget_2.setToolTip('<font color=red>单体报表，选择一项鼠标单击有惊喜!</font>')
        self.listWidget_2.setWordWrap(True)
        self.listWidget_3 = QListWidget(self)
        self.listWidget_3.setToolTip('<font color=red>合并报表，单击有惊喜!</font>')
        self.listWidget_3.setWordWrap(True)
        self.QHB = QHBoxLayout()
        self.QHB.addWidget(self.lab_5)
        self.QHB.addWidget(self.car_1)
        self.QHB.addWidget(self.lab_6)
        self.QHB.addWidget(self.car_2,)
        self.QHB.setSpacing(80)

        self.QHB.setGeometry(QRect(50, 10, 650, 50))

        self.grid.addWidget(self.listWidget_1, 0, 0)
        self.grid.addWidget(self.listWidget_2, 0, 1)
        self.grid.addWidget(self.listWidget_3, 0, 2)

        self.grid.addWidget(self.button_1, 1, 0, Qt.AlignCenter)
        self.grid.addWidget(self.button_3, 1, 1, Qt.AlignCenter)
        self.grid.addWidget(self.button_4, 1, 2, Qt.AlignCenter)

        self.grid_1 = QHBoxLayout()
        self.grid_1.addWidget(self.button_2)
        self.grid_1.addWidget(self.button_6)
        self.grid_1.addWidget(self.button_5)

        self.grid_1.setSpacing(60)
        self.grid.setContentsMargins(50, 60, 50, 150)
        self.grid_1.setGeometry(QRect(290, 500, 400, 30))

        self.setLayout(self.grid)
        self.setLayout(self.grid_1)
        self.setLayout(self.QHB)
        # 信号曹绑定
        self.button_1.clicked.connect(self.get_Data) #获取是数据
        self.button_2.clicked.connect(self.re_log)  # 返回界面
        self.button_3.clicked.connect(self.d_info)  # 获取单体报表
        self.button_4.clicked.connect(self.d_merg)  # 获取合并信息

        self.button_5.clicked.connect(self.del_zip)
        self.button_6.clicked.connect(self.log_next) # 进入下一页

    def get_Data(self):  # 定位读取邮件信息并获取附件

        data_1=self.car_1.date().toString('yyyy-MM-dd')
        data_2 = self.car_2.date().toString('yyyy-MM-dd')
        # data_info=self.ui()
        mail_ = zmail.server(Use_name,Password ,pop_host='smtp.jiugang.com')
        mail_list = mail_.get_mails(start_time=data_1, end_time=data_2)

        for i in mail_list:
            if re.search('.*?财务报表.*',i['Subject']):
                self.listWidget_1.addItem(i['Subject'])
                self.listWidget_1.addItem(i['From'])
                self.listWidget_1.addItem(str(i['Date']))
                if os.path.exists('caiwu'):
                    shutil.rmtree('caiwu') # 其目的是删除文件夹下的文件
                    os.mkdir('caiwu')
                else:
                    os.mkdir('caiwu')
                zmail.save_attachment(i, target_path=r'./caiwu', overwrite=True)
                self.zip_file()
                break
        else:
            QMessageBox.information(self, '温馨提示', '请选择合适的日期!!!\n打开邮箱核实是否在该时间段内收到此邮件',
                                QMessageBox.Yes,QMessageBox.No)


    def zip_file(self):
        with ZipFile(glob.glob('./caiwu/*')[0]) as file:
            for f in file.filelist:
                f.filename = f.filename.encode('cp437').decode('gbk').encode('UTF8').decode('UTF8')
                self.listWidget_1.addItem(f.filename)

    def d_info(self):
        try:
            if os.path.exists('./单体'):
                self.listWidget_2.addItems(os.listdir('./单体'))
                # shutil.rmtree('./单体')
            else:
                with ZipFile(glob.glob('./caiwu/*')[0]) as file:
                    for f in file.filelist:
                        f.filename = f.filename.encode('cp437').decode('gbk').encode('UTF8').decode('UTF8')
                        if not re.search('[合内通]', f.filename) and not re.search('.*新洲.*xls',f.filename):
                            file.extract(f, './单体')
                            # self.listWidget_2.addItem(f.filename)
                    for z in glob.glob('./单体/*zip'):
                        # print(z)
                        # if z.endswith('zip'):

                        with ZipFile(z) as file_:

                            for f_ in file_.filelist:
                                f_.filename=f_.filename.encode('cp437').decode('gbk').encode('utf8').decode('utf8')
                                # match()函数只检测字符串开头位置是否匹配，匹配成功才会返回结果，否则返回None
                                # search()函数会在整个字符串内查找模式匹配,只到找到第一个匹配然后返回一个包含匹配信息的对象,该对象可以通过调用group()方法得到匹配的字符串,如果字符串没有匹配，则返回None
                                if not re.search('[合]',f_.filename):
                                    file_.extract(f_,'./单体')

                        os.remove(z) # 不能在with语句里面写

                    for file__ in os.listdir('./单体'):
                        dir_file=os.path.join('./单体',file__)

                        if os.path.isdir(dir_file):
                            for f__ in os.listdir(dir_file):
                                if not f__.endswith('doc'):
                                    shutil.move(os.path.join(dir_file,f__),'./单体')
                            else:
                                shutil.rmtree(dir_file)
                    self.listWidget_2.addItems(os.listdir('./单体'))
        except:
            QMessageBox.information(self, '提示', '没有源数据，请先获取数据', QMessageBox.Yes, QMessageBox.No)


    def d_merg(self):
        try:
            if os.path.exists('./合并') :
                self.listWidget_3.addItems(os.listdir('./合并'))

            else:
                with ZipFile(glob.glob('./caiwu/*')[0]) as file:
                    for f in file.filelist:
                        f.filename = f.filename.encode('cp437').decode('gbk').encode('UTF8').decode('UTF8')
                        if re.search('[合诚昇]', f.filename) and not re.search('[拓]',f.filename) or re.search('[zip]',f.filename):
                                # 与上面的单体解压不通，这个若解压里面的压缩包，必须把上面的IF重新构思一边，很麻烦
                                file.extract(f, './合并')

                    for a in glob.glob('./合并/*.zip'):
                        # print(a)
                        with ZipFile(a) as FM:
                            for m in FM.filelist:
                                m.filename=m.filename.encode('cp437').decode('gbk').encode('utf8').decode('utf8')
                                if re.search('[合]',m.filename):
                                    FM.extract(m,'./合并')
                        os.remove(a)

                    #     print(a)
                    for m in os.listdir('./合并'):
                        dir_ = os.path.join('./合并', m)
                        if os.path.isdir(os.path.join('./合并',m)):
                            for m_1 in os.listdir(dir_):
                                if not m_1.endswith('doc'):
                                    shutil.move(os.path.join(dir_,m_1),'./合并')
                            else:
                                shutil.rmtree(dir_)
                self.listWidget_3.addItems(os.listdir('./合并'))
        except:
            QMessageBox.information(self,'提示','没有源数据，请先获取数据',QMessageBox.Yes,QMessageBox.No)
        # shutil.rmtree('./合并')

    def del_zip(self):
        if os.path.exists('.\caiwu'):
            shutil.rmtree('.\caiwu')
            self.close()
        else:
            self.close()

    def re_log(self):
        # from demo1 import My_window
        self.hide()
        self.my_window = My_window() # 继承原理，不用导入模块
        self.my_window.ui()
        self.my_window.show()

    def log_next(self):
        from demo3 import Ui_Form
        if os.path.exists('.\caiwu') and os.path.exists('./单体') and os.path.exists('./合并'):
            shutil.rmtree('.\caiwu')
            self.hide()
            self.gui_=Ui_Form()
            self.gui_.setupUi()
            self.gui_.show()
        else:
            QMessageBox.information(self,'警告','缺少数据，请获取源数据',QMessageBox.Yes,QMessageBox.No)


if __name__ == '__main__':
    Gapp = QApplication(sys.argv)
    gui = Ui_windows()
    gui.setUI()
    gui.show()

    sys.exit(Gapp.exec_())
