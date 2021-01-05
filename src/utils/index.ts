import getUnixTime from 'date-fns/getUnixTime';

export const getUnixTS = (): number => getUnixTime(new Date());

export const copyObject = (obj: object) => JSON.parse(JSON.stringify(obj));