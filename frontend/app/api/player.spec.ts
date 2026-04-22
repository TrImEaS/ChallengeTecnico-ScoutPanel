import { describe, it, expect, vi, afterEach } from 'vitest';
import { getPlayerById, getPlayersToCompare } from './player';

global.fetch = vi.fn();

describe('Player API Service', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch a player by ID successfully', async () => {
    const mockPlayer = { id: 1, name: 'Miguel Borja' };
    
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => mockPlayer,
    });

    const result = await getPlayerById('1');

    expect(result).toEqual(mockPlayer);
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/player/1'));
  });

  it('should throw an error when API fails', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: false,
    });

    await expect(getPlayerById('999')).rejects.toThrow('Failed to load player');
  });

  it('should fetch multiple players for comparison', async () => {
    const mockPlayers = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
    
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => mockPlayers,
    });

    const result = await getPlayersToCompare(['A', 'B']);

    expect(result).toEqual(mockPlayers);
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('names=A,B'));
  });

  it('should return empty array if no names provided for comparison', async () => {
    const result = await getPlayersToCompare([]);
    expect(result).toEqual([]);
    expect(global.fetch).not.toHaveBeenCalled();
  });
});