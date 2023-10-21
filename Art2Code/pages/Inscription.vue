<template>
    <div class="body d-flex flex-column align-items-center justify-content-center">
        <div v-if="responseCode === 200" class="alert alert-success fixed-top text-center" role="alert">
            Vous vous êtes bien enregistré !
        </div>
        <div v-else-if="responseCode === 400" class="alert alert-danger fixed-top text-center" role="alert">
            Une erreur est survenue, veuillez réessayer.
        </div>
        <input v-model="nom" class="buttonclass" type="text" placeholder="Nom">
        <input v-model="prenom" class="buttonclass" type="text" placeholder="Prenom">
        <input v-model="email" class="buttonclass" type="email" placeholder="Adresse Mail">
        <input v-model="tel" class="buttonclass" type="tel" placeholder="N° de Telephone">
        <input v-model="years" class="buttonclass" type="number" placeholder="Année (Dans votre école)">
        <select v-model="ecole">
            <option value="" disabled selected>Ecole :</option>
            <option value="Epitech">Epitech</option>
            <option value="Etpa">Etpa</option>
        </select>
        <input class="buttonclass" type="text" placeholder="Que savez-vous faire ?">
        <h3 class="text01">Un mail sera envoyé<br>avec les informations<br>relative à la Jam.</h3>
        <input @click="requestInscription" class="my-5 btn btn-primary" type="button" value="S'inscrire">
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import PocketBase from 'pocketbase'
    const pb = new PocketBase('http://127.0.0.1:8090');

    let nom = ref('')
    let prenom = ref('')
    let email = ref('')
    let tel = ref('')
    let years = ref(0)
    let ecole = ref('')
    let skill = ref('')
    let responseCode = ref(null)

    const requestInscription = async () => {
        const data = {
            "nom": nom.value,
            "prenom": prenom.value,
            "email": email.value,
            "annee": years.value,
            "telephone": tel.value,
            "ecole": ecole.value,
            "skill": skill.value
        };
        try {
            let record = await pb.collection('inscrit').create(data);
            console.log(record);
            responseCode.value = 200;
        } catch (e) {
            console.error(e);
            responseCode.value = 400;
            console.log("400");
        }
    };
</script>
  
  <style>
      .buttonclass {
        margin: 1%;
        border-radius: 10px;
        height: 50px;
        width: 300px;
        text-align: center;
      }
      .text01 {
        margin: 1%;
        color: #E2BF40;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 20px;
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