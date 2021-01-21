import React, { useMemo } from 'react';
import { ViewProps, View, Text, StyleSheet } from 'react-native';
import { styled } from '@theme/index';

const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled(Text)`
  font-size: 15px;
  text-align: center;
  font-family: Montserrat-SemiBold;
  font-weight: 600;
`;

const ExplainText = styled(Text)`
  font-size: 15px;
  text-align: center;
  margin: 25px 0px;
`;

const Button = styled.TouchableOpacity``;

const useVSpacerStyles = (height: number) => {
    const styles = useMemo(() => StyleSheet.create({
        vspacer: {
            height,
            // .. other styles
        }
    }), [ height ]);

    return styles;
};

const VSpacer: React.FC<{height: number;}> = ({ height }) => {
    const styles = useVSpacerStyles(height);
    return <View style={styles.vspacer} />;
};

interface Props extends ViewProps {
    onAction: () => void;
}

export const ExampleComponent: React.FC<Props> = ({ onAction }) => {
    // t = useAnyTranslationLibHook() ...
    const t = (val: string) => {
        return val.replaceAll('.', ' ').trim();
    };

    return (
        <EmptyContainer>
            <VSpacer height={20} />
            <TitleText>{t('archive.empty')}</TitleText>
            <VSpacer height={10} />
            <ExplainText>{t('archive.emptyText')}</ExplainText>
            <VSpacer height={20} />
            <Button onPress={onAction}>
                <Text>Los gehts</Text>
            </Button>
        </EmptyContainer>
    );
};