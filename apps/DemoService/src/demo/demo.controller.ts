import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DemoService } from "./demo.service";
import { DemoControllerBase } from "./base/demo.controller.base";

@swagger.ApiTags("demos")
@common.Controller("demos")
export class DemoController extends DemoControllerBase {
  constructor(protected readonly service: DemoService) {
    super(service);
  }
}
