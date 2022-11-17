import { useState } from 'react';
import { Buttom } from '../components/Buttom';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';
import { Container, MenuContainer, CategoriesContainer, Footer, FooterContainer } from './styles';

export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [selectedTable, setSelectedTable] = useState('');

    function handleSaveTable(table: string) {
        setSelectedTable(table);
    }

    return (
        <>
            <Container>
                <Header />

                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>

                <MenuContainer>
                    <Menu />
                </MenuContainer>
            </Container>

            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Buttom onPress={() => setIsTableModalVisible(true)}>Novo Pedido</Buttom>
                    )}
                </FooterContainer>
            </Footer>

            <TableModal
                visible={isTableModalVisible}
                onClose={() => setIsTableModalVisible(false)}
                onSave={(table: string) => handleSaveTable(table)}
            />
        </>
    );
}
