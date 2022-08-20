export interface DashboardApiItemProps {
    hide?: boolean;
    
}

export interface DashboardItemsState {
    hideAdviceItem: boolean;
    hideCatFactItem: boolean;
    hideYearFactItem: boolean;
    hideDadJokeItem: boolean;
    hideProgrammingItem: boolean;
    hideYesOrNoItem: boolean;
    hideLyricsItem: boolean;
    hideFoxItem: boolean;
    hideMusicPlayerItem: boolean;
    hidePokemonItem: boolean;
    hideRPSItem: boolean;
  }

export interface Note {
  title: string;
  content: string;
}