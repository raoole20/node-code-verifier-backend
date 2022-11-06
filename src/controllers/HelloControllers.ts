import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import * as utils from "../utils/logger";

export class HelloController implements IHelloController {

    public async getMessage(name?: string ): Promise<BasicResponse> {
        utils.LogSuccess('[/api/hello] Get Request');
        return {
            message: `Hello ${name ||  "world"}`
        }
    }
}