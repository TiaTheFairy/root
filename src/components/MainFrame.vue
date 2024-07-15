<template>
  <div>
    <header-bar :height="headerHeight"></header-bar>

    <content-section></content-section>

    <!-- <footer-bar></footer-bar> -->
  </div>
</template>

<script>
import ContentSection from './frames/ContentSection.vue'
// import FooterBar from './frames/FooterBar.vue'
import HeaderBar from './frames/HeaderBar.vue'
export default {
  name: "Main-Frame",
  components: { HeaderBar, ContentSection },
  data() {
    return {
      headerHeight: 70,
    }
  },
  methods: {
    headerScroll() {
      const scrollTop = window.scrollY;

      if (scrollTop <= 200) {
        this.headerHeight = 70;
      }
      else if (scrollTop > 200 && scrollTop < 400) {
        this.headerHeight = 40;
      }
      else {
        this.headerHeight = 0;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.headerScroll);
  }
}
</script>

<style scoped></style>