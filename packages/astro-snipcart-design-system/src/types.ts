export interface Element {
    readonly as?: keyof HTMLElementTagNameMap;
}

export type Breakpoint = {
    readonly mobile?: number | string;
    readonly tablet?: number | string;
    readonly desktop?: number | string;
}