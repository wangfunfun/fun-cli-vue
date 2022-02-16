import { IObject } from '@/@types/interface'

const t: IObject = {}

t.login = {}
t.login.login = 'Log in'
t.login.resetPassword = 'Forget the password ?'
t.login.signup = 'Sign up'
t.login.existingAccount = 'Existing account?'
t.login.backLogin = 'Return to the log in'
t.login.resetPasswordSubmit = 'Reset password'
t.login.sendEmailCode = 'Send code'

t.login.info = {}
t.login.info.login = 'Log in'
t.login.info.signup = 'Sign up'
t.login.info.resetPassword = 'Reset password'

t.login.placeholder = {}
t.login.placeholder.email = 'Please enter your e-mail address'
t.login.placeholder.emailCode = 'Please enter the e-mail code'
t.login.placeholder.password = 'Please enter your password'
t.login.placeholder.confirmPassword = 'Please enter your password again'

t.login.rules = {}
t.login.rules.email = 'The e-mail format is incorrect'
t.login.rules.emailCode = 'The e-mail code format is incorrect'
t.login.rules.password = 'The password format is incorrect'
t.login.rules.confirmPassword = 'The passwords are inconsistent'

export default t
