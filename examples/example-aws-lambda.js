/**
 * For use on AWS Lambdas, upload the anix.mjs file and update imports accordingly.
 * Please use NodeJS 18 and above.
 */

import {Anix} from './anix.mjs'

// Gets endpoint from environment variables
const ENDPOINT = process.env.ENDPOINT_HTTP

const eth = new Anix('eth', ENDPOINT)

export const handler = async (event) => {

    const response = {
      statusCode: 200,
      body: await eth.getBlockByNumber('latest', false),
    };
    return response;
};
  
