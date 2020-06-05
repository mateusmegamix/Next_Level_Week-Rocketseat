import Knex from 'knex'

export async function seed(Knex: Knex) {
    await Knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { title: 'Residuos e Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Residuos Orgânicos', image: 'organicos.svg' },
        { title: 'Óleo de Cozinha', image: 'oleo.svg' },
    ]);
}