import React, {useState} from 'react';
import {Image, View, StyleSheet, Button, Text} from 'react-native';

const imagem = require('./img/jokenpo.png');

export default function App() {
  const [escolhaUsuario, setEscolhaUsuario] = useState('');
  const [escolhaComputador, setEscolhaComputador] = useState('');
  const [resultado, setResultado] = useState('');

  function icone(escolha, jogador) {
    if (escolha === 'Pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{jogador}</Text>
          <Image source={require('./img/pedra.png')} />
        </View>
      );
    } else if (escolha === 'Papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{jogador}</Text>
          <Image source={require('./img/papel.png')} />
        </View>
      );
    } else if (escolha === 'Tesoura') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{jogador}</Text>
          <Image source={require('./img/tesoura.png')} />
        </View>
      );
    } else {
      return false;
    }
  }

  function jokenpo(escolhaUsuario) {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch (numeroAleatorio) {
      case 0:
        escolhaComputador = 'Pedra';
        break;
      case 1:
        escolhaComputador = 'Papel';
        break;
      case 2:
        escolhaComputador = 'Tesoura';
        break;
    }

    let resultado = '';

    if (escolhaComputador == 'Pedra') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'Papel') {
        resultado = 'Você Ganhou !';
      }
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Você Perdeu !';
      }
    }

    if (escolhaComputador == 'Papel') {
      if (escolhaUsuario == 'Papel') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Você Ganhou !';
      }
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Você Perdeu !';
      }
    }

    if (escolhaComputador == 'Tesoura') {
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Você Ganhou !';
      }
      if (escolhaUsuario == 'Papel') {
        resultado = 'Você Perdeu !';
      }
    }

    setEscolhaUsuario(escolhaUsuario);
    setEscolhaComputador(escolhaComputador);
    setResultado(resultado);
  }

  return (
    <View>
      <Image resizeMode="stretch" style={{width: '100%'}} source={imagem} />
      <View style={styles.painelAcoes}>
        <View style={styles.btnEscolha}>
          <Button
            title="Pedra"
            onPress={() => {
              jokenpo('Pedra');
            }}
          />
        </View>
        <View style={styles.btnEscolha}>
          <Button
            title="Papel"
            onPress={() => {
              jokenpo('Papel');
            }}
          />
        </View>
        <View style={styles.btnEscolha}>
          <Button
            title="Tesoura"
            onPress={() => {
              jokenpo('Tesoura');
            }}
          />
        </View>
      </View>
      <View style={styles.palco}>
        <Text style={styles.resultado}>{resultado}</Text>
        {icone(escolhaComputador, 'Computador')}
        {icone(escolhaUsuario, 'Você')}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
  },
  painelAcoes: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  palco: {
    alignItems: 'center',
    marginTop: 10,
  },
  resultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
  txtJogador: {
    fontSize: 18,
    alignSelf: 'center',
  },
  icone: {
    alignSelf: 'center',
    marginTop: 20,
  },
});
