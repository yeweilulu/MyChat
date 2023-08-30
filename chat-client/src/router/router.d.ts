
export interface RouterListItem {
    path: string,
    reducer?: string,
    component?: any,
    name?: string,
    children?: Array<RouterListItem>
}


export interface RouterConfit {
    model: string,
    routerList: Array<RouterListItem>
}