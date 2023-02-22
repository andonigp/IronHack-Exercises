<script>
  export default {
    name: 'App',
  }
</script>

<template>
    <div id="app">
      <section class="header">
        <div>
          <img src="./images/Ironhack_logo.png" alt="IronHack Logo">
          <img src="./images/Burger_menu.png" alt="Burguer Menu">
        </div>
      </section>
      <section class="hero">
        <div>
          <img src="./images/Vue_logo.png" alt="This is a VUE logo.">
          <div>
            <h1>Welcome to Vue.js</h1>
            <p>Become a coding ninja with the fastest-<br>growing JavaScript framework</p>
          </div>
          <button>Awesome!</button>
        </div>
      </section>
      <section class="Banner">
        <div class="greenBanner">
          <div class="greenBannerContainer">
            <img src="./images/USP-1.png" alt="">
            <h3>Performant</h3>
            <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
          </div>
          <div class="greenBannerContainer">
            <img src="./images/USP-2.png" alt="">
            <h3>Approachable</h3>
            <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
          </div>
          <div class="greenBannerContainer">
            <img src="./images/USP-3.png" alt="">
            <h3>Versatile</h3>
            <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
          </div>
        </div>
      </section>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');
  #app {
    width: 600px;
    height: 803px;
    margin: auto;
  }
  .header {
    margin: 20px 30px 28px 30px;
  }

  .header div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hero div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero div img {
    position: absolute;
    top: 86px;
  }

  .hero div button {
    position: absolute;
    top: 359px;
    background: #34495E;
    height: 31px;
    width: 121px;
    border-radius: 13px;
    color: white;
    font-family: inter;
    font-size: 14px;
  }

  .hero div div h1 {
    font-size: 50px;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    line-height: 95px;
    margin-bottom: 0;
    color: #2B2F30;
    position: absolute;
    top: 174px;
  }

  .hero div div p {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
    margin-top: 0;
    text-align: center;
    position: absolute;
    top: 292px;
  }

  .greenBanner {
    height: 312px;
    width: 600px;
    background-color: #39B983;
    position: absolute;
    top: 450px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .greenBannerContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .greenBannerContainer h1 {
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 95px;
    letter-spacing: -0.02em;
    text-align: center;
    color:black
  }

  .greenBannerContainer p {
    font-family: Inria Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.02em;
    text-align: center;
    width: 125px;
  }
</style>
