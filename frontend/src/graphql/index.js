import { ApolloServer } from 'apollo-server';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import dayjs from 'dayjs';

// スキーマをロード
const typeDefs = loadSchemaSync('./src/graphql/schemas/schema.graphql', {
  loaders: [new GraphQLFileLoader()],
});

// モックデータ
const mockData = {
  myInfo: {
    id: '1',
    name: '梶谷智え',
    birthday: dayjs('1995-06-07').toISOString(),
    sex: '男性',
    age: 29,
    career: {
      id: '1',
      start_date: dayjs('2018-04-01').toISOString(),
      end_date: dayjs('2023-12-31').toISOString(),
      employee_id: '1',
    },
    products: [
      {
        id: '1',
        name: '介護食受発注システム開発',
        description: '介護食受発注システムの説明',
        career_id: '1',
        start_date: dayjs('2018-04-01').toISOString(),
        end_date: dayjs('2020-03-31').toISOString(),
        sort_order: 1,
      },
      {
        id: '2',
        name: '工程管理システム開発',
        description: '工程管理システムの説明',
        career_id: '1',
        start_date: dayjs('2020-04-01').toISOString(),
        end_date: dayjs('2023-12-31').toISOString(),
        sort_order: 2,
      },
    ],
    skills: [
      { name: 'Ruby', version: '3.3' },
      { name: 'RubyOnRails', version: '7' },
      { name: 'React', version: '17' },
    ],
  },
};

// リゾルバを定義
const resolvers = {
  Query: {
    myInfo: () => {
      return mockData.myInfo;
    },
  },
};

// サーバーを起動
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
