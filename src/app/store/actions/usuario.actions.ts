import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UsuarioUActionTypes {
    CARGAR_USUARIO = '[Usuarios] Cargar Usuarios',
    CARGAR_USUARIO_FAIL = '[Usuarios] Cargar Usuario Fallidos',
    CARGAR_USUARIO_SUCCESS = '[Usuarios] Cargar Usuario Exitosos',
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class cargarUsuario implements Action {
    readonly type = UsuarioUActionTypes.CARGAR_USUARIO;
    constructor(public id: string) { }
}

export class cargarUsuarioFail implements Action {
    readonly type = UsuarioUActionTypes.CARGAR_USUARIO_FAIL;
    constructor(public payload: any) { }
}

export class cargarUsuarioSuccess implements Action {
    readonly type = UsuarioUActionTypes.CARGAR_USUARIO_SUCCESS
    constructor(public usuario: Usuario) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UsuarioActions
    = cargarUsuario | cargarUsuarioFail | cargarUsuarioSuccess;
