export function queryMatches(pxl, query) {
    return window.matchMedia(`(${query}-width:${pxl}px)`).matches
}