# Swim Coach Stopwatch [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)]()

[![npm version](https://badge.fury.io/js/swimCoachStopwatch.svg)](https://badge.fury.io/js/swimCoachStopwatch)

> Mobile application for time measuring of multiple swimmers, using [React Native](https://facebook.github.io/react-native/).

:swimmer: :swimmer: :swimmer: Made with love for swimming.

**NOTE: This project is work in progress.**

---

## Functionalities

### Measuring multiple swimmers at the same time from start to finish point.

#### Scenario:

##### A) Start point

Coach starts first swimmer. After specific time interval (e.g. 5 seconds) coach starts second swimmer. Coach can proceed this behaviour for more swimmers.

```
1st swimmer: 00:00:00
2nd swimmer: 00:05:00
```

##### B) Finish point

Coach ends time of first swimmer, then second swimmer. Coach can proceed this behaviour for more swimmers.

```
1st swimmer: 00:29:54
2nd swimmer: 00:37:12
```

Automatic computation is made for showing net time result.

```
1st swimmer: 00:29:54
2nd swimmer: 00:32:12
```

Computation follows rule:

- `00:29:54 - 00:00:00` (for 1st swimmer)
- `00:37:12 - 00:05:00` (for 2nd swimmer)

#### Technical parameters

Input:
- Required time interval, measured in seconds.

Output:
- Computed net time result for each swimmer.

### Measuring multiple swimmers split times.

// TODO: Write scenario and technical parameters - [Issue #2](https://github.com/be-codified/swimCoachStopwatch/issues/2)

---

## Development

### How to install

```
npm install
```

### How to run

```
react-native run-ios
```

### How to release

Major release
```
npm run release:major
```

Minor release
```
npm run release:minor
```

Patch release
```
npm run release:patch
```
