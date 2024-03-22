/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Demo } from "@prisma/client";

export class DemoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DemoCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemoCountArgs>
  ): Promise<number> {
    return this.prisma.demo.count(args);
  }

  async demos<T extends Prisma.DemoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemoFindManyArgs>
  ): Promise<Demo[]> {
    return this.prisma.demo.findMany(args);
  }
  async demo<T extends Prisma.DemoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemoFindUniqueArgs>
  ): Promise<Demo | null> {
    return this.prisma.demo.findUnique(args);
  }
  async createDemo<T extends Prisma.DemoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemoCreateArgs>
  ): Promise<Demo> {
    return this.prisma.demo.create<T>(args);
  }
  async updateDemo<T extends Prisma.DemoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemoUpdateArgs>
  ): Promise<Demo> {
    return this.prisma.demo.update<T>(args);
  }
  async deleteDemo<T extends Prisma.DemoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DemoDeleteArgs>
  ): Promise<Demo> {
    return this.prisma.demo.delete(args);
  }
}
