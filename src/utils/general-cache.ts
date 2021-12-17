import FormatDateTime from './format-dateTime'
import { GENERAL_CACHE_EXPIRE, GENERAL_CACHE_ALIAS } from '@/common/constant'

/**
 * @name general-cache
 *
 * @param key 缓存的键名
 * @param data 缓存的数据
 * @param type 缓存类型，分为 session、local
 * @param desc 缓存信息的描述
 *
 * @method set() 缓存方法
 * @method remove() 移除方法
 * @method get() 读取缓存方法
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
