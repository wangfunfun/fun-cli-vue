export default interface layoutStateTypes {
  ADMINSYS_LAYOUT_METHOD: string
  ADMINSYS_LAYOUT_TAB: boolean
  ADMINSYS_LAYOUT_HEADEROPS: {
    showRefresh: boolean
    showFullScreen: boolean
    fullScreen: boolean
    showTheme: boolean
    showMessage: boolean
    showLanguage: boolean
    height: string
  }
  ADMINSYS_LAYOUT_FOOTEROPS: {
    showNowView: boolean
    nowUserName: boolean
    loginDatetime: boolean
    systemName: boolean
    sysVersion: boolean
  }
  ADMINSYS_LAYOUT_ASIDEOPS: {
    width: string
    showLogo: boolean
    logoHeight: string
    unfold: boolean
    onlyOpen: boolean
  }
}
