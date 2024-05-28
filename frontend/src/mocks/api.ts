import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { userInformation } from "./dummydata";

export const mockStart = () => {
  const mock = new MockAdapter(axios);

  mock.onGet("user_informations").reply(200, userInformation);
};
