<template>
    <div class="container">
    <div :class="classes.root">
      <div class="ani-fade">
        <WordContributionData />
      </div>
    </div>
  </div>
</template>
<script>
export default {
     
}
<script>
import WordContributionData from "components/WordAdmin/AddWord/data";
import { makeStyles } from "@material-ui/core/styles";

export default {
  components: {
    WordContributionData
  },
  setup() {
    const classes = makeStyles(() => ({
      root: {
        margin: "3.2rem 0"
      }
    }))();

    return {
      classes
    };
  }
};
</script>

<style scoped>
.root {
  margin: 3.2rem 0;
}
</style>
