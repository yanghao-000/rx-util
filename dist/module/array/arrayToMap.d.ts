import { ArrayKFn } from '../interface/ArrayKFn';
/**
 * 将数组映射为 Map
 * @param arr 数组
 * @param k 产生 Map 元素唯一标识的函数，或者对象元素中的一个属性名
 * @param v 产生 Map 值的函数，默认为返回数组的元素，或者对象元素中的一个属性名
 * @returns 映射产生的 map 集合
 */
export declare function arrayToMap<T, K, V>(arr: T[], k: ArrayKFn<T, K>, v?: ArrayKFn<T, V>): Map<K, V>;
//# sourceMappingURL=arrayToMap.d.ts.map