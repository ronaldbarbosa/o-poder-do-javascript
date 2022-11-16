import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
    {
        '_id': '63736443b8f2a9a79fdafc73',
        'table': '1',
        'status': 'DONE',
        'products': [
            {
                'product': {
                    'name': 'Pizza quatro queijos',
                    'imagePath': '1668500762475-quatro-queijos.png',
                    'price': 40,
                },
                'quantity': 1,
                '_id': '63736443b8f2a9a79fdafc74'
            }
        ],
    },
    {
        '_id': '637364bdc6a8fd6ae9ec9c2a',
        'table': '2',
        'status': 'WAITING',
        'products': [
            {
                'product': {
                    'name': 'Pizza quatro queijos',
                    'imagePath': '1668500762475-quatro-queijos.png',
                    'price': 40,

                },
                'quantity': 2,
                '_id': '637364bdc6a8fd6ae9ec9c2b'
            },
            {
                'product': {
                    'name': 'Coca-Cola',
                    'imagePath': '1668501633496-coca-cola.png',
                    'price': 5,
                },
                'quantity': 2,
                '_id': '637364bdc6a8fd6ae9ec9c2c'
            }
        ]
    }
];

export function Orders() {
    return (
        <Container>
            <OrdersBoard
                icon="⏲"
                title="Fila de espera"
                orders={ orders }
            />
            <OrdersBoard
                icon="🧑🏽‍🍳"
                title="Em preparação"
                orders={ [] }
            />
            <OrdersBoard
                icon="✔"
                title="Pronto!"
                orders={ [] }
            />
        </Container>
    );
}
