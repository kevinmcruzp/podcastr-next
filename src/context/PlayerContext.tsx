import React, { ReactNode, createContext, useContext } from "react";

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextProps = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  play: (episode: Episode) => void;
  // isPlaying: boolean;
  // isLooping: boolean;
  // isShuffling: boolean;
  // hasNext: boolean;
  // hasPrevious: boolean;
  // playList: (list: Episode[], index: number) => void;
  // playNext: () => void;
  // playPrevious: () => void;
  // togglePlay: () => void;
  // toggleLoop: () => void;
  // toggleShuffle: () => void;
  // setPlayingState: (state: boolean) => void;
  // clearPlayerState: () => void;
};

type PlayerProviderProps = {
  children: ReactNode;
};

export const PlayerContext = createContext({} as PlayerContextProps);

export function PlayerProvider({ children }: PlayerProviderProps) {
  const [episodeList, setEpisodeList] = React.useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = React.useState(0);

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
  }
  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
