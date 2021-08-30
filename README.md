# Angular Chrome Extension Template

A simple Chrome Extension boilerplate template setup with Angular 12 and TailwindCSS.

---

## Internals

*projects > ng* : Angular project with TailwindCSS setup. UI elements are implemeneted as Angular Element. 

*projects > chrome* : Chrome Extension configuration, assets, UI templates and background scripts.

*projects > shared* : Common Typescript services and models that shared by **ng** and **chrome** projects.

---

## Development Build
```bash
npm run watch
```
- Open Chome Extensions Manager: [chrome://extensions/](chrome://extensions/)
- Enable **Developer mode**
- Click **Load unpacked** button and select "*dist*" folder

---

## Release Build
* TODO
