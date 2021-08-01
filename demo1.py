
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtWidgets import QWidget,QLabel,QLineEdit,QPushButton,QApplication,QMessageBox,QToolTip

from PyQt5.QtGui import QFont,QIcon
import zmail

class My_window(QWidget):

    def __init__(self):
        QWidget.__init__(self)
        # Ui_windows.__init__(self)

        self.setGeometry(500,200,720,400)

        self.setWindowTitle('天工矿业公司')
        self.setWindowIcon(QIcon('./jiugang.jpg'))

        # self.ui() # 这一步多余，因为demo2 在继承此类的时候，会调用此类的方法
        self.setWindowOpacity(0.9)
        self.setStyleSheet('background-color:#cccccc') # CSS样式的用法
        # self.setStyleSheet('border-image:url(C:/Users/yan/Pictures/Camera Roll/f.jpg)') #可以加一张图片
        self.ToolTip=QToolTip.setFont(QFont('黑体',10))
    def ui(self):
        self.setFixedSize(720, 400)
        self.lab_1=QLabel('天工矿业公司费用查询系统',self)
        self.lab_1.setStyleSheet('background-color:#CCCCCC')
        self.lab_1.move(220,90)
        self.lab_1.resize(400,30)
        font=QFont()
        font.setBold(True)

        font.setPointSize(18)
        self.lab_1.setFont(font)
        self.lab_2=QLabel('账号：',self)
        self.lab_2.setGeometry(200,160,50,30)
        font.setPointSize(12)
        self.lab_2.setFont(font)
        self.lab_3 = QLabel('密码：', self)
        self.lab_3.setGeometry(200, 220, 50, 30)
        self.lab_3.setFont(font)

        self.LineEdit_1=QLineEdit(self)
        self.LineEdit_1.setStyleSheet('background-color:#CCCCCC')
        self.LineEdit_1.setGeometry(280,160,200,30)
        self.LineEdit_1.setPlaceholderText('请输入账号')
        self.LineEdit_1.setText('yanfaai@jiugang.com')
        self.LineEdit_1.setFrame(False) # 设置边框，True 存在边框（默认），False 去掉边框
        # self.LineEdit_1.setReadOnly(True) # 设置只读，不可修改
        self.LineEdit_2 = QLineEdit(self)
        self.LineEdit_2.setGeometry(280, 220, 200, 30)
        self.LineEdit_2.setPlaceholderText('请输入密码')

        self.LineEdit_2.setText('orange.OO7') # 这一步 写的太死，需要进一步研究(原因是跳转页面密码自动清除了，郁闷)！！！！
        self.LineEdit_2.setFrame(False)
        self.LineEdit_2.setEchoMode(QLineEdit.Password)



        self.button_1=QPushButton('登录',self)
        self.button_1.setStyleSheet('background-color:#CCCCCC')
        font.setPointSize(10)
        self.button_1.setFont(font)
        self.button_1.setGeometry(280,280,80,25)

        self.button_2 = QPushButton('退出', self)
        self.button_2.setGeometry(400, 280, 80, 25)
        self.button_2.setStyleSheet('background-color:#CCCCCC')
        self.button_2.setFont(font)
        self.button_1.clicked.connect(self.wiget_1)
        self.LineEdit_2.returnPressed.connect(self.wiget_1)

        # self.button_1.clicked.connect(self.close)
        self.button_2.clicked.connect(self.close)
        return self.LineEdit_1.text(),self.LineEdit_2.text()

    def wiget_1(self): # 这里面调入ZMAIL模块来判断登录
        try:
           mail= zmail.server(self.LineEdit_1.text(),self.LineEdit_2.text(),pop_host='smtp.jiugang.com')
           mail.get_latest()
           self.LineEdit_2.setText(self.LineEdit_2.text())
           self.hide()
           from demo2 import Ui_windows
           self.w = Ui_windows()
           self.w.setUI()
           self.w.show()

        except:
            QMessageBox.information(self, '温馨提示', '请核对您的账号密码，请重新输入...')
        # else:


if __name__ == '__main__':
    import sys
    app=QApplication(sys.argv)
    window=My_window()
    window.ui() # 让实例绑定方法，再来show 实例
    window.show()
    sys.exit(app.exec_())

