import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Copyrigth } from '../Copyrigth';

import succesImg from '../../assets/success.png';
import { styles } from './styles';

interface Props {
    onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
    return (
        <View style={styles.container}>
            <Image source={succesImg} style={styles.image} />

            <Text style={styles.title}>Agradecemos seu feedback</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={onSendAnotherFeedback}
            >
                <Text style={styles.buttonTitle}>Quero enviar outro</Text>
            </TouchableOpacity>

            <Copyrigth />
        </View>
    );
}
