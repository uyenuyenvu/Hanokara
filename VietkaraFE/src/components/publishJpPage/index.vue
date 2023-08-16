<template>
<div class="container">
    <div class="lang">
        <a href="#">
            <div class="flag">
                <img width="150px" src="@/assets/images/publishPage/VietNam.png" alt="">
                <div class="flagTitle">Tiếng Việt</div>
            </div>
        </a>
        <a href="http://localhost:5173/publishJp">
            <div class="flag hide">
                <img width="125px" src="@/assets/images/publishPage/Japan.png" alt="">
                <div class="flagTitle">日本語翻訳</div>
            </div>
        </a>
    </div>
    <div class="newWrap">
        <div class="titleBlock">
            掲載について
        </div>
        <div class="uploadTitle">ベトカラは月額固定費で 
            <hr>
            すべてのコンテンツがご利用できます。
            <hr>
        </div>
        <div class="perContents">
            <div class="perContent">
                <img src="@/assets/images/publishPage/note.png" alt="">
                <div class="textContent">店舗情報やSNS情報をベトカラと共有させて拡散させたい！</div>
            </div>
            <div class="perContent">
                <img src="@/assets/images/publishPage/note.png" alt="">
                <div class="textContent">オリジナル写真と動画で店舗・キャストのアピールをしたい！</div>
            </div>
            <div class="perContent">
                <img src="@/assets/images/publishPage/note.png" alt="">
                <div class="textContent">他店舗との差を明確にして集客に結び付けたい！</div>
            </div>
            <div class="perContent">
                <img src="@/assets/images/publishPage/note.png" alt="">
                <div class="textContent">割引情報やイベント情報を告知したい！</div>
            </div>
        </div>

        <div class="uploadTitle">ベトカラのコンテンツ一覧<hr></div>
        <div class="contents">
            <div class="v-row">
                <div class="v-col-xl-6 v-col-lg-6 v-col-12">
                    <div class="content">
                        <img src="@/assets/images/publishPage/content1.png" alt="">
                        <div class="textContent">宣材写真撮影</div>
                    </div>
                </div>
                <div class="v-col-xl-6 v-col-lg-6 v-col-12">
                    <div class="content">
                        <img src="@/assets/images/publishPage/content2.png" alt="">
                        <div class="textContent">宣材動画撮影</div>
                    </div>
                </div>
                <div class="v-col-xl-6 v-col-lg-6 v-col-12">
                    <div class="content">
                        <img src="@/assets/images/publishPage/content3.png" alt="">
                        <div class="textContent">店舗情報掲載</div>
                    </div>
                </div>
                <div class="v-col-xl-6 v-col-lg-6 v-col-12">
                    <div class="content">
                        <img src="@/assets/images/publishPage/content4.png" alt="">
                        <div class="textContent">割引情報掲載</div>
                    </div>
                </div>
                <div class="v-col-xl-6 v-col-lg-6 v-col-12">
                    <div class="content">
                        <img src="@/assets/images/publishPage/content5.png" alt="">
                        <div class="textContent">新着情報掲載</div>
                    </div>
                </div>
                <div class="v-col-xl-6 v-col-lg-6 v-col-12">
                    <div class="content">
                        <img src="@/assets/images/publishPage/content6.png" alt="">
                        <div class="textContent">イベント情報掲載</div>
                    </div>
                </div>
                <div class="v-col-xl-6 v-col-lg-6 v-col-12">
                    <div class="content">
                        <img src="@/assets/images/publishPage/content7.png" alt="">
                        <div class="textContent">フォトギャラリー掲載</div>
                    </div>
                </div>
                <div class="v-col-xl-6 v-col-lg-6 v-col-12">
                    <div class="content">
                        <img src="@/assets/images/publishPage/content8.png" alt="">
                        <div class="textContent">日本語添削</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fee">掲載料金 <hr></div>
        <div class="postingFee">
            上記コンテンツがすべてセットになって
            最安月 <span> X00$ </span> から掲載可能です！
            まずは下記のお問い合わせフォームより
            お問い合わせください。
        </div>
    </div>
    <div class="newWrap">
        <div class="titleBlock">
           お問い合わせフォーム
        </div>
        <div class="feedback">
            <div class="instruct">
                以下のフォームに必要事項をご記入の上、「送信する」
                ボタンをクリックしてください。
            </div>
            <form class="form" action="">
                <div class="Form-Item">
                    <p class="Form-Item-Label">
                        <span class="Form-Item-Label-Required">必須</span>店名
                    </p>
                    <input type="text" class="Form-Item-Input" placeholder="例） CLUB ALICE">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>エリア</p>
                    <input type="text" class="Form-Item-Input" placeholder="例） KIM MA">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>担当者名</p>
                    <input type="text" class="Form-Item-Input" placeholder="例）山田 太郎">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>電話番号</p>
                    <input type="text" class="Form-Item-Input" placeholder="例）0123456789">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
                    <input type="email" class="Form-Item-Input" placeholder="例 example@gmail.com">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
                    <textarea class="Form-Item-Textarea"></textarea>
                </div>
                <input type="submit" class="Form-Btn" value="送信する ">
            </form>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.container {
    padding: 50px 100px;
}

.lang {
    display: flex;
    justify-content: center;

    .flag {
        text-align: center;

        .flagTitle {
            color: #000;
            font-size: 15px;
            font-weight: bold;
        }

        img {
            object-fit: cover;
            height: 81px;
        }
    }
    .hide{
        img{
            opacity: 0.2;
        }
        .flagTitle{
            color: #AFADAD;
        }
    }
}
.uploadTitle{
    font-size: 30px;
    font-weight: bold;
    color: #000;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
    hr{
        height: 8px;
        background-color: #F37497;
        margin-bottom: 15px;
    }
}
.fee{
    font-size: 30px;
    font-weight: bold;
    color: #000;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
    hr{
        height: 8px;
        width: 40%;
        margin: auto;
        background-color: #F37497;
        margin-bottom: 15px;
    }
}
.postingFee{
    color: #000;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    padding: 20px 10px;
    span{
        color: red;
        font-weight: bold;
    }
}
.perContents{
    border: 5px #F37497 solid;
    border-radius: 5px;
    padding: 50px 5px 50px 20px;
    .perContent{
        display: flex;
        height: 100px;
        img{
            width: 70px;
            height: 52px;
            object-fit: cover;
        }
        .textContent{
            font-size: 26px;
            font-weight: bold;
            color: #000;
        }
    }
}
.titleBlock {
    background-color: #2D2427;
    font-size: 22px;
    font-weight: bold;
    color: white;
    padding: 10px 50px;
    margin: 20px 0px;
}
.contents{
    .content{
        border-radius: 5px;
        border: 5px #F37497 solid;
        display: flex;
        padding: 10px 15px;
        align-items: center;
        height: 95px;
        img{
            width: 90px;
            height: 60px;
            // object-fit: cover;
        }
        .textContent{
            color: #000;
            font-size: 26px;
            font-weight: bold;
            text-align: center;
            padding-left: 20px;
        }
    }
}
.newWrap {
    width: 60%;
    margin: auto;
}

.feedback {
    padding: 20px;
    border: 1px black solid;
    width: 90%;
    margin: auto;
    margin-bottom: 50px;
    box-shadow: 0px 0px 4px 4px #ccc;
}

.instruct {
    color: black;
    font-size: 24px;
    margin-bottom: 30px;
    padding: 0 10px;
    text-align: center;
}

.Form {
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    max-width: 720px;
}

.dark {
    background: #b6b5b5 !important;
}

.Form-Item {
    border-top: 2px solid #ccc;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
    display: flex;
    align-items: center;
}

.Form-Item:nth-child(5) {
    border-bottom: 1px solid #ddd;
}

.Form-Item-Label {
    width: 100%;
    max-width: 300px;
    letter-spacing: 0.05em;
    font-weight: bold;
    font-size: 18px;
    color: black;
}

.Form-Item-Label.isMsg {
    margin-top: 8px;
    margin-bottom: auto;
    display: flex;
}

.Form-Item-Label-Required {
    border-radius: 6px;
    margin-right: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 75px;
    height: 30px;
    display: inline-block;
    text-align: center;
    background: #F37497;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
}

.Form-Item-Input {
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    flex: 1;
    width: 100%;
    max-width: 410px;
    background: #eaedf2;
    font-size: 14px;
}

@media screen and (max-width: 600px) {
    .Form {
        margin-top: 40px;
    }

    .instruct {
        font-size: 12px;
    }

    .Form-Item {
        padding-top: 16px;
        padding-bottom: 16px;
        display: flex;
    }

    .Form-Item-Label {
        max-width: inherit;
        display: flex;
        align-items: center;
        font-size: 9px;
    }

    .Form-Item-Label.isMsg {
        margin-top: 0;
    }

    .Form-Item-Label-Required {
        border-radius: 4px;
        padding-top: 4px;
        padding-bottom: 4px;
        width: 32px;
        font-size: 9px;
    }

    .Form-Item-Input {
        margin-left: 0;
        flex: inherit;
        font-size: 9px;
    }
}

.Form-Item-Textarea {
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    height: 216px;
    flex: 1;
    width: 100%;
    max-width: 410px;
    background: #eaedf2;
    font-size: 18px;
}

@media screen and (max-width: 600px) {
    .Form-Item-Textarea {
        margin-top: 18px;
        margin-left: 0;
        height: 150px;
        flex: inherit;
        font-size: 8px;
    }
}

.Form-Btn {
    border-radius: 6px;
    margin: auto;
    margin-top: 32px;
    padding: 10px 70px;
    display: block;
    letter-spacing: 0.05em;
    background: #F37497;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
}

@media screen and (max-width: 600px) {
    .Form-Btn {
        margin-top: 24px;
        padding: 8px 20px;
        font-size: 9px;
    }
}

@media only screen and (max-width: 600px) {
    .container {
        padding: 0;
    }

    .titleBlock {
        font-size: 12px;
        padding: 8px 50px;
        text-align: center;
        margin-bottom: 20px;
    }

    .newWrap {
        width: 100%;

        .comment {
            font-size: 12px;
            color: black;
            padding: 20px;
        }
    }
}
</style>
