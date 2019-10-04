import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UsuarioActionTypes {
    CARGAR_USUARIO = '[Usuarios] Cargar Usuario',
    CARGAR_USUARIO_FAIL = '[Usuarios] Cargar Usuario Fallido',
    CARGAR_USUARIO_SUCCESS = '[Usuarios] Cargar Usuario Exitoso',
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class cargarUsuarios implements Action {
    readonly type = UsuarioActionTypes.CARGAR_USUARIO;
}

export class cargarUsuariosFail implements Action {
    readonly type = UsuarioActionTypes.CARGAR_USUARIO_FAIL;
    constructor(public payload: any) { }
}

export class cargarUsuariosSuccess implements Action {
    readonly type = UsuarioActionTypes.CARGAR_USUARIO_SUCCESS
    constructor(public usuarios: Usuario[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UsuariosActions
    = cargarUsuarios | cargarUsuariosFail | cargarUsuariosSuccess;
