import { formatCurrency } from "../../scripts/utils/money.js";

describe('test Suite: Format Currency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('Works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('Rounds Upto the Nearest Cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

    it('Rounds Upto the Nearest Cent', () => {
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });

    it('Rounds Upto the Nearest Cent', () => {
        expect(formatCurrency(-2000.4)).toEqual('-20.00');
    });

})