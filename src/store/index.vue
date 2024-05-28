<script lang="ts">
import IProjetos from "@/interfaces/IProjeto.vue";
import {createStore, Store, useStore as vuexUseStore} from "vuex";
import {InjectionKey} from "vue";
import IProjeto from "@/interfaces/IProjeto.vue";
import {ALTERA_PROJETO, ADICIONA_PROJETO, EXCLUIR_PROJETO} from "@/store/Tipo-Mutacoes";

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
       projetos:[]
  },
   mutations:{
    [ADICIONA_PROJETO](state , nomeDoProjeto: string){
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      } as IProjeto
      state.projetos.push(projeto)
     },
     [ALTERA_PROJETO](state, projeto: IProjeto){
      const index = state.projetos.findIndex(proj => proj.id === projeto.id);
      state.projetos[index] = projeto;
     },
     [EXCLUIR_PROJETO](state, id: string) {
       state.projetos = state.projetos.filter(proj => proj.id != id)
     }
   }
})

interface Estado {
  projetos: IProjetos[]
}

export function useStore() : Store<Estado>{
  return vuexUseStore(key)
}
</script>

<template>

</template>

<style scoped>

</style>


