let languages = ['en', 'ja']
function getTransLink(language, slug) {
  return language === 'en' ? slug : `/${language}${slug}`
}
export { getTransLink, languages }