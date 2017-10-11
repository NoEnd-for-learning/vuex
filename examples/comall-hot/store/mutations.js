export const increment = state => {
    state.count++
    state.history.push(state.count) // history.push(arg), arg 为任意字符串
}

export const decrement = state => {
    state.count--
    state.history.push('decrement')
}