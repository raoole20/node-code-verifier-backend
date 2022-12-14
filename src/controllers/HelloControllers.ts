import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import * as utils from "../utils/logger";

@Route("/api/hello?name")
@Tags("HelloController")
export class HelloController implements IHelloController {

    /**
     * Endpoint to retreive a Message "Hello {name}" in JSON
     * @param { string | undefined } name Name of user to be greeted
     * @returns { BasicResponse } Promise of BasicResponse
     */
    @Get("/")
    public async getMessage(@Query()name?: string ): Promise<BasicResponse> {
        utils.LogSuccess('[/api/hello] Get Request');
        return {
            message: `Hello ${name ||  "world"}`
        }
    }
}