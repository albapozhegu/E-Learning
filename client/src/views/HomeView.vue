
<template>
  <main>
    <Header/>
    <Banner image="../assets/resources/images/background.jpg"/>
    <div class="c-header">
      <h1>You Can Learn English For Free!</h1>
      <h3>Skill Group</h3>
      
    </div>
    <div class='home-items-container'>
      <div>
      <div class="flex">
        <SkillCard 
          title="Listening" 
          icon="" 
          detail="Listening videos and answer the questions."
          :path="ROUTES.LISTENING_TOPICS"
        />
        <SkillCard 
          :path="ROUTES.GRAMMAR_LEVELS" 
          title="Grammar" 
          icon="" 
          detail="Our guide to English grammar."
        />
        <SkillCard 
          :path="ROUTES.WORD_TOPIC" 
          title="Vocabulary" 
          icon="" 
          detail="Learn English vocabulary by topic"
        />
        <SkillCard 
          :path="ROUTES.IPA_LIST" 
          title="Pronunciation" 
          icon="" 
          detail="Tricky English pronunciation. With listening practice."
        />
      </div>
    </div>
    <div class="t-group">
      <h3>Tool Group</h3>
      <div class="flex">
        <SkillCard 
          :path="ROUTES.TEST" 
          title="Test" 
          icon="" 
          detail="Practice test to review yourself."
        />
        <SkillCard 
          :path="ROUTES.GAMES_HOME" 
          title="Play Games" 
          icon="" 
          detail="Play games to review your vocabulary."
        />
      </div>
    </div>
  </div>
  </main>
</template>

<script>
import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'
import SkillCard from '../components/SkillCard.vue'
import { ROUTES } from "@/constants/index";

  export default{
    name:'HomeView',
    data() {
      return {
       ROUTES:ROUTES
      }
    },
    components:{
      Header,
      Banner,
      SkillCard
    }
  }
</script>

<style>
  .home-items-container{
    width: 960px;
    margin:auto;
  }
  .c-header{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    line-height:2.5;
  }
  .c-header h1{
    margin-top:2rem;
    font-size:2rem;
    font-weight:bolder;
  }
  .c-header h3{
    font-weight:bolder;
    
  }
  .t-group{
    text-align:center;
  }
  .t-group h3{
    font-weight:bolder;
  }
</style>


