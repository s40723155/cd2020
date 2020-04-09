var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Webots tutorial 翻譯內容', 'text': '', 'tags': '', 'url': 'Webots tutorial 翻譯內容.html'}, {'title': 'Propeller', 'text': '', 'tags': '', 'url': 'Propeller.html'}, {'title': 'RotationalMotor', 'text': '', 'tags': '', 'url': 'RotationalMotor.html'}, {'title': 'Speaker', 'text': '', 'tags': '', 'url': 'Speaker.html'}, {'title': 'Track', 'text': '', 'tags': '', 'url': 'Track.html'}, {'title': '每週進度', 'text': '', 'tags': '', 'url': '每週進度.html'}, {'title': 'week1', 'text': '創建個人倉儲及架設網站 \n (1)CD2020個人倉儲 \n \n (2)cmsimde網站 \n \n \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': '組長創建小組倉儲 https://github.com/s40723155/cd2020-ag1 ，個組員進行Fork \n \n 小組長亂數分組，分配各項工作給組員 \n \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '更新python3.8.2 \n 1.輸入網址 https://www.python.org/downloads/release/python-382/ \n 2.下載檔案 Windows x86-64 executable installer \n 3. 完成後開啟下載的檔案，選擇Customize installation選項 \n \n 4. 不勾選pip，接續按下next \n \n 5.選擇路徑將python安裝至可攜式系統中的Y槽下 \n 6.開啟start_mdecourse.bat批次檔 \n 7.將 start_mdecourse.bat批次檔中的py373改為安裝python 3.8.2版本的資料夾 \n 8. 將安裝之資料夾取名為py382 \n \n 執行stop.bat批次檔後重新啟動start_mdecourse(為了讓檔案重新讀取) \n 9.輸入get-pip.py，開始安裝pip工具 \n 10.安裝cmsimde所需模組 \n \n 11.進行檢驗是否更新至\xa0 python 3.8.2 \n \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week5', 'text': '\n \n', 'tags': '', 'url': 'week5.html'}]};