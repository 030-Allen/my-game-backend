const express = require("express");
const path = require("path");
const cors = require("cors"); // 🚀 新增：引入 cors 套件，解決跨網域阻擋問題
const app = express();

// 🚀 新增：啟用 CORS，允許所有的網域連線進來存取排行榜
app.use(cors());

// 1. 設定靜態網頁目錄，讓前端遊戲（public資料夾）能被讀取
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 2. 引入老師範例的 nedb-promises 資料庫，並建立 game.db 檔案
const Datastore = require('nedb-promises');
let GameDB = Datastore.create(path.join(__dirname, 'game.db'));

// 功能一：獲取排行榜資料 (GET)
app.get("/rank", (req, res) => {
    GameDB.find({}, { _id: 0 }).sort({ score: -1 }).limit(3).then((docs) => {
        if (docs != null) {
            res.send(docs);
        }
    });
});

// 功能二：更新儲存分數到資料庫 (POST)
app.post("/postscore", (req, res) => {
    console.log("收到前端傳來的數值：", req.body);
    GameDB.insert(req.body).then((doc) => {
        GameDB.find({}, { _id: 0 }).sort({ score: -1 }).limit(3).then((docs) => {
            res.send(docs);
        });
    });
});

// 3. 修改監聽 Port 以符合 Render 雲端環境需求
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`伺服器已成功在 Port ${port} 啟動！`);
});
