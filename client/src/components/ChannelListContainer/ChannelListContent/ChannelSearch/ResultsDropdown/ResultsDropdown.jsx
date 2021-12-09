import React from "react";
import "./style.css";
import SearchResult from "./SearchResult/SearchResult";

const ResultsDropdown = ({
  focusedId,
  teamChannels,
  directChannels,
  loading,
  setChannel,
  setQuery,
  setToggleContainer,
}) => {
  return (
    <div className="channel-search__results">
      <p className="channel-search__results__header">Channels</p>
      {loading && !teamChannels.length && (
        <p className="channel-search__results__header">
          <i>Loading...</i>
        </p>
      )}
      {!loading && !teamChannels.length ? (
        <p className="channel-search__results__header">
          <i>No channels found </i>
        </p>
      ) : (
        teamChannels?.map((channel, i) => (
          <SearchResult
            channel={channel}
            focusedId={focusedId}
            key={i}
            setChannel={setChannel}
            type="channel"
            setToggleContainer={setToggleContainer}
          />
        ))
      )}

      <p className="channel-search__results__header">Users</p>
      {loading && !directChannels.length && (
        <p className="channel-search__results__header">
          <i>Loading...</i>
        </p>
      )}
      {!loading && !directChannels.length ? (
        <p className="channel-search__results__header">
          <i>No direct messages found </i>
        </p>
      ) : (
        directChannels?.map((channel, i) => (
          <SearchResult
            channel={channel}
            focusedId={focusedId}
            key={i}
            setChannel={setChannel}
            type="user"
            setToggleContainer={setToggleContainer}
          />
        ))
      )}
    </div>
  );
};

export default ResultsDropdown;
