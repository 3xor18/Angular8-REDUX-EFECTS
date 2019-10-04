import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsuarioUActionTypes, cargarUsuario, cargarUsuarioFail, cargarUsuarioSuccess } from '../actions';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEfects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }

    @Effect() usuarioEfects$: Observable<Action> =
        this.actions$.pipe(
            ofType(UsuarioUActionTypes.CARGAR_USUARIO),
            switchMap(action => {
                const id = action['id'];
                return this.usuarioService.gerUser(id)
                    .pipe(
                        map(user => new cargarUsuarioSuccess(user)),
                        catchError(error => of(new cargarUsuarioFail(error)))
                    );
            })
        )
}