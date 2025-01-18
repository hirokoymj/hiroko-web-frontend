# hirokoymj.com

- Live URL : https://www.hirokoymj.com

## Technologies

**Frontend**

- JavaScript
- React.js (version 17)
- React Hooks, React Context
- React Router v6
- Redux Toolkit
- Apollo Client v3
- Google Map API
- Firebase Authentication for Google
- React Hook Form

**Backend** - https://github.com/hirokoymj/hiroko-web-backend-new

- Typescript
- Node.js
- Apollo Server v3
- Mongoose
- Weather API

**Database**

- MongoDB Atlas

## Google Cloud Platform(GCP)

**Implementing Google Account Authentication**

1. Firebase console -> Add app -> Web -> Add Firebase to your web app -> Authentication -> Add new provider -> Google -> `npm install firebase` -> Copy Firebase config code in your app.
2. GCP console -> Identity Platform -> Providers -> Edit Google -> Add domain (www.hirokoymj.com)

![](./src/Assets/gcp-IdentityPlatform.png)

<hr />

**Implementing Google Map in your site**

- GCP console -> APIs & Services -> Enable `Maps JavaScript API` -> Add key in the component `<GoogleMapReact bootstrapURLKeys={{ key: "" }}>`

```js
$gcloud services list --enabled
maps-backend.googleapis.com                  Maps JavaScript API
```

![](./src/Assets/gcp-google-map-api.png)

## Deploy this app to Heroku

```js
git heroku login
git push heroku master

git remote -v
heroku  https://git.heroku.com/hiroko-web-frontend.git (fetch)
heroku  https://git.heroku.com/hiroko-web-frontend.git (push)
```

## References

- https://redux.js.org/introduction/getting-started
- https://fir-ui-demo-84a6c.firebaseapp.com/
- https://github.com/firebase/firebaseui-web
- https://firebase.google.com/docs/reference/js
- https://react-hook-form.com/
- https://github.com/jquense/yup
- https://firebase.google.com/docs/auth/web/google-signin
- https://reactrouter.com/home
- https://react.dev/reference/react/createContext
- https://mui.com/material-ui/getting-started/
- https://devcenter.heroku.com/articles/heroku-cli
