import { IObject } from '@/@types/interface'

const t: IObject = {}

t.crud = {}

t.crud.btn = {}
t.crud.btn.add = 'Add'
t.crud.btn.delete = 'Delete'
t.crud.btn.update = 'Update'
t.crud.btn.confirm = 'Confirm'
t.crud.btn.cancel = 'Cancel',
t.crud.btn.search = 'Query',
t.crud.btn.reset = 'Reset'
t.crud.btn.export = 'Export'

t.crud.info = {}
t.crud.info.all = 'All'
t.crud.info.prompt = 'Prompt'
t.crud.info.confirm = 'Are you sure to operate {handle}?'

t.crud.placeholder = {}
t.crud.placeholder.input = 'Please enter the {label}  '

export default t
