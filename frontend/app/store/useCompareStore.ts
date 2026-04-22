import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ComparePlayer {
  id: number;
  name: string;
  photoUrl: string;
  positionShort: string | null;
}

interface CompareStore {
  selectedPlayers: ComparePlayer[];
  togglePlayer: (player: ComparePlayer) => void;
  removePlayer: (id: number) => void;
  clear: () => void;
}

export const useCompareStore = create<CompareStore>()(
  persist(
    (set) => ({
      selectedPlayers: [],
      togglePlayer: (player) =>
        set((state) => {
          const exists = state.selectedPlayers.some((p) => p.id === player.id);
          if (exists) {
            return { selectedPlayers: state.selectedPlayers.filter((p) => p.id !== player.id) };
          }
          if (state.selectedPlayers.length >= 3) {
            return state;
          }
          return { selectedPlayers: [...state.selectedPlayers, player] };
        }),
      removePlayer: (id) =>
        set((state) => ({
          selectedPlayers: state.selectedPlayers.filter((p) => p.id !== id),
        })),
      clear: () => set({ selectedPlayers: [] }),
    }),
    {
      name: 'compare-storage',
    }
  )
);
