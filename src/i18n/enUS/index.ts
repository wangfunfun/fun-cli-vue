import base from './base'
import crud from './crud'
import welcome from './pages/welcome'
import login from './pages/login'
import error from './pages/error'

export default {
  languageName: 'English',
  ...base,
  ...crud,
  ...welcome,
  ...login,
  ...error,
}
