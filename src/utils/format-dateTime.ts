/**
 * @name format-dateTime
 *
 * @param datetime Datetime data of type date
 * @param template Formatting template
 *
 * @method format() Formatting date time
 */

export default class FormatDateTime {
  private datetime: Date

  template: string

  public constructor(datetime: Date = new Date(), template: string = 'yyyy-MM-dd hh:mm:ss') {
    this.datetime = datetime
    this.template = template
  }

  public format(): string {
    const date = this.datetime
    let fmt = this.template
    const FMT: any = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      ms: date.getMilliseconds()
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length))
    }

    Object.keys(FMT).forEach((key) => {
      if (new RegExp(`(${key})`).test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? FMT[key] : `00${FMT[key]}`.substr(`${FMT[key]}`.length)
        )
      }
    })
    return fmt
  }
}
