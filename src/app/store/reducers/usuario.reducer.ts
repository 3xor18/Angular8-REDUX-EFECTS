import * as fromUsuarioAction from '../actions/usuario.actions'
import { Usuario } from 'src/app/models/usuario.model';


export interface UsuarioState {
    users: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
};

const initialState: UsuarioState = {
    users: null,
    loaded: false,
    loading: false,
    error: null
};

export function UsuarioReducer(state = initialState, action: fromUsuarioAction.UsuarioActions): UsuarioState {

    switch (action.type) {
        case fromUsuarioAction.UsuarioUActionTypes.CARGAR_USUARIO: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case fromUsuarioAction.UsuarioUActionTypes.CARGAR_USUARIO_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                users: { ...action.usuario }
            };
        }

        case fromUsuarioAction.UsuarioUActionTypes.CARGAR_USUARIO_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
        }

        default: {
            return state;
        }
    }
}