import { useCallback, useEffect, useReducer, useRef } from "react";

import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

const defaultApiUrl = "http://localhost:5000/api/";

export function useFetch(initialState, options) {
  const cache = useRef({});
  const cancelRequest = useRef(false);

  const [isAuthenticated] = useLocalStorage("isAuthenticated");

  const token = isAuthenticated != null && isAuthenticated.token;

  const _options = {
    addBearerAutomatically: true,
    ...options,
  };

  const _initialState = {
    status: "init",
    pending: false,
    error: undefined,
    data: undefined,
    ...initialState,
  };

  // Keep state logic separated
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "request":
        return { ..._initialState, pending: true, status: "fetching" };
      case "success":
        return {
          ..._initialState,
          pending: false,
          status: "fetched",
          data: action.payload,
          error: undefined,
        };
      case "failure":
        return {
          ..._initialState,
          pending: false,
          status: "error",
          error: action.payload,
          data: undefined,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, _initialState);

  const fetchData = useCallback(async (method = "get", url, data) => {
    dispatch({ type: "request" });

    if (cache.current[url]) {
      dispatch({ type: "success", payload: cache.current[url] });
      return { response: cache.current[url], error: undefined };
    } else {
      try {
        const response = await axios(url, {
          baseURL: defaultApiUrl,
          method,
          headers: _options.addBearerAutomatically &&
            token && { Authorization: `Bearer ${token}` },
          data,
        });
        cache.current[url] = response.data;

        if (cancelRequest.current)
          return { response: response.data, error: undefined };

        dispatch({ type: "success", payload: response.data });
        return { response: response.data, error: undefined };
      } catch (error) {
        if (cancelRequest.current) return { response: undefined, error };

        dispatch({ type: "failure", payload: error.message });
        return { response: undefined, error };
      }
    }
  }, []);

  return [fetchData, state];
}

export const ApiError = {
  UNMOUNTED: "unmounted",
  CANCELED: "canceled",
};
