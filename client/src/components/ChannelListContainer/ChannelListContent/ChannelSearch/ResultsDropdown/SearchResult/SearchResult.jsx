import React from "react";
import "./style.css";
import { Avatar, useChatContext } from "stream-chat-react";
import { channelByUser } from "./channelByUser";

const SearchResult = (
  channel,
  focusedId,
  setChannel,
  type,
  setToggleContainer
) => {
  const { client, setActiveChannel } = useChatContext();

  if (type === "channel") {
    return (
      <div
        onClick={() => {
          setChannel(channel);
          if (setToggleContainer) {
            setToggleContainer((prevState) => !prevState);
          }
        }}
        className={
          focusedId === channel.id
            ? "channel-search__result-container__focused"
            : "channel-search__result-container"
        }
      >
        <div className="result-hashtag">#</div>
        <p className="channel-search__result-text">{channel.data.name}</p>
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        channelByUser({
          client,
          setActiveChannel,
          channel,
          setChannel,
        });
        if (setToggleContainer) {
          setToggleContainer((prevState) => !prevState);
        }
      }}
      className={
        focusedId === channel.id
          ? "channel-search__result-container__focused"
          : "channel-search__result-container"
      }
    >
      <div className="channel-search__result-user">
        <Avatar
          image={channel.image || undefined}
          name={channel.name}
          size={24}
        />
        <p className="channel-search__result-text">{channel.name}</p>
      </div>
    </div>
  );
};

export default SearchResult;
