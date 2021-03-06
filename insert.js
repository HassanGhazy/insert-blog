// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const path = require('path');
const { google } = require('googleapis');
const { authenticate } = require('@google-cloud/local-auth');

const blogger = google.blogger('v3');

async function runSample() {
    // Obtain user credentials to use for the request
    const auth = await authenticate({
        keyfilePath: path.join(__dirname, './config.json'),
        scopes: 'https://www.googleapis.com/auth/blogger',
    });
    google.options({ auth });

    const res = await blogger.posts.insert({
        blogId: '6696090715375953661',
        requestBody: {
            title: 'Hello from the googleapis npm module!',
            content: 'Visit https://github.com/google/google-api-nodejs-client to learn more!',
        },
    });
    console.log(res.data);
    return res.data;
}

if (module === require.main) {
    runSample().catch(console.error);
}
module.exports = runSample;