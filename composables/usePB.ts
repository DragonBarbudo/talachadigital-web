import PocketBase from 'pocketbase';

export const usePB = (instance: string | undefined): PocketBase => {
    if (!instance || instance === 'td') {
        return new PocketBase('https://admin.talachadigital.com/');
    } else if (instance === 'abrir') {
        return new PocketBase('https://abrirxyz.pockethost.io/');
    } else {
        throw new Error('Invalid instance');
    }
};