import React from 'react';

export const API = {
  baseUrl: process.env.REACT_APP_API_ENDPOINT || '',
  backendApiUrl: process.env.REACT_APP_RESOURCES_ENDPOINT || '',
  requestToken: process.env.REACT_APP_HTTP_REQUEST_TOKEN || '',
};
