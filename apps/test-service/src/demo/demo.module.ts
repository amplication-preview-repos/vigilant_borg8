import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DemoModuleBase } from "./base/demo.module.base";
import { DemoService } from "./demo.service";
import { DemoController } from "./demo.controller";
import { DemoResolver } from "./demo.resolver";

@Module({
  imports: [DemoModuleBase, forwardRef(() => AuthModule)],
  controllers: [DemoController],
  providers: [DemoService, DemoResolver],
  exports: [DemoService],
})
export class DemoModule {}
