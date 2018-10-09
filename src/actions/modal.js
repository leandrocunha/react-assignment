const close = () => ({ type: 'MODAL/CLOSE' });
const show = params => ({ type: 'MODAL/OPEN', data: params });
const success = res => ({ type: 'MODAL/SUCCESS', data: { ...res } });

export { close, show, success };
