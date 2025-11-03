export const SITE_NAME: string = 'Meritable Stock Trades ';
export const SITE_URL: string = 'meritablestocktradesapp.vercel.app';
export const PROFILE_IMAGE_PLACE_HOLDER: string = '/images/profile.jpg';
export const SITE_URL_WITH_HTTPS: string = `https://${SITE_URL}`;
export const LIVE_CHAT = `
    var _smartsupp = _smartsupp || {};
    _smartsupp.key = 'cd5df0fc8a0ee288558ecc0636cea078af5e0b68';
    window.smartsupp || (function(d) {
        var s, c, o = smartsupp = function() {
            o._.push(arguments)
        };
        o._ = [];
        s = d.getElementsByTagName('script')[0];
        c = d.createElement('script');
        c.type = 'text/javascript';
        c.charset = 'utf-8';
        c.async = true;
        c.src = 'https://www.smartsuppchat.com/loader.js?';
        s.parentNode.insertBefore(c, s);
    })(document);

  `;
