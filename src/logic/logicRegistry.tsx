
interface LogicRegistryInterface {

}

class LogicRegistry implements LogicRegistryInterface
{
    static subscribe: any;
    static unsubscribe: any;

    public static register(logic: Object) {
        LogicRegistry.subscribe(logic);
    }

    public static unregister(logic: Object) {
        LogicRegistry.unsubscribe(logic);
    }

    public static setSubscribeListener(listener: Function): void {
        this.subscribe = listener;
    }
    public static setUnSubscribeListener(listener: Function): void {
        this.unsubscribe = listener;
    }
}

export default LogicRegistry;