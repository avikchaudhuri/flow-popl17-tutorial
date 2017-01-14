# POPL 2017 Tutorial

## Fast and Precise Type Checking for JavaScript: *Are you in Flow?*

This repository [(https://github.com/avikchaudhuri/flow-popl17-tutorial/)](https://github.com/avikchaudhuri/flow-popl17-tutorial/) contains material that will be used in this tutorial. Grab a local copy to follow along.

```
git clone https://github.com/avikchaudhuri/flow-popl17-tutorial.git
```

If you don't have `git`, that's fine. Click the `Clone or download` button and select `Download ZIP`.


### Outline of Tutorial

1. Overview of Flow's design and implementation *\[45 mins\]* ([`slides/`](slides/))
   * Why Flow?
   * Precision
   * Speed
2. Using Flow *\[45 mins\]* ([`examples/`](examples/))
   * Installation
   * Typechecking code
   * Running code
   * Type system features
   * Commands
3. Contributing to Flow *\[45 mins\]* ([`diffs/`](examples/))
   * Building
   * Tweaking a type system feature
   * Extending a command
   
### Helpful Links

* [Website](https://flowtype.org/)
* [Docs](https://flowtype.org/docs/getting-started.html#_)
* [Code](https://github.com/facebook/flow)
* [Playground](https://flowtype.org/try/)

### Prerequisites

* **Node**
  We will use `npm`, which is the Node package manager, to install Flow and other JavaScript utils. We also need Node to run our JavaScript code.
  
  Install the appropriate binary for your machine [here](https://nodejs.org/en/download/). 

* **OCaml**
  Flow is implemented in OCaml, so you'll need it in order to build the source code.
  
  See [here](https://ocaml.org/docs/install.html) for installation instructions. *Note: this takes time, so do it early!*
  
  For example, on OSX you can use [`brew`](http://brew.sh/) to install OCaml.
  ```
  brew install ocaml ocamlbuild libelf opam
  ```

If nothing works, sit back, relax, and watch the show. :)

### Using Flow

To simply use Flow, you could download an appropriate binary for your machine [here](https://github.com/facebook/flow/releases). However, to do actual JavaScript development using Flow, you'll need to install some other JavaScript utils.

```
cd examples
npm install
```

This should install Flow and [Babel](https://babeljs.io/), among other things. Babel transforms code, in particular stripping out type annotations, to emit JavaScript that `node` can run.

To check the examples in this directory, run
```
node_modules/.bin/flow check
```

This should make Flow report a bunch of type errors and quit. (Notice that there is a `.flowconfig` file in this directory, which indicates that it is a "project root.") If you want to make Flow continue to watch the project, run instead
```
node_modules/.bin/flow
```

To execute an example, e.g. `example7.js`, run
```
babel-node example7.js
```

This will transform the code on-the-fly and execute it, printing out some results. (The necessary configuration is already in `.babelrc`.)

Advanced type system features are illustrated via a series of examples under `src/`.

To explore commands, run
```
node_modules/.bin/flow --help
```
In particular, commands such as `type-at-pos`, `get-def`, and `autocomplete` are useful for integration with your favorite IDE, respectively returning the type, the definition pointed to, and the available completions at a particular location in the code.


### Contributing to Flow

Get the source code [here](https://github.com/facebook/flow) and build it.
```
make
```

The compiled binary is at `bin/flow`.

A couple of exercises we will work through are under `diffs/`. These are designed to give an overview of the way typing rules work, and the way commands can be implemented to query Flow for information about code.
