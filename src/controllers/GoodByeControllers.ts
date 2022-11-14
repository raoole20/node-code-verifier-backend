import { Query, Tags, Route, Get } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import * as utils from "../utils/logger";


@Route('/api/goodbye')
@Tags('GoodByeController')
export class GoodByeControllers implements IHelloController {

    /**
     * EndPoint to reatreive a Message "GoobBye {name} in Json"
     * @param name Name include in querya params
     * @returns { BasicResponse } Promise of BasicResponse
     */
    @Get('/')
    public async getMessage(@Query()name?: string ): Promise<BasicResponse> {
        utils.LogSuccess('[/api/hello] Get Request');
        return {
            message: `GoodBye ${name ||  "world"}`
        }
    }
}