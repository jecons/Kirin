/*
   Copyright 2011 Future Platforms

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

defineModule("Environment", function (require, exports) {
	
	
	
	var settings = require("Settings");
	
	settings.put("proxocube.prefix", "http://fp-proxocube-jh.appspot.com/proxo/test_glasto/");
	
	settings.put("lineups.minimum.sync.interval.in.seconds", 10 * 60);
	settings.put("news.minimum.sync.interval.in.seconds", 10 * 60);

	// let the data decide.
	//settings.put("client.detected.lineuptimes", true);
	//settings.put("client.detected.runorder", true);
	
});