export const count = state => state.count

const limit = 4;

export const recentHistory = state => {
    const end = state.history.length; // state.history 为数组
    const begin = end - limit < 0 ? 0 : end - limit;
    return state.history
        .slice(begin, end)
        .toString()
        .replace(/,/g, ', ')
}