/**
 * @name config
 * Common system configurations
 *
 * @config WEBSITE_CONFIG Website configuration
 * @config VIEWS_LAYOUT_CONFIG Admin system default config
 * @config NAIVE_THEME_CONFIG Customize themes with content provided by NaiveUI
 */

import { GlobalThemeOverrides } from 'naive-ui'
import { adminLayoutConfig, websiteConfig } from '@/@types/config'

const WEBSITE_CONFIG: websiteConfig = {
  firstPage: '/home/welcome',
}

const VIEWS_LAYOUT_CONFIG: adminLayoutConfig = {
  mode: 'leftMenu',
  firstPage: '/admin/dashboard/workbench',
}

const NAIVE_THEME_CONFIG: GlobalThemeOverrides = {}

export { WEBSITE_CONFIG, VIEWS_LAYOUT_CONFIG, NAIVE_THEME_CONFIG }
