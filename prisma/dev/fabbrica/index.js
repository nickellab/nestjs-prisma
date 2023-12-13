"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExmapleFactory = exports.resetScalarFieldValueGenerator = exports.registerScalarFieldValueGenerator = exports.resetSequence = exports.initialize = void 0;
const internal_1 = require("@quramy/prisma-fabbrica/lib/internal");
var internal_2 = require("@quramy/prisma-fabbrica/lib/internal");
Object.defineProperty(exports, "initialize", { enumerable: true, get: function () { return internal_2.initialize; } });
Object.defineProperty(exports, "resetSequence", { enumerable: true, get: function () { return internal_2.resetSequence; } });
Object.defineProperty(exports, "registerScalarFieldValueGenerator", { enumerable: true, get: function () { return internal_2.registerScalarFieldValueGenerator; } });
Object.defineProperty(exports, "resetScalarFieldValueGenerator", { enumerable: true, get: function () { return internal_2.resetScalarFieldValueGenerator; } });
const modelFieldDefinitions = [{
        name: "Exmaple",
        fields: []
    }];
function autoGenerateExmapleScalarsOrEnums({ seq }) {
    return {
        title: (0, internal_1.getScalarFieldValueGenerator)().String({ modelName: "Exmaple", fieldName: "title", isId: false, isUnique: false, seq }),
        description: (0, internal_1.getScalarFieldValueGenerator)().String({ modelName: "Exmaple", fieldName: "description", isId: false, isUnique: false, seq })
    };
}
function defineExmapleFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => (0, internal_1.getSequenceCounter)(seqKey);
        const screen = (0, internal_1.createScreener)("Exmaple", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateExmapleScalarsOrEnums({ seq });
            const resolveValue = (0, internal_1.normalizeResolver)(defaultDataResolver ?? {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                const acc = await queue;
                const resolveTraitValue = (0, internal_1.normalizeResolver)(traitsDefs[traitKey]?.data ?? {});
                const traitData = await resolveTraitValue({ seq });
                return {
                    ...acc,
                    ...traitData,
                };
            }, resolveValue({ seq }));
            const defaultAssociations = {};
            const data = { ...requiredScalarData, ...defaultData, ...defaultAssociations, ...inputData };
            return data;
        };
        const buildList = (inputData) => Promise.all((0, internal_1.normalizeList)(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            id: inputData.id
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await (0, internal_1.getClient)().exmaple.create({ data });
        };
        const createList = (inputData) => Promise.all((0, internal_1.normalizeList)(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "Exmaple",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return {
        ...factory,
        use: useTraits,
    };
}
function defineExmapleFactory(options) {
    return defineExmapleFactoryInternal(options ?? {});
}
exports.defineExmapleFactory = defineExmapleFactory;
