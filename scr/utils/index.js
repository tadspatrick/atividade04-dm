const contacts = [
    {
        id: 1,
        name: "Rebeca",
        hour: '18:21',
        msg: 'Ok amor, a noite conversmos',
        picture: {
            large: "https://randomuser.me/api/portraits/women/57.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg"
        }
    },
    {
        id: 2,
        name: "Elaine",
        hour: '12:36',
        msg: 'Tudo bem, até mais tarde',
        picture: {
            large: "https://randomuser.me/api/portraits/women/9.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg"
        }
    },
    {
        id: 3,
        name: "Bruna",
        hour: '14:01',
        msg: 'Tudo bem, até mais tarde',
        picture: {
            large: "https://randomuser.me/api/portraits/women/61.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/61.jpg"
        }
    },
    {
        id: 4,
        name: "Douglas",
        hour: '21:42',
        msg: 'Tudo bem, até mais tarde',
        picture: {
            large: "https://randomuser.me/api/portraits/men/95.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg"
        }
    },
    {
        id: 5,
        name: "Silvana",
        hour: '11:23',
        msg: 'Não esquece da festa amanhã',
        picture: {
            large: "https://randomuser.me/api/portraits/women/17.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg"
        }
    },
    {
        id: 6,
        name: "Rafael",
        hour: '08:54',
        msg: 'Valeu, abraço!',
        picture: {
            large: "https://randomuser.me/api/portraits/men/72.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/72.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/72.jpg"
        }
    },
    {
        id: 7,
        name: "Leandro",
        hour: '13:42',
        msg: 'Futebol confirmado na sexta',
        picture: {
            large: "https://randomuser.me/api/portraits/men/58.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg"
        }
    },
    {
        id: 8,
        name: "Carlos",
        hour: '07:40',
        msg: 'Documento recebido, obrigado!',
        picture: {
            large: "https://randomuser.me/api/portraits/men/67.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/67.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/67.jpg"
        }
    },
    {
        id: 9,
        name: "Mariana",
        hour: '22:47',
        msg: 'Saudade, venha me visitar!',
        picture: {
            large: "https://randomuser.me/api/portraits/women/77.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/77.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        }
    },
    {
        id: 10,
        name: "Cristian",
        hour: '12:33',
        msg: 'Na terça nós verificamos isso',
        picture: {
            large: "https://randomuser.me/api/portraits/men/79.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg"
        }
    },
]

const contactsStatus = [
    {
        id: 1,
        name: "Ariana",
        hour: 'Hoje 16:11',
        picture: {
            large: "https://randomuser.me/api/portraits/women/39.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/39.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/39.jpg"
        }
    },
    {
        id: 2,
        name: "Marcela",
        hour: 'Hoje 23:05',
        picture: {
            large: "https://randomuser.me/api/portraits/women/11.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/11.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/11.jpg"
        }
    },
    {
        id: 3,
        name: "Thiago",
        hour: 'Ontem 09:10',
        picture: {
            large: "https://randomuser.me/api/portraits/men/55.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg"
        }
    },
    {
        id: 4,
        name: "Silvia",
        hour: 'Ontem 12:00',
        picture: {
            large: "https://randomuser.me/api/portraits/women/47.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/47.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg"
        }
    },
    {
        id: 5,
        name: "João",
        hour: 'Ontem 23:49',
        picture: {
            large: "https://randomuser.me/api/portraits/men/12.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"
        }
    },
    {
        id: 6,
        name: "Márcio",
        hour: 'Ontem 16:00',
        picture: {
            large: "https://randomuser.me/api/portraits/men/28.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg"
        }
    },
    {
        id: 7,
        name: "Paulo",
        hour: 'Ontem 6:10',
        picture: {
            large: "https://randomuser.me/api/portraits/men/97.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/97.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg"
        }
    },
    {
        id: 8,
        name: "Lúcia",
        hour: 'Ontem 08:51',
        picture: {
            large: "https://randomuser.me/api/portraits/women/57.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg"
        }
    },
    {
        id: 9,
        name: "Robson",
        hour: 'Ontem 15:56',
        picture: {
            large: "https://randomuser.me/api/portraits/men/89.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/89.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/89.jpg"
        }
    },
]

const meuStatus = [
    {
        id: 1,
        name: "Meu Status",
        hour: 'Toque para atualizar seu status',
        picture: {
            large: "https://randomuser.me/api/portraits/men/27.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/27.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg"
        }
    }
]

export {
    contacts, contactsStatus, meuStatus,
} 
   