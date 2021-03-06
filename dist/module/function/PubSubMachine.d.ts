/**
 * 发布订阅模式
 * @typeparam T 订阅主题的类型，虽然可以为 any，但这里是刻意进行限制以避免 “全局” 的发布订阅中心对象
 */
export declare class PubSubMachine<T> {
    /**
     * 订阅者集合
     */
    private subMap;
    /**
     * 发布一个主题
     * @param topic 发布的主题
     * @param [args] 主题订阅所需要的参数
     */
    pub(topic: any, ...args: any[]): void;
    /**
     * 订阅一个主题
     * @param topic 订阅的主题
     * @param fn 回调的函数
     */
    sub(topic: any, fn: Function): void;
    /**
     * 取消订阅
     * @param topic 订阅的主题
     * @param fn 订阅的函数，没有则删除这个主题下所有的函数
     */
    unsub(topic: any, fn?: Function): void;
}
//# sourceMappingURL=PubSubMachine.d.ts.map