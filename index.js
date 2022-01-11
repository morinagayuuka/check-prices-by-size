// colorの変更
const colorAnswer="rgba(88, 142, 179,0.5)";
// （id取得）
// 答えの場所
// 引き出し
let hikidashinumAnswerHeight=document.getElementById("hikidashinumAnswerHeight");
let hikidashinumAnswerWidth=document.getElementById("hikidashinumAnswerWidth");
let hikidashinumAnswer=document.getElementById("hikidashinumAnswer");
let hikidashiSelect=document.getElementById("hikidashiSelect");

// 棚
let tananumAnswerHeight=document.getElementById("tananumAnswerHeight");
let tananumAnswerWidth=document.getElementById("tananumAnswerWidth");
let tananumAnswer=document.getElementById("tananumAnswer");
let tanaSelect=document.getElementById("tanaSelect");
// サイドボード
let sidebordnumAnswerHeight=document.getElementById("sidebordnumAnswerHeight");
let sidebordnumAnswerWidth=document.getElementById("sidebordnumAnswerWidth");
let sidebordnumAnswer=document.getElementById("sidebordnumAnswer");
let sidebordSelect=document.getElementById("sidebordSelect");



// ここいらない？？？

// let hikidashi_H1=document.getElementById("hikidashi_H1");
// let hikidashi_H2=document.getElementById("hikidashi_H2");
// let hikidashi_H3=document.getElementById("hikidashi_H3");
// let hikidashi_H4=document.getElementById("hikidashi_H4");

// let hikidashi_W1=document.getElementById("hikidashi_W1");
// let hikidashi_W2=document.getElementById("hikidashi_W2");
// let hikidashi_W3=document.getElementById("hikidashi_W3");
// let hikidashi_W4=document.getElementById("hikidashi_W4");


// /ここいらない？？？
// let tansuSelect=document.getElementById("tansuSelect");
// let chestSelect=document.getElementById("chestSelect");
// let tansu2Select=document.getElementById("tansu2Select");


// リセット
let hikidashiReset=document.getElementById("hikidashiReset");
let tanaReset=document.getElementById("tanaReset");
let sidebordReset=document.getElementById("sidebordReset");

// どの箱物をクリックしたのかのオンクリック関数（ぜんぶ適用）
function hakoSelectAction(y){
switch(y.target.value){
    case "チェスト":
        hikidashiSelect.innerHTML = y.target.value;
        break;
        case "タンス":
            hikidashiSelect.innerHTML = y.target.value;
            break;
            case "タンス2":
                hikidashiSelect.innerHTML = y.target.value;
                break;
                case "食器棚":
                    tanaSelect.innerHTML = y.target.value;
                    break;
                    case "本棚":
                        tanaSelect.innerHTML = y.target.value;
                        break;
                        case "戸棚":
                            tanaSelect.innerHTML = y.target.value;
                            break;
                            case "茶ダンス":
                                tanaSelect.innerHTML = y.target.value;
                                console.log(tanaSelect);
                                break;
                                   // サイドボードの場合
                                   case "サイドボード":
                                    sidebordSelect.innerHTML = y.target.value;
                                        break; 
             // ロッカーの場合
              // 物置の場合
    }
}


// 場所の名前（こんな形で整列）
// ----------------------
// | H1 |H1W1 | H1W2 |H1W3 |
// -----------------
// | H2 | H2W1 |H2W2 | H2W3 |
// -----------------
// | H3 | H3W1 | H3W2 |H3W3 |
// -----------------
// | H4 | H4W1 | H4W2 |H4W3 |
// -----------------
// | 　 | W1 　 | W2  | W3 |


// -----------------
// 引き出し
let hikidashiWidth=null;
let hikidashiheight=null;
let hikidashiHeightPush=false;
let hikidasWidthPush=false;
let hikidashiheightLastTime=null;
let hikidashiWidthLastTime=null;
let hikidashiheightLastTimeBool=false;
let hikidashiWidthLastTimeBool=false;
// 棚
let tanaWidth=null;
let tanaHeight=null;
let tanaHeightPush=false;
let tanaWidthPush=false;
let tanaHeightLastTime=null;
let tanaWidthLastTime=null;
let tanaHeightLastTimeBool=false;
let tanaWidthLastTimeBool=false;
// サイドボード
let sidebordWidth=null;
let sidebordHeight=null;
let sidebordHeightPush=false;
let sidebordWidthPush=false;
let sidebordHeightLastTime=null;
let sidebordWidthLastTime=null;
let sidebordHeightLastTimeBool=false;
let sidebordWidthLastTimeBool=false;

let resetTime=null;



// 引き出し
const hikidashi_highYoko1=[hikidashi_H1,hikidashi_H1W1,hikidashi_H1W2,hikidashi_H1W3];
const hikidashi_highYoko2=[hikidashi_H2,hikidashi_H2W1,hikidashi_H2W2,hikidashi_H2W3];
const hikidashi_highYoko3=[hikidashi_H3,hikidashi_H3W1,hikidashi_H3W2,hikidashi_H3W3];
const hikidashi_highYoko4=[hikidashi_H4,hikidashi_H4W1,hikidashi_H4W2,hikidashi_H4W3];

const hikidashi_highYoko5=[hikidashi_W3,hikidashi_W2,hikidashi_W1];

const hikidashi_highTate1=[hikidashi_W1,hikidashi_H4W1,hikidashi_H3W1,hikidashi_H2W1,hikidashi_H1W1];
const hikidashi_highTate2=[hikidashi_W2,hikidashi_H4W2,hikidashi_H3W2,hikidashi_H2W2,hikidashi_H1W2];
const hikidashi_highTate3=[hikidashi_W3,hikidashi_H4W3,hikidashi_H3W3,hikidashi_H2W3,hikidashi_H1W3];
// 棚
const tana_highYoko1=[tana_H1,tana_H1W1,tana_H1W2];
const tana_highYoko2=[tana_H2,tana_H2W1,tana_H2W2];
const tana_highYoko3=[tana_H3,tana_H3W1,tana_H3W2];
const tana_highYoko4=[tana_H4,tana_H4W1,tana_H4W2];
const tana_highYoko5=[tana_W1,tana_W2];
const tana_highTate1=[tana_W1,tana_H4W1,tana_H3W1,tana_H2W1,tana_H1W1];
const tana_highTate2=[tana_W2,tana_H4W2,tana_H3W2,tana_H2W2,tana_H1W2];
const tana_highTate3=[tana_H1,tana_H2,tana_H3,tana_H4];
// const tana_highTate3=[tana_W3,tana_H4W3,tana_H3W3,tana_H2W3,tana_H1W3];
// サイドボード
const sidebord_highYoko1=[sidebord_H1,sidebord_H1W1,sidebord_H1W2,sidebord_H1W3,sidebord_H1W4];
const sidebord_highYoko2=[sidebord_H2,sidebord_H2W1,sidebord_H2W2,sidebord_H2W3,sidebord_H2W4];
const sidebord_highYoko3=[sidebord_W1,sidebord_W2,sidebord_W3,sidebord_W4];

const sidebord_highTate1=[sidebord_W1,sidebord_H2W1,sidebord_H1W1];
const sidebord_highTate2=[sidebord_W2,sidebord_H2W2,sidebord_H1W2];
const sidebord_highTate3=[sidebord_W3,sidebord_H2W3,sidebord_H1W3];
const sidebord_highTate4=[sidebord_W4,sidebord_H2W4,sidebord_H1W4];
const sidebord_highTate5=[sidebord_H1,sidebord_H2];




// 箱もののリセット関数（ぜんぶ適用）
function reset(y){
   console.log(y.target.id);
   resetTime=y.target.id;    
        switch(resetTime){
            // 引き出しの場合
            case  "hikidashiReset":
                for(let i=0;i<hikidashi_highYoko1.length;i++){
                    hikidashi_highYoko1[i].style.backgroundColor= "";}
                    for(let i=0;i<hikidashi_highYoko2.length;i++){
                        hikidashi_highYoko2[i].style.backgroundColor= "";}
                        for(let i=0;i<hikidashi_highYoko3.length;i++){
                            hikidashi_highYoko3[i].style.backgroundColor= "";}
                            for(let i=0;i<hikidashi_highYoko4.length;i++){
                                hikidashi_highYoko4[i].style.backgroundColor= "";}
                                for(let i=0;i<hikidashi_highYoko5.length;i++){
                                    hikidashi_highYoko5[i].style.backgroundColor= "";}
                                    hikidashinumAnswerHeight.innerHTML="";
                                    hikidashinumAnswerWidth.innerHTML="";
                                    hikidashinumAnswer.innerHTML="";
                                    hikidashiSelect.innerHTML="";
                                    console.log(hikidashinumAnswer);
                                    hikidashiHeightPush=false;
                                     hikidasWidthPush=false;
                                     hikidashiheightLastTimeBool=false;
                                     hikidashiWidthLastTimeBool=false;
                                     break;
            // 棚の場合
            case "tanaReset":
                for(let i=0;i<tana_highTate1.length;i++){
                    tana_highTate1[i].style.backgroundColor= "";}
                    for(let i=0;i<tana_highTate2.length;i++){
                        tana_highTate2[i].style.backgroundColor= "";}
                        for(let i=0;i<tana_highTate3.length;i++){
                        tana_highTate3[i].style.backgroundColor= "";}
                    tananumAnswerHeight.innerHTML="";
                    tananumAnswerWidth.innerHTML="";
                    tananumAnswer.innerHTML="";
                    tanaSelect.innerHTML="";
                    console.log(tananumAnswer);
                    tanaHeightPush=false;
                    tanaWidthPush=false;
                    tanaheightLastTimeBool=false;
                    tanaWidthLastTimeBool=false;
                    break; 
            // サイドボードの場合
            case "sidebordReset":
                for(let i=0;i<sidebord_highYoko1.length;i++){
                    sidebord_highYoko1[i].style.backgroundColor= "";}
                    for(let i=0;i<sidebord_highYoko2.length;i++){
                        sidebord_highYoko2[i].style.backgroundColor= "";}
                        for(let i=0;i<sidebord_highYoko3.length;i++){
                            sidebord_highYoko3[i].style.backgroundColor= "";}
                        sidebordnumAnswerHeight.innerHTML="";
                        sidebordnumAnswerWidth.innerHTML="";
                        sidebordnumAnswer.innerHTML="";
                        sidebordSelect.innerHTML="";
                        console.log(sidebordnumAnswer);
                        sidebordHeightPush=false;
                        sidebordWidthPush=false;
                        sidebordheightLastTimeBool=false;
                        sidebordWidthLastTimeBool=false;
                        break; 
             // ロッカーの場合
              // 物置の場合
        }}
       
      
 

//****棚　よこライン(height)をつくるオンクリック関数
function suutiTakasaTana(y){
    tanaHeight=y.target.id;
    // 一回目
    if(tanaHeightPush==false){
//     // 選択したラインに色をつける
  Tana_Height_Create();
    tanaHeightPush=true;
    tanaHeightLastTimeBool=true;
}else{
//     // ２回目以降　で初期化
  Tana_Height_Reset();
// // 選択していたラインに色をつけるて、新しく選択したところにも色をつける
habaBeforeInputTana();
Tana_Height_Create();

}
//    // 前回の記録をのこす

tanaHeightLastTime=tanaHeight; 
tananumAnswerHeight.innerHTML = "高さ：　"+y.target.value;
if(tanaWidthLastTimeBool==true){
    tanaAnswerColor();
}
}
  //*******棚　たてライン(width)をつくるオンクリック関数
  function suutiHabaTana(y){
    tanaWidth=y.target.id;
    // 1回目 tanaHeightPush
    if(tanaWidthPush==false){
    // 選択したたてラインに色をつける関数
    tana_WIdth_Create();
    tanaWidthPush=true;
//    tanaWidthLastTime=tanaWidth;
tanaWidthLastTimeBool=true;
 }
 else{
    // ２回目以降
    // 縦ラインのリセット関数
    LastTime_tana_WIdth_Reset();
//  　　// 選択していた高さを先に入力していた場合
    takasaBeforeInputTana();
//     // 選択したラインに色をつける
    tana_WIdth_Create();

}
tanaWidthLastTime=tanaWidth; 
tananumAnswerWidth.innerHTML = "幅：　"+y.target.value;
if(tanaHeightLastTimeBool==true){
    tanaAnswerColor();
    }
}





//（棚）先に幅を選択したので色をもどす関数
function habaBeforeInputTana(){
    // console.log(tanaHeightLastTimeBool);
    if (tanaHeightLastTimeBool) {
        switch(tanaWidthLastTime){
            case "tana_W1":
                for(let i=0;i<tana_highTate1.length;i++){
                    tana_highTate1[i].style.backgroundColor= "rgba(198, 207, 118, 0.856)";}
                break;
            case "tana_W2":
                for(let i=0;i<tana_highTate2.length;i++){
                    tana_highTate2[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
                break;
           case "tana_W3":
                for(let i=0;i<tana_highTate3.length;i++){
                    tana_highTate3[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
                break;
                }
    }
}
// （棚）ラインが合わさったところのいろを変える関数
function tanaAnswerColor(){
    switch(tanaHeightLastTime+tanaWidthLastTime){
        case "tana_H4tana_W1":
            tananumAnswer.innerHTML=tana_H4W1.innerHTML;
            tana_H4W1.style.backgroundColor= colorAnswer;
        break;
        case "tana_H4tana_W2":
            tananumAnswer.innerHTML=tana_H4W2.innerHTML;
            tana_H4W2.style.backgroundColor= colorAnswer;
        break;
        case "tana_H4tana_W3":
            tananumAnswer.innerHTML=tana_H4W3.innerHTML;
            tana_H4W3.style.backgroundColor= colorAnswer;
        break;
        case "tana_H3tana_W1":
            tananumAnswer.innerHTML=tana_H3W1.innerHTML;
            tana_H3W1.style.backgroundColor=  colorAnswer;
        break;
        case "tana_H3tana_W2":
            tananumAnswer.innerHTML=tana_H3W2.innerHTML;
            tana_H3W2.style.backgroundColor=  colorAnswer;
        break;
        case "tana_H3tana_W3":
            tananumAnswer.innerHTML=tana_H3W3.innerHTML;
            tana_H3W3.style.backgroundColor= colorAnswer;
        break;
        case "tana_H2tana_W1":
            tananumAnswer.innerHTML=tana_H2W1.innerHTML;
            tana_H2W1.style.backgroundColor= colorAnswer;
        break;
        case "tana_H2tana_W2":
            tananumAnswer.innerHTML=tana_H2W2.innerHTML;
            tana_H2W2.style.backgroundColor=  colorAnswer;
        break;
        case "tana_H2tana_W3":
            tananumAnswer.innerHTML=tana_H2W3.innerHTML;
            tana_H2W3.style.backgroundColor= colorAnswer;
        break;
        case "tana_H1tana_W1":
            tananumAnswer.innerHTML=tana_H1W1.innerHTML;
            tana_H1W1.style.backgroundColor= colorAnswer;
        break;
        case "tana_H1tana_W2":
            tananumAnswer.innerHTML=tana_H1W2.innerHTML;
            tana_H1W2.style.backgroundColor=  colorAnswer;
        break;
        case "tana_H1tana_W3":
            tananumAnswer.innerHTML=tana_H1W3.innerHTML;
            tana_H1W3.style.backgroundColor= colorAnswer;
        break;
    }
}

// （棚）棚のよこのライン（高さ）をつくる関数
function   Tana_Height_Create(){
    switch(tanaHeight){
        case "tana_H1":
            for(let i=0;i<tana_highYoko1.length;i++){
            tana_highYoko1[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
        case "tana_H2":
            for(let i=0;i<tana_highYoko2.length;i++){
                    tana_highYoko2[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
       case "tana_H3":
            for(let i=0;i<tana_highYoko3.length;i++){
                        tana_highYoko3[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
        case "tana_H4":
            for(let i=0;i<tana_highYoko4.length;i++){
                    tana_highYoko4[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
       }
    }
    
// （棚）棚のたてのライン（幅）をつくる関数
function tana_WIdth_Create(){
    switch(tanaWidth){
        case "tana_W1":
            for(let i=0;i<tana_highTate1.length;i++){
                tana_highTate1[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
        case "tana_W2":
            for(let i=0;i<tana_highTate2.length;i++){
                tana_highTate2[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
       }
    }

    // （棚）棚のよこのラインリセットする関数
function Tana_Height_Reset(){
    switch(tanaHeightLastTime){
        case  "tana_H1":
            for(let i=0;i<tana_highYoko1.length;i++){
                tana_highYoko1[i].style.backgroundColor= "";}
        break;
        case "tana_H2":
            for(let i=0;i<tana_highYoko2.length;i++){
                tana_highYoko2[i].style.backgroundColor= "";}
            break;
        case "tana_H3":
            for(let i=0;i<tana_highYoko3.length;i++){
                    tana_highYoko3[i].style.backgroundColor= "";}
            break;
            case "tana_H4": 
            for(let i=0;i<tana_highYoko4.length;i++){
                tana_highYoko4[i].style.backgroundColor= "";} 
    
    }}
// 棚のたてのラインをリセットする関数
function LastTime_tana_WIdth_Reset(){
    switch(tanaWidthLastTime){
        case  "tana_W1":
            for(let i=0;i<tana_highTate1.length;i++){
                tana_highTate1[i].style.backgroundColor= "";}
        break;
        case "tana_W2":
            for(let i=0;i<tana_highTate2.length;i++){
                tana_highTate2[i].style.backgroundColor= "";}
            break;
        case "tana_W3":
            for(let i=0;i<tana_highTate3.length;i++){
                tana_highTate3[i].style.backgroundColor= "";}
            break;
    }
}

//（棚）先に幅を選択したので色をもどす
function takasaBeforeInputTana(){
    console.log(tanaHeightLastTimeBool);
    if (tanaHeightLastTimeBool) {
console.log(tanaHeightLastTime);
        switch(tanaHeightLastTime){
            case "tana_H1":
                for(let i=0;i<tana_highYoko1.length;i++){
                    tana_highYoko1[i].style.backgroundColor= " rgba(198, 207, 118,0.856)";}
                break;
            case "tana_H2":
                for(let i=0;i<tana_highYoko2.length;i++){
                    tana_highYoko2[i].style.backgroundColor= " rgba(198, 207, 118,0.856)";}
                break;
           case "tana_H3":
                for(let i=0;i<tana_highYoko3.length;i++){
                    tana_highYoko3[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
                break;
                case "tana_H4":
                    for(let i=0;i<tana_highYoko4.length;i++){
                        tana_highYoko4[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
                    break;
                }
    
    }
}








 
















//hikidashi　高さ（よこライン）をつくるオンクリック関数
function suutiTakasa(y){
    hikidashiheight=y.target.id;
    // 一回目
    if(hikidashiHeightPush==false){
    // 選択したラインに色をつける
    Hikidashi_Height_Create();
    hikidashiHeightPush=true;
    hikidashiheightLastTimeBool=true;
}else{
    // ２回目以降　で初期化
    Hikidashi_Height_Reset();
   
// 選択していたラインに色をつけるて、新しく選択したところにも色をつける
hikidashihabaBeforeInput();
Hikidashi_Height_Create();

   
}
hikidashiheightLastTime=hikidashiheight; 
hikidashinumAnswerHeight.innerHTML = "高さ：　"+y.target.value;
if(hikidashiWidthLastTimeBool==true){
    HikidashiAnswerColor();
}
}





//先に幅を選択したので色をもどす
function hikidashihabaBeforeInput(){
    if (hikidashiWidthLastTimeBool) {

        switch(hikidashiWidthLastTime){
            case "hikidashi_W1":
                for(let i=0;i<hikidashi_highTate1.length;i++){
                    hikidashi_highTate1[i].style.backgroundColor= " rgba(198, 207, 118, 0.5)";}
                break;
            case "hikidashi_W2":
                for(let i=0;i<hikidashi_highTate2.length;i++){
                    hikidashi_highTate2[i].style.backgroundColor= " rgba(198, 207, 118, 0.5)";}
                break;
           case "hikidashi_W3":
                for(let i=0;i<hikidashi_highTate3.length;i++){
                    hikidashi_highTate3[i].style.backgroundColor= " rgba(198, 207, 118, 0.5)";}
                break;
                }
    
    }
}

// 引き出しの高さのラインをつくる関数
function   Hikidashi_Height_Create(){
    switch(hikidashiheight){
        case "hikidashi_H1":
            for(let i=0;i<hikidashi_highYoko1.length;i++){
            hikidashi_highYoko1[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
        case "hikidashi_H2":
            for(let i=0;i<hikidashi_highYoko2.length;i++){
                    hikidashi_highYoko2[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
       case "hikidashi_H3":
            for(let i=0;i<hikidashi_highYoko3.length;i++){
                        hikidashi_highYoko3[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
        case "hikidashi_H4":
            for(let i=0;i<hikidashi_highYoko4.length;i++){
                    hikidashi_highYoko4[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
       }
}

// 引き出しの横のラインをリセットする関数
function Hikidashi_Height_Reset(){
    switch(hikidashiheightLastTime){
    case  "hikidashi_H1":
        for(let i=0;i<hikidashi_highYoko1.length;i++){
            hikidashi_highYoko1[i].style.backgroundColor= "";}
    break;
    case "hikidashi_H2":
        for(let i=0;i<hikidashi_highYoko2.length;i++){
            hikidashi_highYoko2[i].style.backgroundColor= "";}
        break;
    case "hikidashi_H3":
        for(let i=0;i<hikidashi_highYoko3.length;i++){
                hikidashi_highYoko3[i].style.backgroundColor= "";}
        break;
        case "hikidashi_H4": 
        for(let i=0;i<hikidashi_highYoko4.length;i++){
            hikidashi_highYoko4[i].style.backgroundColor= "";}
        break; 

}}

















// 引き出し　幅（たてライン）をつくるオンクリック関数
function suutiHaba(y){
//   console.log(y.target.id);
//   console.log( String(y.target.id));
//   String(値)
//   console.log(String(y.target.id).includes("hikidashi_W1"))

    hikidashiWidth=y.target.id;
    // 1回目
    if(hikidasWidthPush==false){
    // 選択したたてラインに色をつける関数
    Hikidashi_WIdth_Create();
   hikidasWidthPush=true;
//    hikidashiWidthLastTime=hikidashiWidth;
   hikidashiWidthLastTimeBool=true;
 }
 else{
    // ２回目以降
    // 横ラインのリセット関数
    LastTime_Hikidashi_WIdth_Reset();
 　　// 選択していた高さを先に入力していた場合
      hikidashitakasaBeforeInput();
    // 選択したラインに色をつける
    Hikidashi_WIdth_Create();

}
hikidashiWidthLastTime=hikidashiWidth; 
hikidashinumAnswerWidth.innerHTML = "幅：　"+y.target.value;
if(hikidashiWidthLastTimeBool==true){
    HikidashiAnswerColor();
}}

// 高さ（横ライン）を先に入力していた場合の処理
function hikidashitakasaBeforeInput(){
    if (hikidashiheightLastTimeBool) {
    switch(hikidashiheightLastTime){
        case "hikidashi_H1":
            for(let i=0;i<hikidashi_highYoko1.length;i++){
            hikidashi_highYoko1[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
        case "hikidashi_H2":
            for(let i=0;i<hikidashi_highYoko2.length;i++){
                    hikidashi_highYoko2[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
       case "hikidashi_H3":
            for(let i=0;i<hikidashi_highYoko3.length;i++){
                        hikidashi_highYoko3[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
        case "hikidashi_H4":
            for(let i=0;i<hikidashi_highYoko4.length;i++){
                    hikidashi_highYoko4[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
       }}
}


// ラインが合わさったところのいろを変える関数
function HikidashiAnswerColor(){
 
    // console.log(hikidashiheightLastTime+hikidashiWidthLastTime);
    switch(hikidashiheightLastTime+hikidashiWidthLastTime){
        case "hikidashi_H4hikidashi_W1":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H4W1.innerHTML;
            hikidashi_H4W1.style.backgroundColor=  colorAnswer;
        break;
        case "hikidashi_H4hikidashi_W2":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H4W2.innerHTML;
            hikidashi_H4W2.style.backgroundColor=  colorAnswer;
        break;
        case "hikidashi_H4hikidashi_W3":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H4W3.innerHTML;
            hikidashi_H4W3.style.backgroundColor=  colorAnswer;
        break;
        case "hikidashi_H3hikidashi_W1":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H3W1.innerHTML;
            hikidashi_H3W1.style.backgroundColor= colorAnswer;
        break;
        case "hikidashi_H3hikidashi_W2":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H3W2.innerHTML;
            hikidashi_H3W2.style.backgroundColor= colorAnswer;
            break; 
        case "hikidashi_H3hikidashi_W3":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H3W3.innerHTML;
            hikidashi_H3W3.style.backgroundColor= colorAnswer;
        break;
        case "hikidashi_H2hikidashi_W1":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H2W1.innerHTML;
            hikidashi_H2W1.style.backgroundColor=  colorAnswer;
        break;
        case "hikidashi_H2hikidashi_W2":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H2W2.innerHTML;
            hikidashi_H2W2.style.backgroundColor= colorAnswer;
        break;
        case "hikidashi_H2hikidashi_W3":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H2W3.innerHTML;
            hikidashi_H2W3.style.backgroundColor= colorAnswer;
        break;
        case "hikidashi_H1hikidashi_W1":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H1W1.innerHTML;
            hikidashi_H1W1.style.backgroundColor=  colorAnswer;
        break;
        case "hikidashi_H1hikidashi_W2":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H1W2.innerHTML;
            hikidashi_H1W2.style.backgroundColor=  colorAnswer;
        break;
        case "hikidashi_H1hikidashi_W3":
            // hikidashiheightCheck=100;
            hikidashinumAnswer.innerHTML=hikidashi_H1W3.innerHTML;
            hikidashi_H1W3.style.backgroundColor= colorAnswer;
        break;
    }
}






// 引き出しのたてのラインをリセットする関数
function LastTime_Hikidashi_WIdth_Reset(){
    switch(hikidashiWidthLastTime){
        case  "hikidashi_W1":
            for(let i=0;i<hikidashi_highTate1.length;i++){
                hikidashi_highTate1[i].style.backgroundColor= "";}
        break;
        case "hikidashi_W2":
            for(let i=0;i<hikidashi_highTate2.length;i++){
                hikidashi_highTate2[i].style.backgroundColor= "";}
            break;
        case "hikidashi_W3":
            for(let i=0;i<hikidashi_highTate3.length;i++){
                hikidashi_highTate3[i].style.backgroundColor= "";}
            break;

    
    }
}
// 引き出しの幅のラインをつくる関数
function Hikidashi_WIdth_Create(){
    switch(hikidashiWidth){
        case "hikidashi_W1":
            for(let i=0;i<hikidashi_highTate1.length;i++){
                hikidashi_highTate1[i].style.backgroundColor= "rgba(198, 207, 118, 0.5)";}
    
            break;
            case "hikidashi_W2":
                for(let i=0;i<hikidashi_highTate2.length;i++){
                    hikidashi_highTate2[i].style.backgroundColor= "rgba(198, 207, 118, 0.5)";}
                break;
           case "hikidashi_W3":
                for(let i=0;i<hikidashi_highTate3.length;i++){
                    hikidashi_highTate3[i].style.backgroundColor= "rgba(198, 207, 118, 0.5)";}
                break;
    
    }
}



//sidebord　高さ（よこライン）をつくるオンクリック関数
function suutiTakasasidebord(y){
    sidebordheight=y.target.id;
    // 一回目
    if(sidebordHeightPush==false){
    // 選択したラインに色をつける
    sidebord_Height_Create();
    sidebordHeightPush=true;
    sidebordheightLastTimeBool=true;
}else{
    // ２回目以降　で初期化
    sidebord_Height_Reset();
   
// 選択していたラインに色をつけるて、新しく選択したところにも色をつける
sidebordhabaBeforeInput();
sidebord_Height_Create();

   
}
sidebordheightLastTime=sidebordheight; 
sidebordnumAnswerHeight.innerHTML = "高さ：　"+y.target.value;
if(sidebordWidthLastTimeBool==true){
    sidebordAnswerColor();
}
}





//先に幅を選択したので色をもどす
function sidebordhabaBeforeInput(){
    if (sidebordWidthLastTimeBool) {

        switch(sidebordWidthLastTime){
            case "sidebord_W1":
                for(let i=0;i<sidebord_highTate1.length;i++){
                    sidebord_highTate1[i].style.backgroundColor= " rgba(198, 207, 118, 0.5)";}
                break;
            case "sidebord_W2":
                for(let i=0;i<sidebord_highTate2.length;i++){
                    sidebord_highTate2[i].style.backgroundColor= " rgba(198, 207, 118, 0.5)";}
                break;
           case "sidebord_W3":
                for(let i=0;i<sidebord_highTate3.length;i++){
                    sidebord_highTate3[i].style.backgroundColor= " rgba(198, 207, 118, 0.5)";}
                break;
                case "sidebord_W4":
                for(let i=0;i<sidebord_highTate4.length;i++){
                    sidebord_highTate4[i].style.backgroundColor= " rgba(198, 207, 118, 0.5)";}
                break;
                // case "sidebord_W5":
                //     for(let i=0;i<sidebord_highTate5.length;i++){
                //         sidebord_highTate5[i].style.backgroundColor= " rgba(198, 207, 118, 0.5)";}
                //     break;
                }
    
    }
}

// サイドボードの高さのラインをつくる関数
function   sidebord_Height_Create(){
    switch(sidebordheight){
        case "sidebord_H1":
            for(let i=0;i<sidebord_highYoko1.length;i++){
            sidebord_highYoko1[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
        case "sidebord_H2":
            for(let i=0;i<sidebord_highYoko2.length;i++){
                    sidebord_highYoko2[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
            // case "sidebord_H3":
            //     for(let i=0;i<sidebord_highYoko3.length;i++){
                //                 sidebord_highYoko3[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
                //    break;
                //  case "sidebord_H4":
                //     for(let i=0;i<sidebord_highYoko4.length;i++){
                    //       sidebord_highYoko4[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
                    //    break;
       }
}

// サイドボードの横のラインをリセットする関数
function sidebord_Height_Reset(){
    switch(sidebordheightLastTime){
    case  "sidebord_H1":
        for(let i=0;i<sidebord_highYoko1.length;i++){
            sidebord_highYoko1[i].style.backgroundColor= "";}
    break;
    case "sidebord_H2":
        for(let i=0;i<sidebord_highYoko2.length;i++){
            sidebord_highYoko2[i].style.backgroundColor= "";}
        break;
        //   case "sidebord_H3":
        //   for(let i=0;i<sidebord_highYoko3.length;i++){
        //                sidebord_highYoko3[i].style.backgroundColor= "";}
        //          break;
            //       case "sidebord_H4": 
            //   for(let i=0;i<sidebord_highYoko4.length;i++){
                //      sidebord_highYoko4[i].style.backgroundColor= "";}
                //   break; 

}}

// サイドボードの幅のラインをつくる関数
function sidebord_WIdth_Create(){
    switch(sidebordWidth){
        case "sidebord_W1":
                 for(let i=0;i<sidebord_highTate1.length;i++){
                sidebord_highTate1[i].style.backgroundColor= "rgba(198, 207, 118, 0.5)";}
                 break;
                    case "sidebord_W2":
                      for(let i=0;i<sidebord_highTate2.length;i++){
                        sidebord_highTate2[i].style.backgroundColor= "rgba(198, 207, 118, 0.5)";}
                         break;
                    case "sidebord_W3":
                     for(let i=0;i<sidebord_highTate3.length;i++){
                      sidebord_highTate3[i].style.backgroundColor= "rgba(198, 207, 118, 0.5)";}
                          break;
                          case "sidebord_W4":
                          for(let i=0;i<sidebord_highTate4.length;i++){
                           sidebord_highTate4[i].style.backgroundColor= "rgba(198, 207, 118, 0.5)";}
                               break;
    }
}

















// サイドボード　幅（たてライン）をつくるオンクリック関数
function suutiHabasidebord(y){
//   console.log(y.target.id);
//   console.log( String(y.target.id));
//   String(値)
//   console.log(String(y.target.id).includes("sidebord_W1"))

    sidebordWidth=y.target.id;
    // 1回目
    if(sidebordWidthPush==false){
    // 選択したたてラインに色をつける関数
    sidebord_WIdth_Create();
    sidebordWidthPush=true;
//    sidebordWidthLastTime=sidebordWidth;
   sidebordWidthLastTimeBool=true;
 }
 else{
    // ２回目以降
    // 横ラインのリセット関数
    LastTime_sidebord_WIdth_Reset();
 　　// 選択していた高さを先に入力していた場合
      sidebordtakasaBeforeInput();
    // 選択したラインに色をつける
    sidebord_WIdth_Create();

}
sidebordWidthLastTime=sidebordWidth; 
sidebordnumAnswerWidth.innerHTML = "幅：　"+y.target.value;
if(sidebordWidthLastTimeBool==true){
    sidebordAnswerColor();
}}

// 高さ（横ライン）を先に入力していた場合の処理
function sidebordtakasaBeforeInput(){
    if (sidebordheightLastTimeBool) {
    switch(sidebordheightLastTime){
        case "sidebord_H1":
            for(let i=0;i<sidebord_highYoko1.length;i++){
            sidebord_highYoko1[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
        case "sidebord_H2":
            for(let i=0;i<sidebord_highYoko2.length;i++){
                    sidebord_highYoko2[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
            break;
            //  case "sidebord_H3":
            //    for(let i=0;i<sidebord_highYoko3.length;i++){
                //                sidebord_highYoko3[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
                //      break;
                //   case "sidebord_H4":
                //       for(let i=0;i<sidebord_highYoko4.length;i++){
                    //              sidebord_highYoko4[i].style.backgroundColor= " rgba(198, 207, 118, 0.856)";}
                    //      break;
       }}
}

// ラインが合わさったところのいろを変える関数
function sidebordAnswerColor(){
 
    // console.log(sidebordheightLastTime+sidebordWidthLastTime);
    switch(sidebordheightLastTime+sidebordWidthLastTime){
        case "sidebord_H2sidebord_W1":
            // sidebordheightCheck=100;
            sidebordnumAnswer.innerHTML=sidebord_H2W1.innerHTML;
            sidebord_H2W1.style.backgroundColor=  colorAnswer;
        break;
        case "sidebord_H2sidebord_W2":
            // sidebordheightCheck=100;
            sidebordnumAnswer.innerHTML=sidebord_H2W2.innerHTML;
            sidebord_H2W2.style.backgroundColor= colorAnswer;
        break;
        case "sidebord_H2sidebord_W3":
            // sidebordheightCheck=100;
            sidebordnumAnswer.innerHTML=sidebord_H2W3.innerHTML;
            sidebord_H2W3.style.backgroundColor= colorAnswer;
        break;
        case "sidebord_H2sidebord_W4":
            // sidebordheightCheck=100;
            sidebordnumAnswer.innerHTML=sidebord_H2W4.innerHTML;
            sidebord_H2W4.style.backgroundColor= colorAnswer;
        break;
        case "sidebord_H1sidebord_W1":
            // sidebordheightCheck=100;
            sidebordnumAnswer.innerHTML=sidebord_H1W1.innerHTML;
            sidebord_H1W1.style.backgroundColor=  colorAnswer;
        break;
        case "sidebord_H1sidebord_W2":
            // sidebordheightCheck=100;
            sidebordnumAnswer.innerHTML=sidebord_H1W2.innerHTML;
            sidebord_H1W2.style.backgroundColor=  colorAnswer;
        break;
        case "sidebord_H1sidebord_W3":
            // sidebordheightCheck=100;
            sidebordnumAnswer.innerHTML=sidebord_H1W3.innerHTML;
            sidebord_H1W3.style.backgroundColor= colorAnswer;
        break;
        case "sidebord_H1sidebord_W4":
            // sidebordheightCheck=100;
            sidebordnumAnswer.innerHTML=sidebord_H1W4.innerHTML;
            sidebord_H1W4.style.backgroundColor= colorAnswer;
        break;
    }
}


// サイドボードのたてのラインをリセットする関数
function LastTime_sidebord_WIdth_Reset(){
    switch(sidebordWidthLastTime){
        case  "sidebord_W1":
            for(let i=0;i<sidebord_highTate1.length;i++){
                sidebord_highTate1[i].style.backgroundColor= "";}
        break;
        case "sidebord_W2":
            for(let i=0;i<sidebord_highTate2.length;i++){
                sidebord_highTate2[i].style.backgroundColor= "";}
            break;
        case "sidebord_W3":
            for(let i=0;i<sidebord_highTate3.length;i++){
                sidebord_highTate3[i].style.backgroundColor= "";}
            break;
            case "sidebord_W4":
                for(let i=0;i<sidebord_highTate4.length;i++){
                    sidebord_highTate4[i].style.backgroundColor= "";}
                break;
                case "sidebord_W5":
                    for(let i=0;i<sidebord_highTate5.length;i++){
                        sidebord_highTate5[i].style.backgroundColor= "";}
                    break;
        

    
    }
}