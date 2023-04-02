const rgbToHexColor = require('../06RGBToHex');
const { expect }= require('chai');

describe('Test RGBtoHex Convertor', () => {
    it('convert black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    });

    it('convert white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
        
    it('convert random rgb', () => {
        expect(rgbToHexColor(125, 152, 184)).to.equal('#7D98B8');
    });

    it('convert 15, 15, 15 to #0F0F0F0F', () => {
        expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F');
    });

    it('return undefined for missing params', () => {
        expect(rgbToHexColor(0,0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });

    it('return undefined for missing params', () => {
        expect(rgbToHexColor(0,0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor());
    });

    it('return undefined for out of lower bound', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    
    it('return undefined for out of upper bound', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
    
    it('return undefined for string param', () => {
        expect(rgbToHexColor('255', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '255', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '255')).to.be.undefined;
    });

    it('return undefined for decima; param', () => {
        expect(rgbToHexColor(1.5, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 1.5, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 1.5)).to.be.undefined;
    });
});