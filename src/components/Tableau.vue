<script>
export default {
    props: ['items'],
    data() {
        return {
            headers: ["Date", "Montant", "Description", "Catégorie"]
        };
    },
    methods: {
        del: function (idx) {
            this.items.splice(idx, 1);
        }
    } 
}
</script>

<template>
    <table>
        <tr>
            <th v-for="header in headers">
                {{header}}
            </th>
        </tr>
        <tr v-for="(item, idx) in items">
            <td>{{new Intl.DateTimeFormat('fr-FR').format(new Date(item.date))}}</td>
            <td>{{item.montant}}</td>
            <td>{{item.description}}</td>
            <td>{{item.categorie}}</td>
            <td><button v-on:click="del(idx)">Supprimer</button></td>
        </tr>
    </table>
</template>

<style>
    table, td, th {
        border: 2px solid black;
    }


</style>