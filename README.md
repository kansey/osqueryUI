# electron-react-boilerplate

> Live editing development on desktop app

[Electron](http://electron.atom.io/) application boilerplate based on [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux), [React Router](https://github.com/reactjs/react-router), [Webpack](http://webpack.github.io/docs/), [React Transform HMR](https://github.com/gaearon/react-transform-hmr) for rapid application development

## osqueryUI
Simple UI to the framework [osquery](https://osquery.io) 

## Install

First, clone the repo via git:

```bash
git clone https://github.com/kansey/osqueryUI your-project-name
```

Second, install dependencies.

```bash
$ cd your-project-name && npm install
```

Third, install Facebook [osquery](https://github.com/facebook/osquery).

[install](https://osquery.readthedocs.io/en/stable/installation/install-linux/)

Linux:

```bash
$ sudo rpm -ivh https://osquery-packages.s3.amazonaws.com/centos7/noarch/osquery-s3-centos7-repo-1-0.0.noarch.rpm
```

```bash
$ sudo yum install osquery
```

## Run

Run this two commands __simultaneously__ in different console tabs.

```bash
$ sudo service osqueryd start
$ sudo npm run hot-server
$ sudo npm run start-hot
```

*Note: requires a node version >= 4 and an npm version >= 2.*
