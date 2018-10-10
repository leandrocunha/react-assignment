import * as api from './../../connections';

describe('Api', () => {
    it('fetch areas', () => api.areas().then(res => expect(res).toBeInstanceOf(Object)));

    it('fetch competitions', () => api.competitions(2163).then(res => expect(res).toBeInstanceOf(Object)));

    it('fetch matches', () => api.matches(2003).then(res => expect(res).toBeInstanceOf(Object)));

    it('fetch standings', () => api.standings(2003).then(res => expect(res).toBeInstanceOf(Object)));

    it('fetch team', () => api.team(674).then(res => expect(res).toBeInstanceOf(Object)));
});
