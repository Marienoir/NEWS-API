<template>
  <div>
    <div class="row">
      <div class="cols" v-for="news in getNewsCategory" :key="news.key">
        <img v-if="news.urlToImage" :src="news.urlToImage"/>
        <img v-else :src="image">
        <h2>{{ news.source.name }}</h2>
        <h4>{{ news.title }}</h4>
        <p>{{ news.description }}</p>
        <a :href="news.url" target="_blank">READ MORE</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      image: "https://sportshub.cbsistatic.com/i/r/2021/11/03/dfa65109-0ac8-4788-988a-268d3d065c60/thumbnail/1200x675/bbd77cf0cb3ae78743649aec280fdcaf/aaron-rodgers-2.jpg",
      newsCategory: [],
    };
  },
  // watch: {
  //   const category = this.$route.params.category
  //   console.log(category)
  //   this.showNewsCategory(category);
  // },
  watch: {
    params: function (category) {
      //console.log(category);
      this.showNewsCategory(category);
    },
  },
  mounted() {
    // const category = this.$route.params.category;
    // this.showNewsCategory(category);
    this.showNewsCategory("general");
  },
  computed: {
    ...mapGetters(["getNewsCategory"]),
  },
  methods: {
    ...mapActions(["showNewsCategory"]),
  },
};
</script>
<style scoped>
.row {
  margin: 20px 50px;
  display: grid;
  grid-template-columns: auto auto;
  text-align: justify;
}
.cols {
  padding: 30px 30px;
  margin: 20px;
  background: rgb(239 239 243);
  box-shadow: 4px 4px 4px #ae9f9f;
}
img{
  width: 200px;
}
a {
  padding: 10px;
  font-weight: bold;
  background: green;
  color: white;
  border-radius: 2px;
  margin-top: 10 px;
}
p {
  margin-bottom: 30px;
}
</style>