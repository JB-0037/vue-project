<script>
export default {
    emits: ['add'],
    data: function() {
        return {
            date: new Date(),
            montant: null,
            description: null,
            categorie: null,
            errorMessage: null
        }
    },
    methods: {
        add: function() {
            if (!this.montant || !this.description || !this.date) {
                this.errorMessage = "Vous devez renseigner toutes les infos !";
                return;
            }

            this.$emit('add', {
                date: new Date(this.date),
                montant: this.montant,
                description: this.description,
                categorie: this.categorie
            });

            this.errorMessage = null;
            this.date = null;
            this.montant = null;
            this.description = null;
            this.categorie = null;
        }
    }
}
</script>
<template>
    <fieldset>
        <p v-if="errorMessage">{{errorMessage}}</p>
        <legend>Nouvel Evenement</legend>
        <label>Date :</label>
        <input type="date" v-model="date">
        <label>Montant :</label>
        <input v-model="montant">
        <label>Description :</label>
        <input v-model="description">
        <label>Categorie :</label>
        <input v-model="categorie">
        <button v-on:click="add">Enregistrer</button>
    </fieldset>
</template>

<style>
    input {
        display: block;
        margin-bottom: 15px;
    }
</style>