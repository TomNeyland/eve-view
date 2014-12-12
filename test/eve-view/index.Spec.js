import * as eveView from "../../src/eve-view";

describe('eve-view', function() {

    it('loads', function() {
        console.log(eveView);
    });

    it('exposes models', function() {
        console.log(eveView.models);
        expect(eveView).to.contain.keys('models');
    });


});
