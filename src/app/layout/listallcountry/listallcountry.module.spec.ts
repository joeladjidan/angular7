import { ListAllCountryModule } from './listallcountry.module';

describe('ListAllCountryModule', () => {
    let listallcountryModule: ListAllCountryModule;

    beforeEach(() => {
        listallcountryModule = new ListAllCountryModule();
    });

    it('should create an instance', () => {
        expect(listallcountryModule).toBeTruthy();
    });
});
