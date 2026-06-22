const express = require("express");
const app = express();

// 1. 設定靜態網頁目錄，讓前端遊戲（public資料夾）能被讀取
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 2. 引入老師範例的 nedb-promises 資料庫，並建立 game.db 檔案
const Datastore = require('nedb-promises');
let GameDB = Datastore.create(__dirname + '/game.db');

// 功能一：獲取排行榜資料 (GET)
app.get("/rank", (req, res) => {
    // 找出所有資料，依 score 降冪排序 (-1)，限制只取 3 筆
    GameDB.find({}, { _id: 0 }).sort({ score: -1 }).limit(3).then((docs) => {
        if (docs != null) {
            res.send(docs); // 回傳給前端
        }
    });
});

// 功能二：更新儲存分數到資料庫 (POST)
app.post("/postscore", (req, res) => {
    console.log("收到前端傳來的數值：", req.body);
    
    // 將前端傳過來的資料（例如 { name: "玉米", score: 100 }）寫入資料庫
    GameDB.insert(req.body).then((doc) => {
        // 儲存成功後，順便撈出最新的前 3 名排行回傳給前端更新畫面
        GameDB.find({}, { _id: 0 }).sort({ score: -1 }).limit(3).then((docs) => {
            res.send(docs);
        });
    });
});

// 3. 修改監聽 Port 以符合 Render 雲端環境需求（優先讀取環境變數，否則預設 3000）
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`伺服器已成功在 Port ${port} 啟動！`);
});