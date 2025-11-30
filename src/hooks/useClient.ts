import { useSyncExternalStore } from 'react'
/**
 * Returns whether the code is running on the client.
 * @returns { boolean } true on client, false on server
 */
export const useClient = (): boolean => {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}
