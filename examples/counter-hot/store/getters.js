export const count = state => state.count

const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : end - limit
  return state.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
}

/* 自定义 */
export const person = state => {
  let user = `我的名字是：${state.user.name}, 今年${state.user.age}岁了！`
  return user
}
