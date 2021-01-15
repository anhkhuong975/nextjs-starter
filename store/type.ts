/**
 * @description define interface-type for test-a component
 */
export interface StateTestA {
    count: number;
}

export enum ActionTypesTestA {
    COUNTER = 'COUNTER',
}

export interface ActionTestA {
    type: ActionTypesTestA.COUNTER;
    payload?: any;
}


export interface StateTestB {
    count: number;
}

export enum ActionTypesTestB {
    COUNTER = 'COUNTER',
}

export interface ActionTestB {
    type: ActionTypesTestB.COUNTER;
    payload?: any;
}
