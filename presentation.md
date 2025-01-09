# hirokoymj.com Presentation draft

## Redux

- The two redux states are defined - `tab` and `theme`.

```js
const store = configureStore({
  reducer: {
    tab: tabReducer,
    theme: themeReducer,
  },
});
```

- Access to a redux state value -> `useSelector()`
- Call Redux actions to change a redux state value -> `useDispatch()`

## Google Cloud Platform (GCP)

Project -> APIs & Services -> Credentials -> API Keys - Maps API Key -> Website restriction -> add website (https://www.hirokoymj.com)
