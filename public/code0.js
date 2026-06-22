gdjs._26410_21629_21517_22580_26223Code = {};
gdjs._26410_21629_21517_22580_26223Code.localVariables = [];
gdjs._26410_21629_21517_22580_26223Code.idToCallbackMap = new Map();
gdjs._26410_21629_21517_22580_26223Code.GD_9538622_9533151Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GD_9538622_9533151Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDNewSpriteObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDNewSpriteObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GD_9539770Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GD_9539770Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GD_9522403_9522334Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GD_9522403_9522334Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GD_9525302_9525226Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GD_9525302_9525226Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDTalkText3Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDTalkText3Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDChallengeZoneObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDChallengeZoneObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDShieldObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDShieldObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDHeartObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDHeartObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDNewSprite2Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDNewSprite2Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDTitle3Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDTitle3Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDTitle4Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDTitle4Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GD_9595030Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GD_9595030Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDwomanObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDwomanObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDTalkText2Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDTalkText2Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDmanObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDAAAObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDAAAObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDRank1TextObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDRank1TextObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDRank2TextObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDRank2TextObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDRank3TextObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDRank3TextObjects2= [];


gdjs._26410_21629_21517_22580_26223Code.userFunc0x911c70 = function GDJSInlineCode(runtimeScene) {
"use strict";

};
gdjs._26410_21629_21517_22580_26223Code.userFunc0x8f7cc8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const scene = runtimeScene;
const input = scene.getGame().getInputManager();

// 1. 取得物件
const man = scene.getObjects("man")[0];
const woman = scene.getObjects("woman")[0];
const scoreText = scene.getObjects("ScoreText")[0];
let talkText = scene.getObjects("TalkText")[0];
const zone = scene.getObjects("ChallengeZone")[0]; 
const shield = scene.getObjects("Shield")[0]; 
const hearts = scene.getObjects("Heart"); 

// --- 【稱號圖片物件清單】 ---
const titleImgs = {
    t1: scene.getObjects("Title1")[0],
    t2: scene.getObjects("Title2")[0],
    t3: scene.getObjects("Title3")[0],
    t4: scene.getObjects("Title4")[0]
};

if (!man || !woman) return;

// --- 2. 變數與邊界限制初始化 ---
const minX = 50, maxX = 1650; 

if (typeof window.gameIsEnding === 'undefined') window.gameIsEnding = false;
if (window.gameIsEnding) return; // 確保遊戲結束時才阻斷，未結束時正常向下執行

if (typeof window.gameScore === 'undefined') window.gameScore = 0;
if (typeof window.lives === 'undefined') window.lives = 3; 
if (typeof window.invTimer === 'undefined') window.invTimer = 0; 
if (typeof window.shieldTimer === 'undefined') window.shieldTimer = 0; 
if (typeof window.shieldCooldown === 'undefined') window.shieldCooldown = 0; 

if (typeof window.stats === 'undefined') {
    window.stats = { "雞腿": 0, "魚": 0, "垃圾": 0, "拖把": 0, "challengeSuccess": 0 };
}

// 確保安全區（5秒白色區域）所需的 challenge 變數完整初始化
if (typeof window.challenge === 'undefined') {
    window.challenge = { active: false, timer: 0, neededTime: 300, cooldown: 0, firstTriggered: false, targetX: -1000 };
}
const c = window.challenge;

// 初始設定 (僅針對功能性物件)
if (zone && typeof window.zoneInit === 'undefined') { zone.hide(true); window.zoneInit = true; }
if (shield && typeof window.shieldInit === 'undefined') { shield.setOpacity(0); window.shieldInit = true; }

// --- 【常駐排行榜邏輯：精簡為純分數顯示】 ---
if (typeof window.rankLoaded === 'undefined') {
    window.rankLoaded = true; // 避免每一影格重複重複載入
    
    // 定義一個只顯示名次與分數的共用小函式
    window.updateRankTexts = function(data) {
        if (data[0]) { scene.getObjects("Rank1Text")[0]?.setString("1st: " + data[0].score + " 分"); }
        else { scene.getObjects("Rank1Text")[0]?.setString("1st: 暫無資料"); }
        
        if (data[1]) { scene.getObjects("Rank2Text")[0]?.setString("2nd: " + data[1].score + " 分"); }
        else { scene.getObjects("Rank2Text")[0]?.setString("2nd: 暫無資料"); }
        
        if (data[2]) { scene.getObjects("Rank3Text")[0]?.setString("3rd: " + data[2].score + " 分"); }
        else { scene.getObjects("Rank3Text")[0]?.setString("3rd: 暫無資料"); }
    };

    // 🚀 修正 1：開局載入排行榜網址更新為正確的字母小寫 L 網址
    fetch('https://game-vskl.onrender.com/postscore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: "", score: -1 }) // 發送無效分數僅用於撈取目前排行資料
    })
    .then(res => res.json())
    .then(data => {
        if (typeof window.updateRankTexts === 'function') window.updateRankTexts(data);
    })
    .catch(err => console.error("初始排行榜載入失敗：", err));
}

// --- 【稱號單一顯示 + 淡入淡出邏輯】 ---
let activeTitle = null;
if (window.gameScore >= 500) activeTitle = titleImgs.t4;
else if (window.gameScore >= 250) activeTitle = titleImgs.t3;
else if (window.gameScore >= 160) activeTitle = titleImgs.t2;
else if (window.gameScore >= 80) activeTitle = titleImgs.t1;

// 遍歷所有稱號處理透明度 (保持 Z 軸在下層)
Object.values(titleImgs).forEach(img => {
    if (!img) return;
    img.setZOrder(1); 
    let currentOpacity = img.getOpacity();

    if (img === activeTitle) {
        img.hide(false);
        if (currentOpacity < 255) {
            img.setOpacity(Math.min(255, currentOpacity + 5)); // 淡入
        }
    } else {
        if (currentOpacity > 0) {
            img.setOpacity(Math.max(0, currentOpacity - 10)); // 淡出
        } else {
            img.hide(true);
        }
    }
});

// --- 更新愛心顯示 ---
hearts.forEach((h, i) => h.hide(i >= window.lives));

// --- 3. 戰績字串生成 ---
const getStatsMsg = (title) => {
    let rankName = "無名小卒";
    if (window.gameScore >= 500) rankName = "神仙伴侶";
    else if (window.gameScore >= 250) rankName = "忍耐大師";
    else if (window.gameScore >= 160) rankName = "普通人";
    else if (window.gameScore >= 80) rankName = "還要努力";

    return title + "\n最終稱號：【" + rankName + "】\n\n" +
        "【最終戰績】\n總分：" + window.gameScore + 
        "\n❤️ 成功補血：" + window.stats.challengeSuccess + " 次" +
        "\n\n點擊「確定」重新開始。";
};

// --- 【5秒白色區域 (安全區) 的核心控制邏輯】 ---
if (window.gameScore >= 100 && !c.active) {
    let canTrigger = false;
    if (!c.firstTriggered) canTrigger = true;
    else {
        c.cooldown++;
        if (c.cooldown > 600 && Math.random() < 0.01) canTrigger = true;
    }
    if (canTrigger) {
        c.active = true; c.firstTriggered = true; c.timer = 0; c.cooldown = 0;
        c.targetX = Math.floor(Math.random() * (maxX - minX - 500)) + minX + 250;
        if (zone) { 
            zone.hide(false); 
            zone.setX(c.targetX); 
            zone.setY(540); 
            zone.setHeight(1500); 
        }
    }
}

if (c.active) {
    c.timer++;
    let timeLeft = Math.max(0, Math.ceil((c.neededTime - c.timer) / 60));
    if (talkText) talkText.setString("快跑進去！剩 " + timeLeft + "s");
    
    if (c.timer >= c.neededTime) {
        if (Math.abs(man.getX() - c.targetX) <= 250) { 
            c.active = false; 
            window.stats.challengeSuccess += 1;
            if (window.lives < 3) window.lives += 1; 
            if (zone) zone.hide(true);
            if (talkText) talkText.setString("");
        } else {
            // 安全區失敗導致遊戲結束
            window.gameIsEnding = true;
            const msg = getStatsMsg("竟敢躲著我！分手吧！");
            
            // 🚀 修正 2：安全區失敗分數上傳改為小寫 L 網址
            fetch('https://game-vskl.onrender.com/postscore', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: "Player", score: window.gameScore })
            })
            .then(res => res.json())
            .then(data => {
                console.log("資料庫排行更新成功：", data);
                if (typeof window.updateRankTexts === 'function') window.updateRankTexts(data);

                setTimeout(() => {
                    alert(msg);
                    window.location.reload();
                }, 200);
            })
            .catch(err => {
                console.error("分數上傳失敗：", err);
                alert(msg);
                window.location.reload();
            });
            return;
        }
    }
}

// --- 4. 護盾與無敵閃爍 ---
if (window.gameScore >= 80 && window.shieldTimer <= 0) {
    window.shieldCooldown++;
    if (window.shieldCooldown >= 600) { window.shieldTimer = 180; window.shieldCooldown = 0; }
}
if (window.shieldTimer > 0) {
    window.shieldTimer--;
    if (shield) {
        shield.setOpacity(window.shieldTimer < 60 && Math.floor(window.shieldTimer / 4) % 2 === 0 ? 0 : 255);
        shield.setX(man.getX()); shield.setY(man.getY() - 80);
    }
} else if (shield) shield.setOpacity(0);

if (window.invTimer > 0) {
    window.invTimer--;
    man.setOpacity(Math.floor(window.invTimer / 4) % 2 === 0 ? 50 : 255);
} else man.setOpacity(255);

// --- 5. 雙人控制 ---
const p1Speed = 12; 
const p2Speed = 12; 

// P1 男生
if (input.isKeyPressed(65)) { man.setX(man.getX() - p1Speed); man.flipX(true); } 
if (input.isKeyPressed(68)) { man.setX(man.getX() + p1Speed); man.flipX(false); } 

// P2 女生
if (input.isKeyPressed(37)) { 
    woman.setX(woman.getX() - p2Speed); 
    woman.flipX(false); 
} 
if (input.isKeyPressed(39)) { 
    woman.setX(woman.getX() + p2Speed); 
    woman.flipX(true); 
} 

if (man.getX() < minX) man.setX(minX); if (man.getX() > maxX) man.setX(maxX);
if (woman.getX() < minX) woman.setX(minX); if (woman.getX() > maxX) woman.setX(maxX);

if (talkText && !c.active) { talkText.setX(woman.getX() - 60); talkText.setY(woman.getY() - 110); }

// --- 6. 丟東西邏輯 ---
const difficultyLevel = Math.floor(window.gameScore / 10); 
if (typeof window.dropTimer === 'undefined') { window.dropTimer = 0; window.nextDrop = 30; }
window.dropTimer++;
if (window.dropTimer > window.nextDrop) {
    const dropItems = ["雞腿", "魚", "垃圾", "拖把"];
    const newItem = scene.createObject(dropItems[Math.floor(Math.random() * dropItems.length)]);
    if (newItem) {
        newItem.setX(woman.getX()); newItem.setY(woman.getY() + 40);
        newItem.setWidth(128); newItem.setHeight(128);
        newItem.setZOrder(10); 
        let angleDir = 0;
        if (window.gameScore >= 25) {
            const r = Math.random();
            if (r < 0.33) angleDir = -45; else if (r < 0.66) angleDir = 45;
        }
        newItem.getVariables().get("dropAngle").setNumber(angleDir);
        window.nextDrop = Math.max(8, Math.floor(Math.random() * (40 - difficultyLevel * 5)) + 10);
    }
    window.dropTimer = 0;
}

// --- 7. 碰撞與下落 ---
const obstacles = ["雞腿", "魚", "垃圾", "拖把"];
obstacles.forEach(name => {
    scene.getObjects(name).forEach(item => {
        item.setZOrder(10); 
        const moveAngle = item.getVariables().get("dropAngle").getAsNumber();
        const speedY = 12 + (difficultyLevel * 0.5);
        if (moveAngle === -45) item.setX(item.getX() - 6);
        if (moveAngle === 45) item.setX(item.getX() + 6);
        item.setY(item.getY() + speedY);
        item.setAngle(item.getAngle() + 5);

        if (window.shieldTimer <= 0 && window.invTimer <= 0) {
            if (gdjs.RuntimeObject.collisionTest(item, man)) {
                window.lives -= 1; window.invTimer = 90; item.deleteFromScene(scene);
                if (window.lives <= 0) {
                    // 血量歸零導致遊戲結束
                    window.gameIsEnding = true; 
                    const msg = getStatsMsg("哎呀！被砸中了！");
                    
                    // 🚀 修正 3：血量歸零分數上傳改為小寫 L 網址
                    fetch('https://game-vskl.onrender.com/postscore', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: "Player", score: window.gameScore })
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log("資料庫排行更新成功：", data);
                        if (typeof window.updateRankTexts === 'function') window.updateRankTexts(data);

                        setTimeout(() => {
                            alert(msg);
                            window.location.reload();
                        }, 200);
                    })
                    .catch(err => {
                        console.error("分數上傳失敗：", err);
                        alert(msg);
                        window.location.reload();
                    });
                    return;
                }
            }
        }
        if (item.getY() > 1050) { window.gameScore += 1; item.deleteFromScene(scene); }
    });
});

if (scoreText) scoreText.setString("Score: " + window.gameScore);
};
gdjs._26410_21629_21517_22580_26223Code.eventsList0 = function(runtimeScene) {

{


gdjs._26410_21629_21517_22580_26223Code.userFunc0x911c70(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs._26410_21629_21517_22580_26223Code.userFunc0x8f7cc8(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1[i].setX(gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1[i].getX() - (12));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("man"), gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1[i].setX(gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1[i].getX() + (12));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title1"), gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Title2"), gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Title3"), gdjs._26410_21629_21517_22580_26223Code.GDTitle3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Title4"), gdjs._26410_21629_21517_22580_26223Code.GDTitle4Objects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDTitle3Objects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDTitle3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDTitle4Objects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDTitle4Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setLayerDefaultZOrder(runtimeScene, "", 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title2"), gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ScoreText") >= 40;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1[i].getTimerElapsedTimeInSecondsOrNaN("ScoreText") >= 75 ) {
        isConditionTrue_0 = true;
        gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1[k] = gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects1[i].getTimerElapsedTimeInSecondsOrNaN("ScoreText") >= 40 ) {
        isConditionTrue_0 = true;
        gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects1[k] = gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title1"), gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1);
/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Title1"), gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1[k] = gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AAA"), gdjs._26410_21629_21517_22580_26223Code.GDAAAObjects1);
gdjs.copyArray(runtimeScene.getObjects("TalkText2"), gdjs._26410_21629_21517_22580_26223Code.GDTalkText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TalkText3"), gdjs._26410_21629_21517_22580_26223Code.GDTalkText3Objects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDAAAObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDAAAObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDTalkText3Objects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDTalkText3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDTalkText2Objects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDTalkText2Objects1[i].hide();
}
}
}

}


};

gdjs._26410_21629_21517_22580_26223Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26410_21629_21517_22580_26223Code.GD_9538622_9533151Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9538622_9533151Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDNewSpriteObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDNewSpriteObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9539770Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9539770Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9522403_9522334Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9522403_9522334Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9525302_9525226Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9525302_9525226Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTalkText3Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTalkText3Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDChallengeZoneObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDChallengeZoneObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDShieldObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDShieldObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDHeartObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDHeartObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDNewSprite2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDNewSprite2Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle3Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle3Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle4Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle4Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9595030Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9595030Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDwomanObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDwomanObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTalkText2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTalkText2Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDmanObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDAAAObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDAAAObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank1TextObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank1TextObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank2TextObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank2TextObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank3TextObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank3TextObjects2.length = 0;

gdjs._26410_21629_21517_22580_26223Code.eventsList0(runtimeScene);
gdjs._26410_21629_21517_22580_26223Code.GD_9538622_9533151Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9538622_9533151Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDNewSpriteObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDNewSpriteObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDScoreTextObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9539770Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9539770Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9522403_9522334Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9522403_9522334Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9525302_9525226Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9525302_9525226Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTalkText3Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTalkText3Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDChallengeZoneObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDChallengeZoneObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDShieldObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDShieldObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDHeartObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDHeartObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDNewSprite2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDNewSprite2Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle1Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle2Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle3Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle3Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle4Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTitle4Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9595030Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GD_9595030Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDwomanObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDwomanObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTalkText2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDTalkText2Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDmanObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDmanObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDAAAObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDAAAObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank1TextObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank1TextObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank2TextObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank2TextObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank3TextObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDRank3TextObjects2.length = 0;


return;

}

gdjs['_26410_21629_21517_22580_26223Code'] = gdjs._26410_21629_21517_22580_26223Code;
