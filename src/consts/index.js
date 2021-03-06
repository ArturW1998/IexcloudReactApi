export const REQUESTED_DATA = 'REQUESTED_DATA';
export const REQUESTED_DATA_SUCCEEDED = 'REQUESTED_DATA_SUCCEEDED';
export const REQUESTED_DATA_FAILED = 'REQUESTED_DATA_FAILED';
export const FETCHED_DATA = 'FETCHED_DATA';

export const DRAG_HAPPEND = 'DRAG_HAPPEND';

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const DATA_PER_PAGE = 10;

const STOCKS_COUNT = 12;
const BASE_PATH = 'https://sandbox.iexapis.com/stable';
const ENDPOINT_PATH = '/stock/AAPL/financials/';
const QUERY_PARAM = 'token=';
const API_KEY = 'Tpk_d232dd87ed34407dacc92eee1edbf407';
export const URL = `${BASE_PATH}${ENDPOINT_PATH}${STOCKS_COUNT}?${QUERY_PARAM}${API_KEY}`;

export const localStorageKey = 'applicationState';
export const localStorageData = localStorage[localStorageKey];

export const emptyPageSizes = {
  xs: 12,
  sm: { size: 10, offset: 1 },
  md: { size: 8, offset: 2 },
  lg: { size: 6, offset: 3 }
};

export const dotsList = [
  { id: 1, baseClassName: 'dot' },
  { id: 2, baseClassName: 'dot' },
  { id: 3, baseClassName: 'dot' }
];
