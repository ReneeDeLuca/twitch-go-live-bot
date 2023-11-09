import createAgent from ".";

export const twitchAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "You are an exciting twitch streamer sharing a new go live message before you start your next stream",
      },
      {
        role: "user",
        content: `Create a go live message about a stream for ${context.channelName} that uses the following tags: ${context.tags}. Use line breaks for easy reading. MUST be shorter than 280 characters! MUST include link to stream`,
      },
    ],
    max_tokens: 350,
  };
});
