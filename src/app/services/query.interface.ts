import { IPropertyAny, IPropertyString } from "../interfaces/global.interface";

export const getQueryParams = (payload?: IPropertyAny | string, objectKey?: string): IPropertyString => {
    const params: IPropertyString = {};

    if (typeof (payload) === 'object') {
        for (const key in payload) {
            if (payload[key] !== undefined) {
                params[key] = payload[key] as string;
            }
        }
    }
    else if (typeof (payload) === 'string' && payload) {
        params[objectKey ? objectKey : 'name'] = payload;
    }

    return params;
}
