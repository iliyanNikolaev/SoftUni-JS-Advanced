const rgbToHexColor = require('../rgbToHex');
const { expect } = require('chai');
describe('RgbToHex tests', () => {
    it('return undefined for first param less than zero', ()=>{
        expect(rgbToHexColor(-1, 127, 127)).to.be.undefined;
    });
    it('return undefined for second param less than zero', ()=>{
        expect(rgbToHexColor(127, -1, 127)).to.be.undefined;
    });
    it('return undefined for third param less than zero', ()=>{
        expect(rgbToHexColor(127, 127, -1)).to.be.undefined;
    }); 
    it('return undefined for first param greater than 255', ()=>{
        expect(rgbToHexColor(256, 127, 127)).to.be.undefined;
    });
    it('return undefined for second param greater than 255', ()=>{
        expect(rgbToHexColor(127, 256, 127)).to.be.undefined;
    });
    it('return undefined for third param greater than 255', ()=>{
        expect(rgbToHexColor(127, 127, 256)).to.be.undefined;
    });
    it('return undefined for first param of type string', ()=>{
        expect(rgbToHexColor('127', 127, 127)).to.be.undefined;
    });
    it('return undefined for second param of type string', ()=>{
        expect(rgbToHexColor(127, '127', 127)).to.be.undefined;
    });
    it('return undefined for third param of type string', ()=>{
        expect(rgbToHexColor(127, 127, '127')).to.be.undefined;
    });
    it('return undefined for first param decimal number', ()=>{
        expect(rgbToHexColor(127.23, 127, 127)).to.be.undefined;
    });
    it('return undefined for second param decimal number', ()=>{
        expect(rgbToHexColor(127, 127.23, 127)).to.be.undefined;
    });
    it('return undefined for third param decimal number', ()=>{
        expect(rgbToHexColor(127, 127, 127.23)).to.be.undefined;
    });
    it('return undefined for missing third param', ()=>{
        expect(rgbToHexColor(127, 127, '127')).to.be.undefined;
    });
    it('return undefined for array of numbers in valid range', ()=>{
        expect(rgbToHexColor([127, 127, 127])).to.be.undefined;
    });
    it('return undefined for missing params', ()=>{
        expect(rgbToHexColor()).to.be.undefined;
    });
    it('return undefined for two missing params', ()=>{
        expect(rgbToHexColor(1)).to.be.undefined;
    });
    it('return undefined for one missing param', ()=>{
        expect(rgbToHexColor(23, 24)).to.be.undefined;
    });
    it('valid params', ()=>{
        expect(rgbToHexColor(252, 186, 3)).to.be.equal('#FCBA03');
    });
    it('valid params', ()=>{
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('valid params', ()=>{
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
});