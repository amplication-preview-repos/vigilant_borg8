/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DemoWhereInput } from "./DemoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DemoOrderByInput } from "./DemoOrderByInput";

@ArgsType()
class DemoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DemoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DemoWhereInput, { nullable: true })
  @Type(() => DemoWhereInput)
  where?: DemoWhereInput;

  @ApiProperty({
    required: false,
    type: [DemoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DemoOrderByInput], { nullable: true })
  @Type(() => DemoOrderByInput)
  orderBy?: Array<DemoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DemoFindManyArgs as DemoFindManyArgs };
