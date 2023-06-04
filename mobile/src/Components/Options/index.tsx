import React from 'react';
import { View, Text } from 'react-native';

import { Copyrigth } from '../Copyrigth';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';

interface Props {
    onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Deixe seu feedback</Text>

            <View style={styles.options}>
                {Object.entries(feedbackTypes).map(([key, Value]) => (
                    <Option
                        key={key}
                        title={Value.title}
                        image={Value.image}
                        onPress={() =>
                            onFeedbackTypeChanged(key as FeedbackType)
                        }
                    />
                ))}
            </View>

            <Copyrigth />
        </View>
    );
}
