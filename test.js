
'use strict';

const assert    = require('chai').assert;
const expect    = require('chai').expect;
const should = require('chai').should();
var Metodos = require("./index");

console.info(Metodos)

describe("Contador - Test", function() {

    describe("Validacion de la palabra", function() {
        const contador = new Metodos("Hola gato");

        it("Debe ser un string", function() {
            const pala=contador.getPalabra
            pala.should.to.be.a('string');
        });

        it("No puede ser vacio", function() {
            contador.getPalabra.should.that.not.is.empty;
        });
        it("Prueba", function() {
            const arreglo = contador.contadorVocales;
            expect(arreglo[0]).to.equal(2);
            expect(arreglo[1]).to.equal(0);
            expect(arreglo[2]).to.equal(0);
            expect(arreglo[3]).to.equal(2);
            expect(arreglo[4]).to.equal(0);
        });
    });
});