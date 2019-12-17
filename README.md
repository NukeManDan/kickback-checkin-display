# Kickback Auto Check-In Web Interface

Generates a Time One Time Password (TOTP) for a Kickback event.
- Event host provides a secret/passphrase that is (presently) unchecked by kickback
  - [ ] TODO: Get kickback API integrated to check seceret and gather event information to display along with the TOTP code
- QR code and text TOTP are shown and rotated at `step = 5 seconds` and `window = 1` (code is valid for `step*(window+1)` time) 
  - User enters/scans code on [Kickback App](https://github.com/wearekickback/app/) to check-in automatically.


## Live Demo: https://nukemandan.github.io/kickback-checkin/


## Developer Notes:

Install:
```bash
npm install
```

Run Dev Server:
```bash
npm run dev
```
Build Static Site:
```bash
npm run build
```

_note: build is configured to go to `docs` folder in `quasar.conf.js` for github pages_

## License

GNU Affero General Public License v3.0

### :heart: Open Source Tools Used

-   [Quasar](https://quasar.dev): A [Vue](https://vuejs.org/) Webapp Framework
-   [otpLib](https://github.com/yeojz/otplib)
