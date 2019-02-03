import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} from 'graphql'
import {
    prefectures
} from '../data/prefectures'

const PrefectureType = new GraphQLObjectType({
    name: 'Prefecture',
    fields: () => ({
        romaji: {
            type: GraphQLString,
            description: 'ローマ字'
        },
        name: {
            type: GraphQLString,
            description: '都道府県'
        },
        furikana: {
            type: GraphQLString,
            description: '読み'
        },
        capital: {
            type: GraphQLString,
            description: '都道府県庁所在地'
        },
        region: {
            type: GraphQLString,
            description: '地方'
        },
        population: {
            type: GraphQLString,
            description: '人口'
        },
        areaSize: {
            type: GraphQLString,
            description: '面積'
        },
        density: {
            type: GraphQLString,
            description: '人口密度'
        },
        district: {
            type: GraphQLInt,
            description: '郡'
        },
        municipalitie: {
            type: GraphQLInt,
            description: '市町村数'
        },
        ISO: {
            type: GraphQLString,
            description: 'ISO/JIS番号'
        },
        telephoneCode: {
            type: GraphQLString,
            description: '電話番号'
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'Root',
    fields: {
        prefecture: {
            type: PrefectureType,
            args: {
                name: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return prefectures.filter(
                    prefecture => prefecture.name === args.name
                )[0]
            }
        }
    }
})

export default new GraphQLSchema({
    query: RootQuery
})