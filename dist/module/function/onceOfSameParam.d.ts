/**
 * 包装一个函数为指定参数只执行一次的函数
 * @param fn 需要包装的函数
 * @param identity 参数转换的函数，参数为需要包装函数的参数
 * @returns 需要被包装的函数
 */
export declare function onceOfSameParam<Fn extends Function>(fn: Fn, identity?: (args: any[]) => string): Fn & {
    origin: Fn;
    clear: (...keys: any[]) => void;
};
//# sourceMappingURL=onceOfSameParam.d.ts.map