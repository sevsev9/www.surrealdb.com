function handler(event) {

    var response = event.response;
    var headers = response.headers;

    headers['strict-transport-security'] = { value: 'max-age=31536000; includeSubdomains; preload'};
    headers['content-security-policy'] = { value: "base-uri 'self'; block-all-mixed-content; connect-src 'self' wss://surreal.io/rpc https://contact.abcum.com https://www.google-analytics.com/; default-src 'none'; font-src 'self'; form-action 'none'; frame-ancestors 'self'; img-src 'self' https://www.google-analytics.com/ https://www.linkedin.com/px/ https://px.ads.linkedin.com/; manifest-src 'self'; media-src 'self'; script-src 'self' https://www.google-analytics.com/; style-src 'self'; upgrade-insecure-requests; worker-src 'self'" };
    headers['permissions-policy'] = { value: "accelerometer=(none) battery=(none) camera=(none) display-capture=(none) fullscreen=(none) geolocation=(none) microphone=(none) midi=(none) payment=(none) usb=(none)" };
    headers['feature-policy'] = { value: "accelerometer 'none'; battery 'none'; camera 'none'; display-capture 'none'; fullscreen 'none'; geolocation 'none'; microphone 'none'; midi 'none'; payment 'none'; usb 'none'" };
    headers['x-content-type-options'] = { value: 'nosniff' };
    headers['x-frame-options'] = { value: 'DENY' };
    headers['x-xss-protection'] = { value: '1; mode=block' };
    headers['referrer-policy'] = { value: 'no-referrer' };
    headers['expect-ct'] = { value: 'enforce, max-age=86400' };

    return response;

}
