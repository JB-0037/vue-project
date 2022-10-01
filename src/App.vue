<script>

</script>
<template>
  <h1>TP VUE.JS</h1>

  <nav>
    <ul>
      <li>
        <router-link to="/">Accueil</router-link>
      </li>
      <li>
        <router-link to="/depenses">Dépenses</router-link>
      </li>
      <li>
        <router-link to="/categories">Catégories</router-link>
      </li>
    </ul>
  </nav>

  <router-view></router-view>


</template>