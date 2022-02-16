import { IObject } from '@/@types/interface'

const t: IObject = {}

t.login = {}
t.login.login = '登录'
t.login.resetPassword = '忘记密码？'
t.login.signup = '注册新用户'
t.login.existingAccount = '已有账号？'
t.login.backLogin = '返回登录'
t.login.resetPasswordSubmit = '重置密码'
t.login.sendEmailCode = '发送验证码'

t.login.info = {}
t.login.info.login = '登录'
t.login.info.signup = '注册新用户'
t.login.info.resetPassword = '找回密码'

t.login.placeholder = {}
t.login.placeholder.email = '请输入电子邮箱'
t.login.placeholder.emailCode = '请输入邮箱验证码'
t.login.placeholder.password = '请输入密码'
t.login.placeholder.confirmPassword = '请再次输入密码'

t.login.rules = {}
t.login.rules.email = '电子邮箱格式不正确'
t.login.rules.emailCode = '验证码格式不正确'
t.login.rules.password = '密码格式不正确'
t.login.rules.confirmPassword = '两次密码不一致'

export default t
