// Copyright 2013 Google LLC
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

const { google } = require('googleapis');
const blogger = google.blogger('v3');
const nconf = require('nconf');
const path = require('path');

// Ex: node blogger.js --api_key "YOUR API KEY"
nconf.argv().env().file(path.join(__dirname, 'config.json'));

blogger.blogs.get({
        key: nconf.get('AIzaSyBHsXwBCi-XlMIe_oyk40K1Iq0sAvDGZxY'),
        blogId: '6696090715375953661',
    },
    (err, res) => {
        if (err) {
            throw err;
        }
        console.log(res.data);
    }
);