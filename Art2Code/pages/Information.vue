<template>
    <div class="body d-flex flex-column align-items-center">
        <img style="height: 15vh;" src="/logo.png" alt="logo Art2Code">
        <h1 class="my-5 text02">Art2Code</h1>
        <h3 class="text01">Game Jam</h3>
        <h3 class="my-5 text01">Du 17/11/23 au 19/11/23</h3>
        <h4 class="text03">à Epitech Rennes</h4>

        <div class="card border-light my-5">
            <h5 class="card-header">Gains</h5>
            <div class="card-body">
                <h5 class="card-title">Credits Epitech</h5>
                <p class="card-text">La Jam permet de toucher 6 xp pour 3 jours de travail</p>
                <h5 class="card-title">Credits Etpa</h5>
                <p class="card-text">Pas d'information pour le moment</p>
                <h5 class="card-title">Pour les gagnants</h5>
                <p class="card-text">Pas d'information pour le moment</p>
            </div>
        </div>

        <div class="card border-light my-5">
            <h5 class="card-header">Deroulements</h5>
            <div class="card-body">
                <h5 class="card-title">Vendredi</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">17h00</h6>
                <p class="card-text">Kick-off + Révélation du theme</p>
                <h6 class="card-subtitle mb-2 text-body-secondary">17h30</h6>
                <p class="card-text">Idéation</p>
                <h6 class="card-subtitle mb-2 text-body-secondary">18h00</h6>
                <p class="card-text">Présentation des projets et création des groupes</p>
                <h5 class="card-title">Samedi</h5>
                <p class="card-text">Rien de prévu pour l'instant</p>
                <h5 class="card-title">Dimanche</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">15h00</h6>
                <p class="card-text">Présentation des projets</p>
                <h6 class="card-subtitle mb-2 text-body-secondary">16h30</h6>
                <p class="card-text">Présentation des gagnants</p>
            </div>
        </div>

        <div class="card border-light my-5">
            <h5 class="card-header">Réglements</h5>
            <div class="card-body">
                <h5 class="card-title">Nourriture - Boisson - Locaux</h5>
                <p class="card-text">- Vous ne pouvez pas boire d'alcool dans l'enceinte des locaux d'Epitech Rennes (tout type d'alcool).</p>
                <p class="card-text">- Vous ne pouvez pas manger dans les salles machines (toute salle ou il y a plus de 3 pc), il y a une cafetaria mise a disposition.</p>
                <p class="card-text">- Ne pas remplir les poubelles de cartons a pizza, vous pouvez les mettre dans les poubelles jaune devant le bâtiment.</p>
                <p class="card-text">- Vous pouvez dormir dans les locaux à condition de laisser propre derrières vous.</p>
            </div>
        </div>

        <div class="card border-light my-5">
            <h5 class="card-header">Information Utile</h5>
            <div class="card-body">
                <h5 class="card-title">Mise à jours</h5>
                <p class="card-text">Nous vous invitons à venir consulter de temps en temps ce site, certaines infos seront mis à jour, et nous <br>vous enverrons dans tous les cas des mails d'information avant la Jam.</p>
                <h5 class="card-title">Nourriture</h5>
                <p class="card-text">Pour l'instant aucun repas n'es prévus, mais nous sommes en train d'essayer de chercher un financement.</p>
            </div>
        </div>

        <iframe class="my-5" src="https://discord.com/widget?id=1154411423284330578&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

    </div>
  </template>
  
<style>
    .text03 {
        color: #E2BF40;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
    }
    .text02 {
        color: #e9c95e;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
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
        min-height: 100vh;
        height: auto;
        width: 100vw;
        position: absolute;
        background: linear-gradient(180deg, #070B2C 0%, rgba(3, 6, 29, 0.727) 100%);
    }
</style>
  
  <script>
  
  export default {
    methods: {
      navigateToInscrition() {
        this.$router.push('/Inscription');
      }
    }
  }
  
  
  </script>