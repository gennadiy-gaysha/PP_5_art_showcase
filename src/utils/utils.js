import { jwtDecode } from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      // 1) We use the reduce method to loop through  the new page of results that we got from the API.
      results: data.results.reduce((acc, cur) => {
        // 3) We used the some() method to loop  through the array of posts in the accumulator.
        // 4) Inside, we compared each accumulator item id to the current painting id from  the newly fetched paintings array.
        return acc.some((accResult) => accResult.id === cur.id)
          ? // 5) If the some() method returned true, this means  it found a match and we are displaying that painting already. So in this case we return the  accumulator without adding the painting to it.
            acc
          : // 6) And if the some() method does not find a  match, we return an array containing our spread accumulator with the new painting added to it.
            [...acc, cur];
        // 2) We then appended our new results to the existing  paintings in our paintings.results array in the state.
      }, prevResource.results),
    }));
  } catch (err) {}
};

/**
 * Stores the refresh token's expiration timestamp in local storage.
 */
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  // console.log(refreshTokenTimestamp);
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

/**
 * Checks if there is a refresh token's timestamp in local storage.
 */
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

/**
 * Removes the refresh token's timestamp from local storage.
 */
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
