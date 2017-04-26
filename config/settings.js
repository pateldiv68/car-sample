/*******************************************************************************
 * Copyright (c) 2014 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *   http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *   Bryan Boyd - Initial implementation 
 *   Jukka Ruponen - Helsinki mapping, custom vehicles and notifications
 *******************************************************************************/

var config = {
	iot_deviceType: "bus",     // replace with your deviceType
	iot_deviceOrg: "8cjz3z",       // replace with your IoT Foundation organization
	iot_deviceSet: [               // replace with your registered device(s)
		{ deviceId: "as78as53", token: "Lc3&OW(W&)wER*vGWc" },
		{ deviceId: "as78as56", token: "nOyYYjwkQMiQlUx7nf" }
	],
	iot_apiKey: "a-8cjz3z-a22uqyb6gh",    // replace with the key for a generated API token
	iot_apiToken: "2s8epIFRZTGeQ7Llp@",  // replace with the generated Authentication token

	// these topics will be used by Geospatial Analytics
	notifyTopic: "iot-2/type/api/id/geospatial/cmd/geoAlert/fmt/json",
	inputTopic: "iot-2/type/vehicle/id/+/evt/telemetry/fmt/json",
};

try {
	module.exports = config;
} catch (e) { window.config = config; }
