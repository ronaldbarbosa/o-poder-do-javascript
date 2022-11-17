import { useState } from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Buttom } from '../Buttom';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Form, Header, ModalBodyView, Overlay, Input } from './styles';

interface TableModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
    const[table, setTable] = useState('');

    function handleSave() {
        onSave(table);
        onClose();
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType='fade'
        >
            <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <ModalBodyView>
                    <Header>
                        <Text weight='600'>Informe a mesa</Text>

                        <TouchableOpacity onPress={onClose}>
                            <Close color='#666' />
                        </TouchableOpacity>
                    </Header>

                    <Form>
                        <Input
                            placeholder='Número da mesa'
                            placeholderTextColor='#666'
                            keyboardType='number-pad'

                            onChangeText={(value) => setTable(value)}
                            // Outra opção para o comando acima: onChangeText={setTable}
                        />

                        <Buttom onPress={handleSave} disabled={table.length === 0}>Salvar</Buttom>
                    </Form>
                </ModalBodyView>
            </Overlay>
        </Modal>
    );
}
