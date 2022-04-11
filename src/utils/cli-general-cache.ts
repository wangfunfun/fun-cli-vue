/**
 * @name 基于h5-storage的缓存封装方法
 *
 * @param key 必须
 * @param type 必须
 *
 * @method set()  写入缓存方法
 * @method get()  读取缓存方法
 * @method remove() 移除缓存方法
 */

import FormatDateTime from './crud-format-dateTime'
import { GENERAL_CACHE_ALIAS } from '@/common/constant'
import { GENERAL_CACHE_EXPIRE } from '@/common/config'

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
      save_desc: desc,
    }
    if (this.cacheType === 'local') {
      window.localStorage.setItem(this.cacheKey, JSON.stringify(this.cacheData))
    } else if (this.cacheType === 'session') {
      window.sessionStorage.setItem(
        this.cacheKey,
        JSON.stringify(this.cacheData)
      )
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
    this.cacheType === 'local'
      ? (data = window.localStorage.getItem(this.cacheKey))
      : (data = window.sessionStorage.getItem(this.cacheKey))
    if (!data) return
    let savedTimeValue =
      new Date().getTime() - new Date(JSON.parse(data).save_time).getTime()
    if (savedTimeValue > GENERAL_CACHE_EXPIRE) {
      this.cacheType === 'local'
        ? (data = window.localStorage.removeItem(this.cacheKey))
        : (data = window.sessionStorage.removeItem(this.cacheKey))
      return data
    }
    return data ? JSON.parse(data).save_data : JSON.parse(data)
  }
}
