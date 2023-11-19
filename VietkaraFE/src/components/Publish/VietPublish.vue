<template>
<div class="container">
    <div class="lang">
        <div class="flag">
            <div class="itemLang inactive">
                <img src="@/assets/images/publishPage/VietNam.png" alt="">
                <p>Tiếng Việt</p>
            </div>
            <div class="itemLang " @click="$router.push('/publishJp')">
                <img src="@/assets/images/publishPage/Japan.png" alt="">
                <p>日本語翻訳</p>
            </div>
        </div>
    </div>
    <div class="newWrap">
        <div class="titleBlock">
            Về việc đăng tải
        </div>
        <div class="underLine">
            Với việc trả phí cố định hàng tháng, bạn có
            <br>
            thể truy cập tất cả nội dung trên ”HanoKara”
        </div>
        <div class="checkListNote">
            <div class="itemCheckList">
                <img src="@/assets/images/publishPage/check-red.svg" alt="">
                <div class="textCheckList">
                    Tôi muốn chia sẻ thông tin cửa hàng và thông tin SNS trên Vietkara và lan truyền nó
                </div>
            </div>

            <div class="itemCheckList">
                <img src="@/assets/images/publishPage/check-red.svg" alt="">
                <div class="textCheckList">
                    Tôi muốn quảng bá cửa hàng và nhân viên bằng hình ảnh và video gốc
                </div>
            </div>

            <div class="itemCheckList">
                <img src="@/assets/images/publishPage/check-red.svg" alt="">
                <div class="textCheckList">
                    Tôi muốn nêu rõ sự khác biệt giữa các cửa hàng và kết nối với nhau để thu hút khách hàng!
                </div>
            </div>

            <div class="itemCheckList">
                <img src="@/assets/images/publishPage/check-red.svg" alt="">
                <div class="textCheckList">
                    Tôi muốn thông báo thông tin về các sự kiện và chương trình giảm giá.
                </div>
            </div>
        </div>
        <div class="underLine">
            Danh sách nội dung trên HanoKara
        </div>
        <div class="listContent">
            <div class="v-row">
                <div class="v-col-xs-12 v-col-sm-12 v-col-lg-6  v-col-xl-6 ">

                    <div class="itemContent">
                        <img src="@/assets/images/publishPage/content1.png" alt="">
                        <p class="textContent">Chụp ảnh tư liệu</p>
                    </div>
                </div>
                <div class="v-col-xs-12 v-col-sm-12 v-col-lg-6  v-col-xl-6 ">

                    <div class="itemContent">
                        <img src="@/assets/images/publishPage/content2.png" alt="">
                        <p class="textContent">Quay video tư liệu</p>
                    </div>
                </div>
                <div class="v-col-xs-12 v-col-sm-12 v-col-lg-6  v-col-xl-6 ">

                    <div class="itemContent">
                        <img src="@/assets/images/publishPage/content3.png" alt="">
                        <p class="textContent">Đăng thông tin
                            cửa hàng</p>
                    </div>
                </div>
                <div class="v-col-xs-12 v-col-sm-12 v-col-lg-6  v-col-xl-6 ">

                    <div class="itemContent">
                        <img src="@/assets/images/publishPage/content4.png" alt="">
                        <p class="textContent">Đăng thông tin
                            giảm giá</p>
                    </div>
                </div>
                <div class="v-col-xs-12 v-col-sm-12 v-col-lg-6  v-col-xl-6 ">

                    <div class="itemContent">
                        <img src="@/assets/images/publishPage/content5.png" alt="">
                        <p class="textContent">Đăng thông tin
                            mới nhất</p>
                    </div>
                </div>
                <div class="v-col-xs-12 v-col-sm-12 v-col-lg-6  v-col-xl-6 ">

                    <div class="itemContent">
                        <img src="@/assets/images/publishPage/content6.png" alt="">
                        <p class="textContent">Đăng thông tin
                            sự kiện</p>
                    </div>
                </div>
                <div class="v-col-xs-12 v-col-sm-12 v-col-lg-6  v-col-xl-6 ">

                    <div class="itemContent">
                        <img src="@/assets/images/publishPage/content7.png" alt="">
                        <p class="textContent">Đăng bộ sưu
                            tập ảnh</p>
                    </div>
                </div>
                <div class="v-col-xs-12 v-col-sm-12 v-col-lg-6  v-col-xl-6 ">

                    <div class="itemContent">
                        <img src="@/assets/images/publishPage/content8.png" alt="">
                        <p class="textContent">Sửa chữa
                            tiếng Nhật</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="underLine">
            Phí đăng tải
        </div>
        <div class="textPostingFee">
            Tất cả các nội dung trên được gói gọn trong một gói,<br>
            và giá rẻ nhất chỉ từ <span> X00$</span> mỗi tháng.<br>
            Trước tiên xin vui lòng liên hệ bằng<br>
            biểu mẫu dưới đây.
        </div>
        <div class="titleBlock">
            Bảng biểu mẫu
        </div>
        <div class="feedback">
            <div class="instruct">
                Vui lòng điền đầy đủ thông tin cần thiết<br>
                và nhấp vào nút "Gửi" để hoàn tất
            </div>
            <div class="form">
                <div class="Form-Item">
                    <p class="Form-Item-Label">
                        <span class="Form-Item-Label-Required">Bắt buộc</span>Tên cửa hàng
                    </p>
                    <input type="text" v-model="name" class="Form-Item-Input" placeholder="(Ví dụ : CLUB ALICE)">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">任意</span>Khu vực</p>
                    <input type="number" v-model="phoneNumber" class="Form-Item-Input" placeholder="(Ví dụ : KIM MA)">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">Bắt buộc</span>Tên người đại diện</p>
                    <input type="email" v-model="email" class="Form-Item-Input" placeholder="(Ví dụ : Nguyễn Văn A)">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">Bắt buộc</span>Số điện thoại</p>
                    <input type="email" v-model="email" class="Form-Item-Input" placeholder="(Ví dụ : 0123456789)">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">Bắt buộc</span>Địa chỉ email</p>
                    <input type="email" v-model="email" class="Form-Item-Input" placeholder="(Ví dụ : example@gmail.com)">
                </div>
                <div class="Form-Item">
                    <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">Bắt buộc</span>Nội dung câu hỏi liên hệ
                    </p>
                    <textarea class="Form-Item-Textarea" v-model="message"></textarea>
                </div>
                <div class="buttonWrap">
                    <v-btn class="buttonMain" @click="sendContact">Gửi</v-btn>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    API
} from '@/axios-api.js';
import {
    mapMutations
} from "vuex";

export default {
    data() {
        return {
            name: '',
            phoneNumber: '',
            email: '',
            message: ''
        };
    },
    mounted() {
        this.UPDATE_BREADCRUMBS([{
                title: 'ホーム',
                url: '/'
            },
            {
                title: ' お問い合わせ',
            }
        ])
    },
    methods: {
        ...mapMutations(['UPDATE_BREADCRUMBS']),

        async sendContact() {
            try {
                const response = await API.post('store_managers/contact/', {
                    contact_name: this.name,
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
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding: 50px 100px;
    max-width: 1000px;
    margin: 0 auto;
}

.flag {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;

    .itemLang {
        text-align: center;
        margin: 10px;
        color: black;
        text-decoration: underline;
        cursor: pointer;

        &.inactive {
            opacity: 0.2;
            cursor: unset;
            text-decoration: none;
        }
    }
}

.listContent {
    width: 100%;

    .itemContent {
        width: calc(50% - 10px);
        border: 4.18px solid #FF789D;
        border-radius: 11px;
        align-items: center;
        padding: 10px;
        display: flex;
        margin: 10px 0;

        img {
            margin-right: 20px;
        }

        .textContent {
            font-size: 18.1px;
            font-weight: bold;
        }
    }
}

.textPostingFee {
    font-size: 23.84px;
    font-weight: bold;
    text-align: center;
    color: black;

    span {
        font-weight: bold;
        color: red;
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

.newWrap {
    width: 80%;
    margin: auto;

    .underLine {
        font-size: 25.6px;
        font-weight: bold;
        color: #000;
        text-align: center;
        margin-top: 100px;
        margin-bottom: 30px;
        text-decoration: underline;
        text-decoration-color: #FF789D;
        text-decoration-thickness: 5px;
        line-height: 66px;
        text-underline-offset: 10px;
    }

    .checkListNote {
        width: 100%;
        border: 4.18px solid #FF789D;
        border-radius: 11px;
        padding: 20px;

        .itemCheckList {
            display: flex;

            img {
                margin-right: 20px;
            }

            .textCheckList {
                font-size: 18.1px;
                color: black;
                font-weight: bold;
            }
        }
    }
}

.feedback {
    padding: 20px;
    border: 1px black solid;
    width: 90%;
    margin: 50px auto;
    box-shadow: 0px 0px 4px 4px #ccc;
    cursor: pointer;

    :hover {
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

.Form-Item:nth-child(6) {
    border-bottom: 2px solid #ccc;
    margin-bottom: 30px;
}

.Form-Item-Label {
    width: 100%;
    max-width: 248px;
    letter-spacing: 0.05em;
    font-weight: bold;
    font-size: 13px;
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
    max-width: 410px;
    font-size: 11.68px;
    height: 24px;
    background: #E5E5E5;
    outline: none;
    border: none;

    &:focus {
        outline: none;
        border: none;
    }
}

@media screen and (max-width: 600px) {
    .Form {
        margin-top: 40px;
    }
    .textPostingFee{
      margin-bottom: 53px;
    }
    
    .listContent{
      .itemContent{
        width: auto;
        margin: 10px 15px;
        img{
          margin: 8px 17px 7px 0;
        }
        .textContent{
          width: -webkit-fill-available;
          color: black;
          font-size: 19.7px;
          text-align: center;
          font-weight: bold;
        }
      }
    }

    .instruct {
        font-size: 12px;
    }

    .checkListNote {
        width: auto !important;
        padding: 22px 15px !important;
        margin: 0 25px 97px 25px;

        .itemCheckList {
            img {
                margin: 0 0 27px 13px;
            }
        }
    }

    .feedback{
      padding: 13px 23px 24px 21px;
      margin-bottom: 63px;
      .instruct{
        margin-bottom: 40px;
        font-size: 12px;
      }
    }
    .underLine {
        margin-top: 95px !important;
        margin-bottom: 45px !important;
    }

    .Form-Item {
        padding: 13px 0;
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

.buttonWrap {
    text-align: center;

    .buttonMain {
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
