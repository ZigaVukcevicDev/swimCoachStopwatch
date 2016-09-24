# Swim Coach Stopwatch

Mobile application for time measuring of multiple swimmers. Made with love for swimming.

---

**NOTE: This project is work in progress.**

## Functionalities

### Measuring multiple swimmers at the same time from start to finish point.

#### Scenario:

**Start point**

Coach starts first swimmer. After specific time interval (e.g. 5 seconds) coach starts second swimmer. Coach can proceed this behaviour for more swimmers.

1st swimmer: 0:00:00
2nd swimmer: 0:05:00

**Finish point**

Coach ends time of first swimmer, then second swimmer. Coach can proceed this behaviour for more swimmers.

```
1st swimmer: 0:29:54
2nd swimmer: 0:37:12
```

Automatic computation is made for showing net time result.

```
1st swimmer: 0:29:54
2nd swimmer: 0:32:12
```

Computation follows:

- 1st swimmer: 0:29:54 - 0:00:00
- 2nd swimmer: 0:37:12 - 0:05:00

#### Technicals

Input:
- Required time interval in seconds.

Output:
- Computed net time result for each swimmer.

---

### // TODO: Split times
