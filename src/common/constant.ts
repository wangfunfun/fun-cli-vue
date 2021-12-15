/**
 * @name constant
 * Common variable configurations for scaffolding systems
 *
 * @constant GENERAL_CACHE_EXPIRE general-cache method expiration time, the default value is 7 days
 * @constant GENERAL_CACHE_ALIAS general-cache method stores aliases
 * @constant DEFAULT_LANGUAGE_ALIAS i18n extension default language
 * @constant APP_VERSION Application version, based on the env configuration file
 * @constant APP_BASE_URL API request address
 */

const GENERAL_CACHE_EXPIRE: number = 60 * 60 * 24 * 7

const GENERAL_CACHE_ALIAS: string = 'fage-cli'

const DEFAULT_LANGUAGE_ALIAS: string = 'enUS'

const APP_VERSION: any = import.meta.env.VITE_APP_VERSION

const APP_BASE_URL: any = import.meta.env.VITE_APP_BASE_URL

const APP_NAME: any = import.meta.env.VITE_APP_NAME

export {
  GENERAL_CACHE_EXPIRE,
  GENERAL_CACHE_ALIAS,
  DEFAULT_LANGUAGE_ALIAS,
  APP_VERSION,
  APP_BASE_URL,
  APP_NAME
}
