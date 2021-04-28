<template>
  <form class="form" @submit.prevent="checkForm">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="email" type="email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input v-model="fullname" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="password" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input v-model="confirmPassword" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox"><input v-model="termsAgree" type="checkbox" /> Я согласен с условиями <span></span></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link :to="{ name: 'login' }" class="link">Войдите</router-link>
    </div>
  </form>
</template>

<script>
import { register } from '../data';

export default {
  name: 'RegisterPage',

  data() {
    return {
      email: null,
      fullname: null,
      password: null,
      confirmPassword: null,
      termsAgree: null,
    }
  },

  methods: {
    checkForm() {
      if (!this.email) {
        alert('Требуется ввести Email');
        return false;
      }
      if (!this.fullname) {
        alert('Требуется ввести полное имя');
        return false;
      }
      if (!this.password) {
        alert('Требуется ввести пароль');
        return false;
      }
      if (this.confirmPassword != this.password) {
        alert('Пароли не совпадают');
        return false;
      }
      if (!this.termsAgree) {
        alert('Требуется согласиться с условиями');
        return false;
      }

      this.sendData(this.email, this.fullname, this.password);
    },

    sendData(email, fullname, password) {
      register(email, fullname, password).then((res) => {
        if(res.message)
          alert(res.message);
        else {
          alert(res.id);
          this.$router.push('login');
        }
      });
    },
  },
};
</script>

<style></style>
