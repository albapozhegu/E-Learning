<template>
  <WordMatchGameData />
</template>

<script>
import WordMatchGameData from 'components/PlayGames/WordMatch/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';

export default {
  mounted() {
    useTitle('Game (Word matching game)');
    useCloseNavigation();
  },
  components: {
    WordMatchGameData
  }
};
</script>
