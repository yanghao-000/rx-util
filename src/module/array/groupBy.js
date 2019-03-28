// @ts-check

/**
 * js 数组按照某个条件进行分组
 *
 * @typedef {any} T 参数数组以及函数的参数类型
 * @typedef {any} R 返回数组以及函数的返回值类型
 * @param {Array<T>} arr 要进行分组的数组
 * @param {Function} fn 元素分组的方法
 * @returns {Map<R,T>} 对象 -> 数组映射对象
 */
export function groupBy (arr, fn) {
  // 将元素按照分组条件进行分组得到一个 条件 -> 数组 的对象
  return arr.reduce((res, item) => {
    const name = fn(item)
    // 如果已经有这个键了就直接追加, 否则先将之赋值为 [] 再追加元素
    if (!res.has(name)) {
      res.set(name, [])
    }
    res.get(name).push(item)
    return res
  }, new Map())
}
