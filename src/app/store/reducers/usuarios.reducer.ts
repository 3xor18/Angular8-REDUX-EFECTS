import * as fromUsuarioAction from '../actions/usuarios.actions'
import { Usuario } from 'src/app/models/usuario.model';


export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
};

const initialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export function UsuaroReducer(state = initialState, action: fromUsuarioAction.UsuariosActions): UsuariosState {

    switch (action.type) {
        case fromUsuarioAction.UsuarioActionTypes.CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null

            }

        case fromUsuarioAction.UsuarioActionTypes.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [...action.usuarios]
            }

        case fromUsuarioAction.UsuarioActionTypes.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };

        default: {
            return state;
        }
    }
}