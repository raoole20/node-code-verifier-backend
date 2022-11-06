import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import * as utils from "../utils/logger";

export class GoodByeControllers implements IHelloController {

    public async getMessage(name?: string ): Promise<BasicResponse> {
        utils.LogSuccess('[/api/hello] Get Request');
        return {
            message: `GoodBye ${name ||  "world"}`
        }
    }
}