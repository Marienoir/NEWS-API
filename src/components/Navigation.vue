<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }">HOME</router-link>
    <router-link :to="{ name: 'Sport' }">SPORT</router-link>
    <router-link :to="{ name: 'Business' }">BUSINESS</router-link>
    <router-link :to="{ name: 'Technology' }">TECHNOLOGY</router-link>
    <router-link :to="{ name: 'Entertainment' }">ENTERTAINMENT</router-link>
    <select v-model="currentSource">
      <option>All</option>
      <option v-for="(source, index) in getNewsSource" :key="index">{{
          source.id
        }}
      </option>
      <router-view/>
    </select>
  </div>
 
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navigation",
  data() {
    return {
      currentSource: "",
      newsSource: [],
    };
  },
  watch: {
    currentSource: function (newSource) {
      //console.log(newSource);
      this.showNewsSource(newSource);
      // this.$route.path = newSource
    },
  },
  //   watch:{

  //   },
  //   watch:{
  //       `$route.query`:{
  //           handler: function(val){
  //               const source = val.source
  //               this.showNewsSource(source)
  //           }
  //       }
  //   },
  mounted() {
    this.showNewsSource();
  },
  computed: {
    ...mapGetters(["getNewsSource"]),
  },
  methods: {
    ...mapActions(["showNewsSource"]),
  },
};
</script>

<style>
.nav {
  display: flex;
  padding: 50px;
  justify-content: space-around;
  align-items: center;
  background: green;
}
a {
  text-decoration: none;
  color: #fff;
}
select {
  padding: 10px;
  outline: none;
  border: 5px;
}
</style>