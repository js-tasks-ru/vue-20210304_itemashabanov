<template>
  <meetups-view
    :view="queryParams.view"
    :date="queryParams.date"
    :participation="queryParams.participation"
    :search="queryParams.search"
    @update:view="getQuery({ 'view': $event })"
    @update:date="getQuery({ 'date': $event })"
    @update:participation="getQuery({ 'participation': $event })"
    @update:search="getQuery({ 'search': $event })"
  />
</template>

<script>
import MeetupsView from '../components/MeetupsView';
import VueRouter from 'vue-router';

const { isNavigationFailure, NavigationFailureType } = VueRouter;
const defParams = {
  view: 'list',
  date: 'all',
  participation: 'all',
  search: '',
};

export default {
  name: 'QuerySync',

  components: { MeetupsView },

  computed: {
    queryParams() {
      return this.$route.query;
    },
  },

  methods: {
    getQuery(propsValue) {
      this.$router.push({ query: this.paramsString(propsValue) }).catch((err) => {
        if (isNavigationFailure(err, NavigationFailureType.redirected)) {
          throw err;
        }
      });
    },

    paramsString(propsValue) {
      let paramsString = { ...this.$route.query };
      if (propsValue[Object.keys(propsValue)[0]] !== defParams[Object.keys(propsValue)[0]])
        paramsString = Object.assign(paramsString, propsValue);
      else
        delete paramsString[Object.keys(propsValue)];

      return paramsString;
    },
  },
};
</script>
