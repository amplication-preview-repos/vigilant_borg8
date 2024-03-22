import * as graphql from "@nestjs/graphql";
import { DemoResolverBase } from "./base/demo.resolver.base";
import { Demo } from "./base/Demo";
import { DemoService } from "./demo.service";

@graphql.Resolver(() => Demo)
export class DemoResolver extends DemoResolverBase {
  constructor(protected readonly service: DemoService) {
    super(service);
  }
}
