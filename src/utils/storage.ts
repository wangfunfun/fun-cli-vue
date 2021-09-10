import system from '../common/system'
import DateFormat from '../utils/format'

/**
 * @name 本地化存储
 * @params key 存储的名称，必须英文，自动携带系统名称的前缀
 * @params data 存储的数据
 * @params type 类型，local、session两种参数
 * @params desc 存储信息的描述文字
 */

export default class Storage {
  private StorageKey: string

  StorageData: any

  private StorageType: string

  public constructor(key: string, type: string = 'session', data: any = {}, desc: string = '') {
    this.StorageKey = `${system.systemInfo.name}_${key}`
    this.StorageData = {
      save_time: new DateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss').format(),
      save_data: data,
      save_desc: desc
    }
    this.StorageType = type
  }

  public set(): void {
    if (this.StorageType === 'local') {
      window.localStorage.setItem(this.StorageKey, JSON.stringify(this.StorageData))
    } else if (this.StorageType === 'session') {
      window.sessionStorage.setItem(this.StorageKey, JSON.stringify(this.StorageData))
    }
  }

  public remove(): void {
    if (this.StorageType === 'local') {
      window.localStorage.removeItem(this.StorageKey)
    } else if (this.StorageType === 'session') {
      window.sessionStorage.removeItem(this.StorageKey)
    }
  }

  public get(): void {
    let data: any = {}
    if (this.StorageType === 'local') {
      data = window.localStorage.getItem(this.StorageKey)
    }
    if (this.StorageType === 'session') {
      data = window.sessionStorage.getItem(this.StorageKey)
    }
    return JSON.parse(data)
  }
}
