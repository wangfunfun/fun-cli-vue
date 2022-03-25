import type { App, Plugin } from 'vue'

/**
 * 组件挂载安装安装方法
 * @param component
 * @param alias
 * @returns
 */

export const installComponent = <T>(
  component: T,
  alias?: string
): T & Plugin => {
  const comp = component as any
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component)
    if (alias) {
      app.config.globalProperties[alias] = component
    }
  }
  return component as T & Plugin
}
