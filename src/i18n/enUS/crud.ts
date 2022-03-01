import { IObject } from '@/@types/interface'

const t: IObject = {}

t.crud = {}

t.crud.btn = {}
t.crud.btn.add = 'Add'
t.crud.btn.delete = 'Delete'
t.crud.btn.update = 'Update'
t.crud.btn.confirm = 'Confirm'
;(t.crud.btn.cancel = 'Cancel'),
  (t.crud.btn.search = 'Query'),
  (t.crud.btn.reset = 'Reset')
t.crud.btn.export = 'Export'

t.crud.info = {}
t.crud.info.all = 'All'
t.crud.info.prompt = 'Prompt'
t.crud.info.confirm = 'Are you sure to operate {handle}?'

t.crud.placeholder = {}
t.crud.placeholder.input = 'Please enter the {label}'

t.crud.rule = {}
t.crud.rule.enter = 'Please enter the {label}'
t.crud.rule.enterAgain = 'Please enter the {label} again'
t.crud.rule.select = 'Please select the {label}'
t.crud.rule.enterError = '{label} is a mandatory entry'
t.crud.rule.enterAgainError = 'The {label} input is inconsistent'
t.crud.rule.selectError = '{label} is mandatory'
t.crud.rule.formatAgainError = 'Please enter a correctly formatted {label}'

export default t
