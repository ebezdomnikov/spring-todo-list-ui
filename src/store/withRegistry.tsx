import React from 'react';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import {default as LogicRegistry} from "../logic/logicRegistry";
import {default as ReducerRegistry} from "../reducers/reducerRegistry";

/**
 * HOC to register logics and reducers to use them by demand. Main idea,
 * application will not load all reducers and logic after first load,
 * but will load them when particular module ask for them ("ask" means use that HOC)
 *
 * @param {Array} logic array of logic for redux-logic module
 * @param {String} reducerName string w
 * @param {Function} reducer reducer function
 * @param {Object} reducers key => value pairs with [reducerName] => [reducer]
 * @return {function(*): {contextType?: React.Context<any>, new(props: Readonly<P>): Wrapper, new(props: P, context?: any): Wrapper, prototype: Wrapper}}
 * @description NOT USE PLEASE, STILL IN DEV MODE
 */

interface IRegistry {
    logic?: Array<any>,
    reducerName?: string,
    reducer?: Function,
    reducers?: any,
}

const withRegistry = ({
                          logic = undefined,
                          reducerName = undefined,
                          reducer = undefined,
                          reducers = undefined,
                      }: IRegistry) => (Component: React.ReactNode) => {

    const WrappedComponent = class Wrapper extends React.Component {

        componentWillMount() {
            console.log(this.props);
            if (reducers !== undefined) {
                if (!isObject(reducers)) {
                    throw new Error('Please provide reducers as key => value object.');
                }
                const _reducers = Object.keys(reducers);
                // eslint-disable-next-line
                _reducers.forEach((key: string): void => {
                    ReducerRegistry.register(key, reducers[key]);
                });
            } else {
                if (reducerName !== undefined && reducer !== undefined) {
                    ReducerRegistry.register(reducerName, reducer);
                }
            }

            if (logic !== null) {
                if (!isArray(logic)) {
                    throw new Error('Please provide logic as an array.');
                }

                LogicRegistry.register(logic);
            }
        }

        componentWillUnmount(): void {
            if (logic !== null) {
                if (!isArray(logic)) {
                    throw new Error('Please provide logic as an array.');
                }

                LogicRegistry.unregister(logic);
            }
        }

        render() {
            // @ts-ignore
            return <Component {...this.props} />;
        }
    };

    // @ts-ignore
    WrappedComponent.displayName = "withRegistry";

    return WrappedComponent;
};

export default withRegistry;
