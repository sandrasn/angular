import { DTOModule } from './dto.module';

describe('DTOModule', () => {
  let dTOModule: DTOModule;

  beforeEach(() => {
    dTOModule = new DTOModule();
  });

  it('should create an instance', () => {
    expect(dTOModule).toBeTruthy();
  });
});
