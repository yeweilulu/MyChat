
export interface ROUTER_LIST_ITEM {
    path: string,
    reducer?: string,
    component?: any,
    name?: string,
    children?: Array<RouterListItem>
}
export type ROUTER_MODEL_TYPE = 'history' | 'hash'

export interface RouterConfit {
    model: ROUTER_MODEL_TYPE,
    routerList: Array<RouterListItem>
}