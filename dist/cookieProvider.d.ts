import * as Promise from "bluebird";
import { IXHROptions } from "./ews.partial";
import { IProvider } from "./IProvider";
export declare class CookieProvider implements IProvider {
    /**@internal */
    private j;
    /**@internal */
    private username;
    /**@internal */
    private password;
    get providerName(): string;
    constructor(username: string, password: string);
    preCall(options: IXHROptions): Promise<IXHROptions>;
    /**@internal */
    private static parseString;
}
