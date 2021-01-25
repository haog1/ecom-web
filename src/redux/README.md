# Development learning notes

## Reducer is a pure function - no side effect.

The reducer itself will return a function that tries to modify the state with a
new state, since the state is immutable, so every time needed a new object to
replace it.

Better to keep the reducer clean, by saying that meaning that no side effects in
reducers. To achieve this, needs to separate actions from reducers, which is an
another file that contains set of creators defining the action type and payload.
