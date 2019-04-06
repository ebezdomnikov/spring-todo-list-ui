/**
 * Registry class holds all reducers in application
 * and should be used to register reducers in application
 * That approach holds all module stuff in one place
 * and you don't need to go to common place with all reducers and import
 * your and connect in to the store
 *
 * @author Evgenii Bezdomnikov <evgenii.bezdomnikov@hemmersbach.com>
 */
export class ReducerRegistry {
    _emitChange: any;
    _reducers: any;

    constructor() {
        this._emitChange = null;
        this._reducers = {};
    }

    /**
     * Merge reducers
     * @param _reducers
     * @return void
     */
    mergeReducersWith(_reducers: Object): void {
        this._reducers = {
            ...this._reducers,
            ..._reducers,
        };
    }

    /**
     * Get all reducers
     * @return {Object}
     */
    getReducers(): Object {
        return { ...this._reducers };
    }

    /**
     * register new reducer
     * @param name
     * @param reducer
     */
    register(name: string, reducer: Object): void {
        this._reducers = { ...this._reducers, [name]: reducer };
        console.log("register:", name, reducer);
        if (this._emitChange) {
            this._emitChange(this.getReducers());
        }
    }

    /**
     * Set listener on change
     * @param listener
     */
    setChangeListener(listener: Function): void {
        this._emitChange = listener;
    }
}

// on instance on whole app
const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
