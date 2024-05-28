<script  lang="ts">
import {computed, defineComponent} from 'vue';
import { useStore } from "@/store/index.vue";

export default defineComponent({
  name: 'Projetos',
  data() {
      return{
        nomeDoProjeto: "",
        // projetos: [] as IProjetos[]
      };
  },
  methods:{
    salvar(){
      this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto);
      // const projeto: IProjetos ={
      //   nome: this.nomeDoProjeto,
      //   id: new Date().toISOString(),
      // }
      // this.projetos.push(projeto);
      this.nomeDoProjeto = "";
    }
  },
  setup() {
      const store = useStore()
    return{
        store,
      projetos: computed(()=> store.state.projetos)
    }
  },
})
</script>

<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>

  <form @submit.prevent="salvar">
    <div class="field">
      <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
      <input type="text" id="nomeDoProjeto" class="input" v-model="nomeDoProjeto"  />
    </div>
    <div class="field">
      <button class="button" type="submit">Salvar</button>
    </div>
  </form>
  <table class="table is-fullwidth">
    <thead>
    <tr>
      <th>ID</th>
      <th>Nome</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="projeto in projetos" :key="projeto.id">
      <td>{{ projeto.id }}</td>
      <td>{{ projeto.nome }}</td>
    </tr>
    </tbody>
  </table>
</section>
</template>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>