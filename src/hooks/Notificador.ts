import { TipoNotificacao } from "@/interfaces/INotificacao";
import { store } from '@/store/index.vue'
import { NOTIFICAR } from "@/store/Tipo-Mutacoes";

type Notificador = {
    notificar: (tipo: TipoNotificacao, titulo: string, texto: string) => void
}

export default () : Notificador => {

    const notificar = (tipo: TipoNotificacao, titulo: string, texto: string) : void => {
        store.commit(NOTIFICAR, {
            titulo,
            texto,
            tipo
        })
    }

    return {
        notificar
    }

}