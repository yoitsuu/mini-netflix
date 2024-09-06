## Instructions to run locally

```
git clone https://github.com/yoitsuu/mini-netflix
```

```
cd mini-netflix
```

```
npm install
```

```
touch .env.local
```
Open in your editor of choice, set
NEXT_PUBLIC_OMDB_API_KEY=your-omdb-api-key

```
npm run dev
```


Notes:
General structure was cleaned a few commits ago, supporting both query params
and typical routes led to need for messy routes. (almost duplicate page.tsx files)