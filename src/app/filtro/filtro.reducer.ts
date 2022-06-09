import { Action, createReducer, on } from "@ngrx/store";
import { setFiltro, filtrosValidos } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'todos' as filtrosValidos;

export const filtroReducer = createReducer<filtrosValidos,Action>(
    estadoInicial,
    on(setFiltro, (state, {filtro}) => filtro),
);