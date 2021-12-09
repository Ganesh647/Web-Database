<template>
  <div>
  <nav class="navbar">
    <ul>
      <li><a href="#about">About Me</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#hobbies">Hobbies & Image Collection</a></li>
      <li><a href="#papers">Papers</a></li>
      <li><a href="#experiences">Experiences</a></li>
      <li><button @click="onProjectClicked()" >My Project</button></li>

    </ul>
  </nav>
  <!--       Navigation bar starts here    -->
  <!--       Home page starts here-->
  <section id="home">
    <h1 class="heading">HEllO THERE, I AM</h1>
    <h1 class="heading">ALBERT EINSTEIN</h1>
    <br><br>
  </section>
  <!--       Home page ends  here-->
  <!--       About me Sections starts here-->
  <section id="about">
    <h1 class="heading">About me</h1>
    <div class="about">
<!--      <img :src="this.logo" alt="My Pic">-->
      <div class="name">
        <h2>I'm Albert Einstein</h2>
        <a class="blogtext" href="https://en.wikipedia.org/wiki/Albert_Einstein">Visit my wikipedia page</a>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid hic aperiam ad quae, quia officia sit.
          Officiis qui deserunt iure eaque hic illum expedita, ratione repellat molestias atque iste velit,
          delectus ut magni sit ab ducimus dolore nobis, eius ullam eveniet? Quam, at adipisci quae delectus quia
          eveniet officia. Quam iusto tenetur blanditiis dolores eos doloribus, odio numquam architecto alias amet
          consequatur, quae eius corporis, officiis fugit temporibus reiciendis. Beatae nobis molestias tempore
          omnis consequuntur hic qui ducimus iure nostrum. Aperiam ab magnam sit iusto excepturi perferendis
          aliquid, recusandae autem ipsum accusantium, itaque aliquam laborum est quidem facere culpa, atque a
          numquam neque fugiat delectus. Dicta inventore molestiae ipsa hic vero explicabo temporibus dolores fuga
          voluptatibus. Molestiae corporis culpa expedita quas praesentium consequuntur explicabo sit, amet
          facilis obcaecati iure cum necessitatibus soluta velit earum quis repellendus assumenda commodi quia
          quam. Saepe dolorum laudantium quam dignissimos ducimus hic, iste explicabo praesentium.</p>
      </div>
    </div>
  </section>
  <!--       About me Section ends here-->
  <!--       Blog Section starts here-->
  <section id="blog">
    <h1 class="heading">Blog</h1>
    <div class="columns">
      <a class="blogbox" href="https://blog.yalebooks.com/tag/albert-einstein/">
        <h2> Visit my blog for new inventions</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo rem architecto, quibusdam nulla vel
          minima aut veritatis fuga dicta?</p>
      </a>
    </div>
  </section>

  <!--       Blog Section ends here-->
  <!--       Hobbies Section starts here-->
  <section id="hobbies">
    <h1 class="heading">Hobbies & Image Collection</h1>
    <div class="gallery">
      <div class="imagecontainer lr" id="sailor">
        <div class="text">
          <h2>Sailing</h2><br><br>
          <h4>Einstein loves sailing</h4>
        </div>
      </div>
      <div class="imagecontainer" id="violin">
        <div class="text">
          <h2>Violin</h2><br><br>
          <h4>Einstein loves playing violin</h4>
        </div>
      </div>
      <div class="imagecontainer" id="reading">
        <div class="text">
          <h2>Reading</h2><br><br>
          <h4>Einstein loves Reading whether it be a conceptual or a newspaper</h4>
        </div>
      </div>
      <div class="imagecontainer" id="talking">
        <div class="text">
          <h2>Chatting with friends</h2><br><br>
          <h4>Einstein loves Reading whether it be a conceptual or a newspaper</h4>
        </div>
      </div>
      <div class="imagecontainer" id="smoking">
        <div class="text">
          <h2>smoking</h2><br><br>
          <h4>Einstein loves Reading whether it be a conceptual or a newspaper</h4>
        </div>
      </div>
      <div class="imagecontainer" id="genius">
        <div class="text">
          <h2>Genius</h2><br><br>
          <h4>his favourite hobby was to unlock the secrets of universe by using simple things like chalk, board
            pen-paper and most important his brain.</h4>
        </div>
      </div>

    </div>
  </section>
  <!--       Hobbies&image collection Section ends here-->
  <!--       papers Section starts here-->
  <section id="papers">
    <h1 class="heading">Papers</h1>
    <div class="columns">
      <a class="box" href="https://einsteinpapers.press.princeton.edu/vol1-doc/">
        <h2>Volume 1: The Early Years, 1879-1902</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo rem architecto, quibusdam nulla vel
          minima aut veritatis fuga dicta?</p>
      </a>
      <a class="box" href="https://einsteinpapers.press.princeton.edu/vol1-trans/">
        <h2>Volume 1: The Early Years, 1879-1902 (English translation supplement)</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo rem architecto, quibusdam nulla vel
          minima aut veritatis fuga dicta?</p>
      </a>
      <a class="box" href="https://einsteinpapers.press.princeton.edu/vol2-doc/">
        <h2>Volume 2: The Swiss Years: Writings, 1900-1909</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo rem architecto, quibusdam nulla vel
          minima aut veritatis fuga dicta?</p>
      </a>
      <a class="box" href="https://einsteinpapers.press.princeton.edu/vol2-trans/">
        <h2>Volume 2: The Swiss Years: Writings, 1900-1909 (English translation supplement)</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo rem architecto, quibusdam nulla vel
          minima aut veritatis fuga dicta?</p>
      </a>
      <a class="box" href="https://einsteinpapers.press.princeton.edu/vol3-doc/">
        <h2>Volume 3: The Swiss Years: Writings 1909-1911</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo rem architecto, quibusdam nulla vel
          minima aut veritatis fuga dicta?</p>
      </a>
      <a class="box" href="https://einsteinpapers.press.princeton.edu/vol3-trans/">
        <h2>Volume 3: The Swiss Years: Writings 1909-1911 (English translation supplement)</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo rem architecto, quibusdam nulla vel
          minima aut veritatis fuga dicta?</p>
      </a>
      <a class="box" href="https://einsteinpapers.press.princeton.edu/vol4-doc/">
        <h2>Volume 4: The Swiss Years: Writings 1912-1914</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo rem architecto, quibusdam nulla vel
          minima aut veritatis fuga dicta?</p>
      </a>
      <a class="box" href="https://einsteinpapers.press.princeton.edu/vol4-trans/">
        <h2>Volume 4: The Swiss Years: Writings 1912-1914 (English translation supplement)</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo rem architecto, quibusdam nulla vel
          minima aut veritatis fuga dicta?</p>
      </a>
    </div>
  </section>

  <!--       papers Section ends here-->

  <!--       Experience Section Starts here-->
  <section id="experiences">
    <h1 class="heading">Experiences</h1>
    <section id="main">
      <p class="para">Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the
        neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
      <p class="para">Shoober shooberino adorable doggo many pats, heckin good boys many pats pupper wrinkler, corgo
        maximum borkdrive. A frighten puggo wow very biscit.</p>
      <p class="para">Big ol h*ck adorable doggo vvv smol borking doggo with a long snoot for pats big ol, he made
        many woofs doing me a frighten puggo wow very biscit, ruff fat boi ruff long doggo. </p>
      <p class="para">Long bois mlem I am bekom fat wrinkler puggo maximum borkdrive big ol pupper I am bekom fat,
        fluffer vvv adorable doggo lotsa pats snoot. I am bekom fat ur givin me a spook length boy wow very biscit
        very good spot.</p>
      <p class="para">Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the
        neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
    </section>
  </section>
  </div>
  <!--       Experience Section ends here-->
</template>
<!--<style src="src/assets/styles/phone.css"></style>-->



<style>
@import "/phone.css";
@import "/phone1.css";
@import "/style.css";
@import "/tablet.css";

</style>
<script>


export default {
  name: 'portfolio',

  methods: {
    onProjectClicked() {
      console.log("clicked")
      this.$emit("projectHandler")
    }
  }
}
</script>
