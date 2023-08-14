<template>
<div class="container">
    <div class="newWrap">
        <div class="titleBlock">
            お問い合わせ
        </div>
        <div class="comment">ベトナムのカラオケ・ガールズバー 情報サイト ベトカラに関しましてご不明点やご相談などございましたら、下記のお問い合わせフォームよりお問い合わせください。</div>
        <div class="feedback">
            <div class="instruct">
                以下のフォームに必要事項をご記入の上、「送信する」
                ボタンをクリックしてください。
            </div>
            <form class="form" action="">
                <div class="Form-Item">
                    <p class="Form-Item-Label">
                        <span class="Form-Item-Label-Required">必須</span>名前
                    </p>
                    <input type="text" class="Form-Item-Input" placeholder="例）株式会社令和">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required dark">任意</span>電話番号</p>
                    <input type="number" class="Form-Item-Input" placeholder="例）0123456789">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
                    <input type="email" class="Form-Item-Input" placeholder="例）example@gmail.com">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容
                    </p>
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

.titleBlock {
    background-color: #2D2427;
    font-size: 22px;
    font-weight: bold;
    color: white;
    padding: 10px 50px;
    margin: 20px 0px;
}

.newWrap {
    width: 80%;
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
    font-size: 20px;
    margin-bottom: 20px;
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
    max-width: 248px;
    letter-spacing: 0.05em;
    font-weight: bold;
    font-size: 18px;
    color: black;
}

.Form-Item-Label.isMsg {
    margin-top: 8px;
    margin-bottom: auto;
}

.Form-Item-Label-Required {
    border-radius: 6px;
    margin-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 48px;
    display: inline-block;
    text-align: center;
    background: #F37497;
    color: #fff;
    font-size: 14px;
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
    font-size: 8px;
}

@media screen and (max-width: 600px) {
    .Form {
        margin-top: 40px;
    }

    .instruct {
        font-size: 12px;
    }

    .Form-Item {
        padding-left: 14px;
        padding-right: 14px;
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
        font-size: 8px;
    }

    .Form-Item-Input {
        margin-left: 0;
        flex: inherit;
        font-size: 8px;
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
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 30px;
    display: block;
    letter-spacing: 0.05em;
    background: #F37497;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
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
