/**
 * @name 时间格式化
 * @param date 时间 必填
 * @param fmt 格式类型 非必填
 */
export default class DateFormat {
  private date: Date

  fmt: string

  public constructor(date: Date, fmt: string) {
    this.date = date || new Date()
    this.fmt = fmt || 'yyyy-MM-dd hh:mm:ss'
  }

  public getDate(): Date {
    return this.date
  }

  public setDate(date: Date): void {
    this.date = date
  }

  public getFmt(): string {
    return this.fmt
  }

  public setFmt(fmt: string): void {
    this.fmt = fmt
  }

  public format = (): string => {
    const date = this.getDate()
    let fmt = this.getFmt()
    const FMT: any = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      ms: date.getMilliseconds() // 毫秒
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length))
    }

    for (const key in FMT) {
      if (new RegExp(`(${key})`).test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? FMT[key] : `00${FMT[key]}`.substr(`${FMT[key]}`.length)
        )
      }
    }
    return fmt
  }
}
