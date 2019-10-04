
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as fromUsuario from '../actions/usuarios.actions'


@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        public usuarioService: UsuarioService
    ) { }


    @Effect() usuariosEfects$: Observable<Action> =
        this.actions$.pipe(
            ofType(fromUsuario.UsuarioActionTypes.CARGAR_USUARIO),
            switchMap(() => {
                return this.usuarioService.getUsers()
                    .pipe(
                        map(users => new fromUsuario.cargarUsuariosSuccess(users)),
                        catchError(error => of(new fromUsuario.cargarUsuariosFail(error))),
                        tap(action => console.log(action))
                    );
            })
        )

}