# Node.js HTTP response status code.

> 
> No Dependency!
> - node.js itself
> - http module (Pre Installed with node.js)

>
> Installation guide.
> - Locate the constants.js file, copy it to your project.
> - import the required constant
> - That's it.

# Examples

### Generic example 
```
import {HTTP_OK, stringify} from "./constants";

console.log(HTTP_OK)

console.log(stringify(HTTP_OK));
```

## Node.js HTTP response code example
```
const findProducts = (req, res) => {
  return res.status(HTTP_OK).json({
    statusCode: HTTP_OK,
    statusText: stringify(HTTP_OK)
  })
}
```

> If you prefer utilizing an alternative package over the current one, I recommend considering the following option developed by @[prettymuchbryce](https://github.com/prettymuchbryce) , which is highly regarded.
> 
> https://github.com/prettymuchbryce/http-status-codes.git


