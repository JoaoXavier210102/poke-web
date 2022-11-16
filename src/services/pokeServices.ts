import api from "./api";

export const getPokemon = async (id: number | string) => api.get(`pokemon/${id}/`);
export const getStatusPokemon = async (id: number) => api.get(`pokemon-species/${id}/`);
export const getEvolutions = async (url: string) => api.get(url);