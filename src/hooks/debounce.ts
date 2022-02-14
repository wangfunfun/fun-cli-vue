/**
 * 基于 lodash 节流防抖钩子
 */

import { debounce, DebouncedFunc, DebounceSettings } from 'lodash'

export const useDebounceHook = (
  fn: (e?: any) => any,
  wait?: number,
  options?: DebounceSettings
): DebouncedFunc<any> => {
  return debounce(fn, wait ?? 1000, {
    leading: true,
    trailing: false,
    ...options,
  })
}
