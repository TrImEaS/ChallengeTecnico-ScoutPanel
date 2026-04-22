import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import type { ComparePlayer } from "../../../store/useCompareStore";

export function useSyncCompareUrl(selectedPlayers: ComparePlayer[], isEmpty: boolean) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (selectedPlayers.length === 0 && !isEmpty) return;

    const currentUrlParams = searchParams.toString();
    const newParams = new URLSearchParams();
    
    selectedPlayers.forEach((player) => newParams.append("player", player.name));
    const newUrlParams = newParams.toString();

    if (currentUrlParams !== newUrlParams) {
      navigate(`/compare?${newUrlParams}`, { replace: true });
    }
  }, [selectedPlayers, isEmpty, navigate, searchParams]);
}