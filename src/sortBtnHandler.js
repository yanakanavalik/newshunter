import fetchNewsChannel from "./fetchChannel";

export const sortBtnHandler = (e) => {
    const value = e.target.value;

    fetchNewsChannel({channelName:localStorage.getItem('chosen_channel'), sortBy:value})
};