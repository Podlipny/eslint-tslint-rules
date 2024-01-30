# @podlipny/eslint-config
Eslint configurations based on AirBnB, standard for JS, JSX, TS, TSX, React

# Throubleshhoting

## import/no-unresolved inside multifoldeer structure
this is caused by nesting project into multifolder repo structure. You need to specify path to tsconfig.json

```
"settings": {
    "import/resolver": {
      "typescript": {
        "project": [
          "./tsconfig.json",
          "./[path to tsconfig]/tsconfig.json"
        ]
      }
    }
  },
```