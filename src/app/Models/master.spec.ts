import { Master } from './master';

describe('Master', () => {
  it('should create an instance of master', () => {
    expect(new Master()).toBeTruthy();
  });
});

it('should accept values in the constructor of master', () => {
    let master = new Master({
        title: 'hello',
        firstName: 'Jet'
    });
    expect(master.title).toEqual('hello');
    expect(master.firstName).toEqual('Jet');
});