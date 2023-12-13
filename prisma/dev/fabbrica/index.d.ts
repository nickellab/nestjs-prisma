import type { Exmaple } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { Resolver } from "@quramy/prisma-fabbrica/lib/internal";
export { initialize, resetSequence, registerScalarFieldValueGenerator, resetScalarFieldValueGenerator } from "@quramy/prisma-fabbrica/lib/internal";
type BuildDataOptions = {
    readonly seq: number;
};
type ExmapleFactoryDefineInput = {
    title?: string;
    description?: string;
    isDeleted?: boolean;
    updatedAt?: Date;
    createdAt?: Date;
};
type ExmapleFactoryDefineOptions = {
    defaultData?: Resolver<ExmapleFactoryDefineInput, BuildDataOptions>;
    traits?: {
        [traitName: string | symbol]: {
            data: Resolver<Partial<ExmapleFactoryDefineInput>, BuildDataOptions>;
        };
    };
};
type ExmapleTraitKeys<TOptions extends ExmapleFactoryDefineOptions> = keyof TOptions["traits"];
export interface ExmapleFactoryInterfaceWithoutTraits {
    readonly _factoryFor: "Exmaple";
    build(inputData?: Partial<Prisma.ExmapleCreateInput>): PromiseLike<Prisma.ExmapleCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ExmapleCreateInput>): PromiseLike<Prisma.ExmapleCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ExmapleCreateInput>[]): PromiseLike<Prisma.ExmapleCreateInput[]>;
    pickForConnect(inputData: Exmaple): Pick<Exmaple, "id">;
    create(inputData?: Partial<Prisma.ExmapleCreateInput>): PromiseLike<Exmaple>;
    createList(inputData: number | readonly Partial<Prisma.ExmapleCreateInput>[]): PromiseLike<Exmaple[]>;
    createForConnect(inputData?: Partial<Prisma.ExmapleCreateInput>): PromiseLike<Pick<Exmaple, "id">>;
}
export interface ExmapleFactoryInterface<TOptions extends ExmapleFactoryDefineOptions = ExmapleFactoryDefineOptions> extends ExmapleFactoryInterfaceWithoutTraits {
    use(name: ExmapleTraitKeys<TOptions>, ...names: readonly ExmapleTraitKeys<TOptions>[]): ExmapleFactoryInterfaceWithoutTraits;
}
export declare function defineExmapleFactory<TOptions extends ExmapleFactoryDefineOptions>(options?: TOptions): ExmapleFactoryInterface<TOptions>;
