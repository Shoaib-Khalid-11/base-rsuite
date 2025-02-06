import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { MenuProps } from "types/menu.model";
const initialState: MenuProps = {
  isDashboardDrawerOpened: false,
  isComponentDrawerOpened: true,
};
export const useGetMenuMaster = () => {
  const { data, isLoading } = useQuery<MenuProps>({
    queryKey: ["menuMaster"],
    queryFn: () => initialState,
    staleTime: Infinity, // Prevent re-fetching when data becomes stale
    refetchOnWindowFocus: false, // Disable re-fetch on window focus
    refetchOnReconnect: false, // Disable re-fetch on reconnect
  });
  const memoizedValue = useMemo(
    () => ({
      menuMaster: (data as MenuProps) ?? initialState,
      menuMasterLoading: isLoading,
    }),
    [data, isLoading]
  );
  return memoizedValue;
};
export const useToggleComponentDrawer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (isComponentDrawerOpened: boolean) => {
      const currentMenuMaster = queryClient.getQueryData<MenuProps>([
        "menuMaster",
      ]);
      if (!currentMenuMaster) return Promise.resolve(undefined);
      return Promise.resolve({
        ...currentMenuMaster,
        isComponentDrawerOpened,
      });
    },
    onSuccess: (updatedData) => {
      queryClient.setQueryData(["menuMaster"], updatedData);
    },
  });
};
export const useToggleDrawerOpen = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (isDashboardDrawerOpened: boolean) => {
      const currentMenuMaster = queryClient.getQueryData<MenuProps>([
        "menuMaster",
      ]);
      if (!currentMenuMaster) return Promise.resolve(undefined);
      return Promise.resolve({
        ...currentMenuMaster,
        isDashboardDrawerOpened,
      });
    },
    onSuccess: (updatedData) => {
      queryClient.setQueryData(["menuMaster"], updatedData);
    },
  });
};
