import FormatDateTime from './format-dateTime'
import { GENERAL_CACHE_EXPIRE, GENERAL_CACHE_ALIAS } from '@/common/constant'

/**
 * @name general-cache
 *
 * @param key The name of the storage must be in English, automatically prefixed with the system name
 * @param data Stored data
 * @param type The value can be local or session
 * @param desc The description of the stored information
 *
 * @method set() Set the cache
 * @method remove() Remove the cache
 * @method get() Read the cache
 */

export default class GeneralCache {
  private cacheKey: string

  private cacheType: string

  cacheData: any

  desc: any

  public constructor(key: string, type: string = 'session') {
    this.cacheKey = `${GENERAL_CACHE_ALIAS}-${key}`
    this.cacheType = type
  }

  public set(data: any = null, desc: string = ''): void {
    this.cacheData = {
      save_time: new FormatDateTime(new Date(), 'yyyy-MM-dd hh:mm:ss').format(),
      save_data: data,
      save_desc: desc
    }
    if (this.cacheType === 'local') {
      window.localStorage.setItem(this.cacheKey, JSON.stringify(this.cacheData))
    } else if (this.cacheType === 'session') {
      window.sessionStorage.setItem(this.cacheKey, JSON.stringify(this.cacheData))
    }
  }

  public remove(): void {
    if (this.cacheType === 'local') {
      window.localStorage.removeItem(this.cacheKey)
    } else if (this.cacheType === 'session') {
      window.sessionStorage.removeItem(this.cacheKey)
    }
  }

  public get(): any {
    let data: any = {}
    if (this.cacheType === 'local') {
      data = window.localStorage.getItem(this.cacheKey)
    }
    if (this.cacheType === 'session') {
      data = window.sessionStorage.getItem(this.cacheKey)
    }
    if (data) {
      const savedTimeValue = new Date().getTime() - new Date(JSON.parse(data).save_time).getTime()
      if (savedTimeValue > GENERAL_CACHE_EXPIRE) {
        if (this.cacheType === 'local') {
          data = window.localStorage.removeItem(this.cacheKey)
        }
        if (this.cacheType === 'session') {
          data = window.sessionStorage.removeItem(this.cacheKey)
        }
        return data
      }
      return data ? JSON.parse(data).save_data : JSON.parse(data)
    }
    return data
  }
}
