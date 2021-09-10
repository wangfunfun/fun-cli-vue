/**
 * @name 系统信息
 */

interface systemType {
  name: string
  version: string
  title: string
  subTitle: string
  copyright: string
}
const systemInfo = <systemType>{}

// 系统名称
systemInfo.name = 'ADMINSYS'
// 版本号
systemInfo.version = '1.0.0'
// 浏览器标题
systemInfo.title = 'ADMINSYS'
// 浏览器副标题
systemInfo.subTitle = ''
// 版权
systemInfo.copyright = 'Copyright © 2021 ADMINSYS. All rights reserved.'

export default {
  systemInfo
}
