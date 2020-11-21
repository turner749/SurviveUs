import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Grid, Col, Row, Text } from 'native-base';
import { HealthBar } from '../healthbar/Healthbar';

export const HomeScreen = (props) => {
  const [health, setHealth] = useState(100);
  const [hunger, setHunger] = useState(100);
  const [thirst, setThirst] = useState(100);
  const [rest, setRest] = useState(100);
  const [death, setDeath] = useState(false);
  const [sleeping, setSleeping] = useState(false);

  function changeStatus(stat, value) {
    let lastValue;
    let setValue = {};
    if (stat === 'health') {
      lastValue = health;
      setValue = setHealth;
    } else if (stat === 'hunger') {
      lastValue = hunger;
      setValue = setHunger;
    } else if (stat === 'thirst') {
      lastValue = thirst;
      setValue = setThirst;
    } else if (stat === 'rest') {
      lastValue = rest;
      setValue = setRest;
    } else {
      return;
    }
    if (value > 0)
      lastValue + value <= 100 ? setValue(lastValue + value) : setValue(100);
    if (value < 0)
      lastValue + value > 0 ? setValue(lastValue + value) : setValue(0);
    if (health <= 0) setDeath(true);
  }

  return (
    <Container>
      <Grid>
        <Col>
          <HealthBar
            health={health}
            hunger={hunger}
            thirst={thirst}
            rest={rest}
          >
            {' '}
          </HealthBar>
          <Row style={styles.Row}>
            <Button
              small
              style={styles.Button}
              onPress={() => changeStatus('health', -10)}
            >
              <Text style={styles.CardText}>Dec Health</Text>
            </Button>
            <Button small onPress={() => changeStatus('health', 10)}>
              <Text style={styles.CardText}>Inc Health</Text>
            </Button>
          </Row>
          <Row style={styles.Row}>
            <Button
              small
              style={styles.Button}
              onPress={() => changeStatus('hunger', -10)}
            >
              <Text style={styles.CardText}>Dec Hunger</Text>
            </Button>
            <Button
              small
              style={styles.Button}
              onPress={() => changeStatus('hunger', 10)}
            >
              <Text style={styles.CardText}>Inc Hunger</Text>
            </Button>
          </Row>
          <Row style={styles.Row}>
            <Button
              small
              style={styles.Button}
              onPress={() => changeStatus('thirst', -10)}
            >
              <Text style={styles.CardText}>Dec Thirst</Text>
            </Button>
            <Button
              small
              style={styles.Button}
              onPress={() => changeStatus('thirst', 10)}
            >
              <Text style={styles.CardText}>Inc Thirst</Text>
            </Button>
          </Row>
          <Row style={styles.Row}>
            <Button
              small
              style={styles.Button}
              onPress={() => changeStatus('rest', -10)}
            >
              <Text style={styles.CardText}>Dec Rest</Text>
            </Button>
            <Button
              small
              style={styles.Button}
              onPress={() => changeStatus('rest', 10)}
            >
              <Text style={styles.CardText}>Inc Rest</Text>
            </Button>
          </Row>
        </Col>
      </Grid>
    </Container>
  );
};

const styles = StyleSheet.create({
  Card: {
    marginLeft: '2%',
    paddingLeft: '5%',
  },
  CardItem: {
    padding: '1%',
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
