export function doNotExits(param: any) {
    if (param == undefined || param == null) return true
    const tmp = param.toString().trim()
    if (tmp == "") return true
    else return false
}