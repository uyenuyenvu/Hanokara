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
                <div class="form">
                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            <span class="Form-Item-Label-Required">必須</span>店名
                        </p>
                        <!-- v-text-field を使用してマテリアルデザインに -->
                        <input v-model="storeName" class="Form-Item-Input" placeholder="例）株式会社令和" />
                    </div>
                    <div class="Form-Item">
                        <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>電話番号</p>
                        <!-- v-text-field を使用 -->
                        <input v-model="phoneNumber" class="Form-Item-Input" placeholder="例）0123456789" type="number" />
                    </div>
                    <div class="Form-Item">
                        <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
                        <!-- v-text-field を使用 -->
                        <input v-model="email" class="Form-Item-Input" placeholder="例）example@gmail.com" type="email" />
                    </div>
                    <div class="Form-Item">
                        <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
                        <!-- v-textarea を使用 -->
                        <textarea v-model="message" class="Form-Item-Textarea" placeholder=""></textarea>
                    </div>

                  <div class="buttonWrap">
                    <v-btn class="buttonMain" @click="sendContact">送信する</v-btn>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API } from '@/axios-api.js';
import {mapMutations} from "vuex";

export default {
    data() {
        return {
            storeName: '',
            phoneNumber: '',
            email: '',
            message: ''
        };
    },
  mounted() {
    this.handleResize()
    this.UPDATE_BREADCRUMBS([
      {
        title: 'ホーム',
      },
    ])
  },
  methods: {
    ...mapMutations(['UPDATE_BREADCRUMBS','UPDATE_IMAGE_COMPARE']),
    handleResize() {
     let width = window.innerWidth;
      if (width>600){
        // this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/PC_Home.png')
      }else{
        this.UPDATE_IMAGE_COMPARE('../../src/assets/images/compare/MB_Contact.png')
      }
    },
    async sendContact() {
            try {
                const response = await API.post('/api/v1/store_managers/contact/', {
                    contact_name: this.storeName,
                    contact_phone: this.phoneNumber,
                    contact_email: this.email,
                    contact_content: this.message
                });
                if (response.status === 201) {
                    // 成功した後の処理（例：通知の表示、フォームのリセットなど）
                }
            } catch (error) {
                // エラー処理（例：エラーメッセージの表示）
            }
        }
    },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.container {
    padding: 50px 0;
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
    margin: 50px auto;
    box-shadow: 0px 0px 4px 4px #ccc;
  cursor: pointer;
 &:hover{
    box-shadow: none;
 }
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
    outline: none;
    border: none;
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
    background: #FF789D;
    color: #fff;
    font-size: 14px;
}

.Form-Item-Input {
    border-radius: 3px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    flex: 1;
    width: 100%;
    font-size: 11.68px;
    height: 24px;
    background: #E5E5E5;
    outline: none;
    border: none;
  &:focus{
    outline: none;
    border: none;
  }
}

@media screen and (max-width: 600px) {
    .Form {
        // margin-top: 40px;
    }
    .feedback{
        width: calc(100% - 56px);
        padding: 19px 18px 0 17px;
    }
    .instruct {
        font-size: 12px;
        margin-bottom: 32px;
    }

    .Form-Item {
        padding: 12px 0 13px 0;
        display: flex;
        border-bottom: 1px solid #ccc;
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
    background: #FF789D;
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
        margin-bottom: 76px;
    }

    .titleBlock {
        font-size: 12px;
        padding: 8px 50px;
        text-align: center;
        margin: 22px 0 39px 0;
    }

    .newWrap {
        width: 100%;

        .comment {
            font-size: 12px;
            color: black;
            padding: 0 36px;
            margin: 0;
            margin-bottom: 43px;
        }
    }
    .buttonWrap{
        margin: 23px 0;
    } 
}
.buttonWrap{
  text-align: center;
  .buttonMain{
    border-radius: 6px;
    padding: 8px 15px;
    display: inline-block;
    text-align: center;
    background: #FF789D;
    color: #fff;
    font-size: 14px;
  }
}
</style>
