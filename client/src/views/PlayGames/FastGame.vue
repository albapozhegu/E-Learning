<template>
  <FastGameData />
</template>

<script>
import FastGameData from 'components/PlayGames/FastGame/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';

export default {
  mounted() {
    useTitle('Game hands faster than brain');
    useCloseNavigation();
  },
  components: {
    FastGameData
  }
};
</script>
