# Pro console.log()

> A module that allows writing logs to the console or to a file powerfully.
 
## Get Started
`npm i @dariodigulio/pro-log-js`

## Basic Usage

```
import {ProLogJs} from "dariodigulio/pro-log-js";

ProLogJs.log('Hello, world', 's');
```

## More Usages

```
import {ProLogJs} from "../index.js";

const MyLogger = new ProLogJs('./log.log');
MyLogger.log('Logger in file');
```

## Params

 * Text: String
* Status:
    * `s|S`: [SUCCESS]
    * `w|W`: [WARNING]
    * `e|E`: [ERROR]
    * `i|I`: [INFO]
    * `d|D`: [DEBUG]  
    * default: [LOG]
    