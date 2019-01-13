import FetchRequest from "./fetchChannel";

const sortBtnHandler = (e) => {
    const value = e.target.value;

    FetchRequest({channelName:localStorage.getItem('chosen_channel'), sortBy:value})
};

export default sortBtnHandler;