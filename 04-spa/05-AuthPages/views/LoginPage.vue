<template>
  <form class="form" @submit.prevent="checkForm">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="email"
          type="email" placeholder="demo@email" class="form-control"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="password"
          type="password" placeholder="password" class="form-control"
        />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block">Войти</button>
    </div>
    <div class="form__append">
      Нет аккаунта?
      <router-link :to="{ name: 'register' }" class="link">Зарегистрируйтесь</router-link>
    </div>
  </form>
</template>

<script>
import { login } from '../data';

export default {
  name: 'LoginPage',

  data() {
    return {
      email: null,
      password: null,
    }
  },

  methods: {
    checkForm() {
      if (this.email && this.password) {
        this.sendData(this.email, this.password);
      }

      if (!this.email) {
        alert('Требуется ввести Email');
        return false;
      }
      if (!this.password) {
        alert('Требуется ввести пароль');
        return false;
      }
    },

    sendData(email, password) {
      login(email, password).then((res) => {
        if(res.message)
          alert(res.message);
        else {
          alert(res.fullname);
          if(this.$route.query.from)
            this.$router.push(this.$route.query.from);
          else
            this.$router.push('/');
        }
      });
    },
  },
};
</script>

<style></style>
