import { IObject } from '@/@types/interface'

const t: IObject = {}

t.crud = {}

t.crud.btn = {}
t.crud.btn.add = '添加'
t.crud.btn.delete = '删除'
t.crud.btn.update = '更新'
t.crud.btn.confirm = '确认'
t.crud.btn.cancel = '取消'
t.crud.btn.search = '查询'
t.crud.btn.reset = '重置'
t.crud.btn.export = '导出'

t.crud.info = {}
t.crud.info.all = '全部'
t.crud.info.prompt = '提示'
t.crud.info.confirm = '确定进行{handle}操作?'

t.crud.placeholder = {}
t.crud.placeholder.input = '请输入{label}'

t.crud.rule = {}
t.crud.rule.enter = '请输入{label}'
t.crud.rule.enterAgain = '请再次输入{label}'
t.crud.rule.select = '请选择{label}'
t.crud.rule.enterError = '{label}是必输项'
t.crud.rule.enterAgainError = '两次输入的{label}不一致'
t.crud.rule.selectError = '{label}是必选项'
t.crud.rule.formatAgainError = '请输入格式正确的{label}'

export default t
