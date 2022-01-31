const carro = {

  velocidade: 0,


  ligado: false,


  ligar: function () {

    if (this.ligado) {

      console.log('Este carro já está ligado.');

    } else {

      this.ligado = true;

      let statusTexto = this.ligado ? "ligado" : "desligado";


      console.log(`Carro ${statusTexto}! Velocidade: ${carro.velocidade}.`);
    }
  },


  desligar: function () {

    if (!this.ligado) {

      console.log('Este carro já está desligado.');

    } else {

      this.ligado = false;

      this.velocidade = 0;


      let statusTexto = this.ligado ? "ligado" : "desligado";


      console.log(`Carro ${statusTexto}! Velocidade: ${carro.velocidade}.`);
    }
  },


  acelerar: function () {

    if (!this.ligado) {

      console.log('Não é possível acelerar um carro desligado.');

    } else {

      this.velocidade += 10;


      let statusTexto = this.ligado ? "ligado" : "desligado";


      console.log(`Carro ${statusTexto}! Velocidade: ${carro.velocidade}.`);
    }
  },


  desacelerar: function () {

    if (!this.ligado) {

      console.log('Não é possível desacelerar um carro desligado.');

    } else {

      this.velocidade -= 10;


      let statusTexto = this.ligado ? "ligado" : "desligado";


      console.log(`Carro ${statusTexto}! Velocidade: ${carro.velocidade}.`);
    }
  }
}


carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();