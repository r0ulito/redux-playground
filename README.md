# Premiers pas avec Redux

# Bienvenue sur ce module d'apprentissage pour Redux.


## Comment ça marche ?

```js
import { createStore } from 'redux'

/**
 * Ceci est un reducer (entonnoir) - C'est une fonction qui prend une valeur de l'état courant, 
 * et un objet action qui décrit ce qui "vient de se passer", 
 * et qui retourne un nouvelle valeur d'état.
 * 
 * La signature de la fonction est la suivante (state, action) => newState
 *
 * L'état Redux ne doit contenir que des objets JavaScript, des arrays, et des types primitifs
 * La valeur de base est habituellement un objet.
 * Il est iumportant de ne pas muter l'état directement, mais de retourner un nouvel objet si l'état change
 *
 * On peut utiliser n'importe quelle logique dans le reducer. 
 * Dans cet exemple il y a un switch mais ce n'est pas obligatoire
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
    // Si l'action était d'incrémenter le counter, on retourne le state avec le counter incrémenté
      return { value: state.value + 1 }
    case 'counter/decremented':
    // Si l'action était de décrémenter le counter, on retourne le state avec le counter décrémenté
      return { value: state.value - 1 }
    default:
    // Si il n'y avait pas d'action, on retourne l'état précédent
      return state
  }
}

// createStore nous permet de créer un Store Redux qui contiendra l'état de notre app
// Nous pouvons utiliser les API { subscribe, dispatch, getState }
let store = createStore(counterReducer)

// Il est possible d'utiliser subscribe() pour mettre à jour l'UI en réponse aux changements d'état

store.subscribe(() => console.log(store.getState()))


// La seule façon de muter l'état interne est de déclencher (dispatch) une action
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
```

## Énoncé

En premier lieu nous allons créer une nouvelle application react grâce à la commande `npx create-react-app redux-is-magic`


Puis nous allons installer redux avec la commande `npm i redux`.

En nous aidant de l'exemple ci-dessus: 
- Initialisons une variable d'état contenant 
    ```js
    let state = {
        greetings : "Not in the mood"
    }
    ```

- Créons ensuite un reducer que nous allons nommer greetingsReducer.
Il répondra à deux actions nommées respectivement :
    - `greetings/sayHello` (elle devra modifier l'état greetings par "Hello world!")
    - `greetings/sayGoodbye` (elle devra modifier l'état greetings par "Goodbye!")

- Déclenchons quelques actions pour changer notre `state`

- N'oublions pas de subscribe pour pouvoir `console.log` les changements d'état






---

Pour passer à la suite vous devez commit vos changements puis checkout sur la branche exo2