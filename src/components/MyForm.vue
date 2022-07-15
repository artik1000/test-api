<template>
    <form class="my__form" id="my__form" onsubmit="return false">
        <div>
            <div class="my__form__label__container">
                <label class="my__form__label">Name</label>
            </div>
            <div>
                <my-input
                        v-model="myFormData.name"
                        :placeholder="'Boris'"
                />
            </div>
        </div>
        <div>
            <div class="my__form__label__container">
                <label class="my__form__label">Avatar Link</label>
            </div>
            <div>
                <my-input
                        v-model="myFormData.avatar"
                        :placeholder="'https://somelink'"
                />
            </div>
        </div>
        <div>
            <div class="my__form__label__container">
                <label class="my__form__label">Email</label>
            </div>
            <div>
                <my-input
                        v-model="myFormData.city"
                        :placeholder="'Москва'"
                />
            </div>
        </div>
        <div>
            <div class="my__form__label__container">
                <label class="my__form__label">Email</label>
            </div>
            <div>
                <my-input
                        v-model="myFormData.email"
                        :placeholder="'yandex@mail.ru'"
                        :typ="'email'"
                />
            </div>
        </div>
        <div>
            <div class="my__form__label__container">
                <label class="my__form__label">Phone</label>
            </div>
            <div>
                <my-input
                        v-model="myFormData.phone"
                        :placeholder="'+7(976)-999-00-00'"
                        :typ="'tel'"
                />
            </div>
        </div>
        <div>
            <div class="my__form__label__container">
                <label class="my__form__label">Site</label>
            </div>
            <div>
                <my-input
                        v-model="myFormData.site"
                        :placeholder="'https://somelink'"
                />
            </div>
        </div>
        <my-button
                @click="postRequest"
                style="align-self: flex-start"
                :disableBtn="!canCreate"
        >
            Создать
        </my-button>
    </form>
</template>
<script>
import axios from "axios";
import MyInput from '@/components/MyInput'
import MyButton from '@/components/MyButton'
export default {
    name: 'my-form',
    components: {
        MyInput,
        MyButton
    },
    data () {
        return {
            myFormData: {
                name: '',
                avatar: '',
                email: '',
                city: '',
                phone: '',
                site: ''
            },
        }
    },
    methods: {
        async postRequest() {
            await axios({
                method: 'post',
                url: '/api/users',
                data: {
                    name: this.myFormData.name,
                    avatar: this.myFormData.avatar,
                    email: this.myFormData.email,
                    city: this.myFormData.city,
                    phone: this.myFormData.phone,
                    site: this.myFormData.site,
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(function(response) {
                    console.log('Ответ сервера успешно получен!');
                    console.log(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                });
            let data = this.myFormData;
            this.$store.commit('TestModule/pushUser', data);
            this.myFormData = {
                name: '',
                avatar: '',
                email: '',
                city: '',
                phone: '',
                site: ''
            };
            document.getElementById('my__form').reset();
        },
    },
    computed: {
        canCreate (){
            return this.myFormData.avatar
                && this.myFormData.name
                && this.myFormData.email
                && this.myFormData.city
                && this.myFormData.phone
                && this.myFormData.site
        }
    }

}
</script>
<style lang="sass" scoped>
    @mixin center
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        margin: auto
    .my__form
        @include center
        display: flex
        flex-direction: column
        background: rgb(131,58,180)
        background: linear-gradient(135deg, rgba(131,58,180,1) 0%, rgba(29,50,253,1) 50%, rgba(69,188,252,1) 100%)
        color: white
        width: 20vw
        box-sizing: border-box
        height: max-content
        padding: 16px
        border-radius: 10px
        gap: 10px
        .my__form__input__col
            display: flex
            flex-direction: column
        .my__form__label__container
            text-align: left
            width: 100%
            font-weight: bold
</style>