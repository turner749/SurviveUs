import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Row, Text } from 'native-base';
export const HealthBar = (props) => {
  const { health, hunger, thirst, rest } = props;

  return (
    <Row style={styles.StatusRow}>
      <Card style={styles.Card}>
        <CardItem style={styles.CardItem} cardBody>
          <Text style={styles.CardText}>{`Health: ` + health}</Text>
        </CardItem>
      </Card>
      <Card style={styles.Card}>
        <CardItem style={styles.CardItem} cardBody>
          <Text style={styles.CardText}>{`Hunger: ` + hunger}</Text>
        </CardItem>
      </Card>
      <Card style={styles.Card}>
        <CardItem style={styles.CardItem} cardBody>
          <Text style={styles.CardText}>{`Thirst: ` + thirst}</Text>
        </CardItem>
      </Card>
      <Card style={styles.Card}>
        <CardItem style={styles.CardItem} cardBody>
          <Text style={styles.CardText}>{`Rest: ` + rest}</Text>
        </CardItem>
      </Card>
    </Row>
  );
};

const styles = StyleSheet.create({
  Card: {
    marginLeft: '2%',
    paddingLeft: '5%',
  },
  CardItem: {
    paddingRight: '1%',
    textAlign: 'left',
  },
  CardText: {
    fontSize: 14,
  },
  StatusRow: {
    height: '10%',
    marginBottom: '1%',
  },
  Row: {
    height: '6%',
    marginBottom: '1%',
  },
  Button: {
    marginLeft: '2%',
    marginRight: '1%',
  },
});
