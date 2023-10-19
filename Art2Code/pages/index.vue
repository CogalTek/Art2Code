<template>
  <div class="body d-flex flex-column align-items-center justify-content-center">
    <img style="height: 50vh;" src="/logo.png" alt="logo Art2Code">
    <h3 class="my-5 text01">Du 17/11/23 au 19/11/23</h3>
    <button @click="navigateToInscrition" class="my-3 btn btn-primary"><span body="text02">S'inscrire</span></button>
    <button @click="navigateToInformation" class="btn btn-primary"><span body="text02">Information</span></button>
  </div>
</template>

<style>
    .text02 {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: center;
    }
    .text01 {
      color: #E2BF40;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
    }
    .body {
      height: 100vh;
      width: 100vw;
      position: fixed;
      background: linear-gradient(180deg, #070B2C 0%, rgba(3, 6, 29, 0.727) 100%);
    }
</style>

<script>

export default {
  methods: {
    navigateToInscrition() {
      this.$router.push('/Inscription');
    },
    navigateToInformation() {
      this.$router.push('/Information');
    }
  }
}


</script>