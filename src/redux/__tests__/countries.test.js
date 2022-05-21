import reducer from '../countries/countries';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({ countries: [] });
});
