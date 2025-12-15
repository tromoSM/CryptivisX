import webview as webfucker3000
from flask import render_template,Flask,send_file,request
encodeSHIT=Flask(__name__)
@encodeSHIT.route('/')
def dihtouch():
    return render_template('index.html')
class nih():
    def sybau(self,data):
        return "nigga from python"
    def min(self,data):
        webfucker3000.windows[0].minimize()
    def max(self,data):
        webfucker3000.windows[0].maximize()
    def close(self,data):
        webfucker3000.windows[0].destroy()
    def res(self,data):
        webfucker3000.windows[0].restore()
    def mainf(self,_=None):
        f=webfucker3000.windows[0].create_file_dialog(
        webfucker3000.OPEN_DIALOG,allow_multiple=False,file_types=['All supported formats(*.png;*.jpg;*.jpeg;*.webp;*.bmp;*.mp4;*.mov;*.avi;*.mkv;*.webm)','Images (*.png;*.jpg;*.jpeg;*.webp;*.bmp)','Videos (*.mp4;*.mov;*.avi;*.mkv;*.webm)',])
        if not f:
            return None
        return f[0]
@encodeSHIT.route('/imim-preview')
def pr():
    imim=request.args.get('path')
    return send_file(imim)
if __name__=="__main__":
    fuhnihs=webfucker3000.create_window(
    'CryptivisX',encodeSHIT,js_api=nih(),width=911,height=607,frameless=True,resizable=True,transparent=True,background_color="#000000",shadow=True 
    )
    webfucker3000.start(debug=True)

