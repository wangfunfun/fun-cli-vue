import base from './base'
import crud from './crud'

import welcome from './pages/welcome'
import login from './pages/login'
import error from './pages/error'

import system from './views/system'

export default {
  languageName: 'English',
  ...base,
  ...crud,
  ...welcome,
  ...login,
  ...error,
  ...system,
}
