import shutil as dihsuc
import sys as johnpork
from pathlib import Path as wishIKnew
import segno as diddyblud
import time as letme
import random as diddybluds
import string as diddybIuds
import webview as webfucker3000
import os as abspath
from flask import render_template,Flask,send_file,request
from cryptography.fernet import Fernet,InvalidToken

def rpath(r):
    if hasattr(johnpork,"_MEIPASS"):
        return abspath.path.join(johnpork._MEIPASS,r)
    return abspath.path.join(abspath.path.abspath('.'),r)
base=abspath.getenv("APPDATA")or abspath.path.expanduser('~')
APPDATA=wishIKnew(base)/"CryptivisX"
APPDATA.mkdir(exist_ok=True)
encodeSHIT=Flask(__name__)
@encodeSHIT.route('/')
def dihtouch():
    return render_template('index.html')
class nih():
    def sybau(self,data):
        return "test"
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
        self.imim_path=f[0]
        return self.imim_path
    def retrf(self,_=None):
        f=webfucker3000.windows[0].create_file_dialog(
        webfucker3000.OPEN_DIALOG,allow_multiple=False,file_types=['All supported formats(*.png;*.jpg;*.jpeg;*.webp;*.bmp;*.mp4;*.mov;*.avi;*.mkv;*.webm)','Images (*.png;*.jpg;*.jpeg;*.webp;*.bmp)','Videos (*.mp4;*.mov;*.avi;*.mkv;*.webm)',])
        if not f:
            return None
        self.imim_repath=f[0]
        return self.imim_repath
    def mainI(self,data=None):
        if not hasattr(self,"imim_path") or not self.imim_path:
            return "no info"
        self.meta=abspath.stat(self.imim_path)
        self.imim_info=[
            abspath.path.basename(self.imim_path),
            self.imim_path,
            round(abspath.path.getsize(self.imim_path)/(1024*1024),2) 
            ]
        return self.imim_info
    def mainE(self,data=None):
        if not hasattr(self,"imim_path") or not self.imim_path:
          return "sybau gng"
        hashdihh=Fernet.generate_key() 
        uia=Fernet(hashdihh)
        uiaa=hashdihh.decode()
        yoyo=''.join(diddybluds.choices(diddybIuds.ascii_letters+diddybIuds.digits,k=21))
        yoyO=yoyo+hashdihh.decode()
        with open(self.imim_path,"rb")as dihfile:
            imim_data=dihfile.read()
        llkv=uia.encrypt(imim_data)
        imim_last=APPDATA/('[encrypted by CryptivisX]'+abspath.path.basename(self.imim_path))
        with open(imim_last,"wb")as dihfile:
         dihfile.write(llkv)
        try:
            abspath.remove(self.imim_path)
        except PermissionError:
            letme.sleep(2)
            
        kyq=diddyblud.make_qr(yoyO)
        kyq.save(abspath.path.join(APPDATA,"tempQR.svg"),scale=6.7)
        dihsuc.copy(APPDATA/"tempQR.svg",rpath("static/tempQR.svg"))
        return yoyO

    def retrJS(self,tx):
        print(f'{tx}')
        self.usrrK=tx
    def sdiybt(self,data=None):
        print('sdiybt')
    def mainD(self,data=None):
        if not hasattr(self,"imim_repath"):
            return "no file gng"
        if not hasattr(self,"usrrK"):
          return "sybau gng"
        print(f'KEY {self.usrrK}',flush=True)
        usrK_non=self.usrrK.strip()[21:].encode()
        fs=Fernet(usrK_non)
        with open(self.imim_repath,"rb")as dihfile:
            imim_data=dihfile.read()
        try:
            imim_inside=fs.decrypt(imim_data)   
        except InvalidToken:
         print('INVALID KEY ERROR')
         return "Invalid key. Please try a different key."    
        imim_last=APPDATA/abspath.path.basename(self.imim_repath).replace("[encrypted by CryptivisX]","")
        with open(imim_last,"wb")as dihfile:
         dihfile.write(imim_inside)
        try:
            abspath.remove(self.imim_repath)
            print('SUCCESS - DE')
        except PermissionError:
            letme.sleep(2)
            return "Permission Error attempting to retry"
        except:
            print("ERROR PERSMISSION ERROR")
            return "Permission Error retrying attempt failed."
@encodeSHIT.route('/imim-preview')
def pr():
    imim=request.args.get('path')
    return send_file(abspath.path.abspath(imim))
if __name__=="__main__":
    fuhnihs=webfucker3000.create_window(
    'CryptivisX',encodeSHIT,js_api=nih(),width=911,height=607,frameless=True,resizable=True,background_color="#000000",shadow=True,easy_drag=False
    )
    try:
     import pyi_splash
     pyi_splash.close()
    except:
     pass
    webfucker3000.start(private_mode=False,gui="edgechromium",http_server=False,args=["--user-data-dir="+str(APPDATA / "webview"),"--disable-feature=msEdgeDevTools","--disable-popup-blocking","--disable-infobars","--autoplay-policy=no-user-gesture-required"],icon=rpath("static/yo.webp"))

