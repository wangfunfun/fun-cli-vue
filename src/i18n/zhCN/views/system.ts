import { IObject } from '@/@types/interface'

const t: IObject = {}

t.system = {}

t.system.log = {}
t.system.log.type = '日志类型'
t.system.log.operator = '操作人'
t.system.log.content = '操作内容'
t.system.log.operateTime = '操作时间'

t.system.dict = {}
t.system.dict.dictType = '字典类型'
t.system.dict.dictTypeName = '字典名称'
t.system.dict.dictRemark = '备注'

t.system.menu = {}
t.system.menu.menuName = '菜单名称'
t.system.menu.iconName = '图标'
t.system.menu.sort = '排序'
t.system.menu.route = '路由'
t.system.menu.role = '权限标识'

export default t
