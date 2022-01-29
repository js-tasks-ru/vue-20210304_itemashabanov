<template>
  <meetups-view />
</template>

<script>
import MeetupsView from '../components/MeetupsView';

export default {
  name: 'QuerySync',

  props: {
    queryString: String,
  },

  components: { MeetupsView },
};
</script>
