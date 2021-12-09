export const customChannelTeamFilter = (channels, type) => {
  return channels.filter((channel) => channel.type === "team");
};
export const customChannelMessagingFilter = (channels, type) => {
  return channels.filter((channel) => channel.type === "messagin");
};
