export interface Trace {
    id: string,
    datetime: string, // this should use an agreed Datetime class/enum
    speed: number,
    latitude: number,
    longtitude: number,
}