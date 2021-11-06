# ele-tool
enclose document.getElementById()

# Install
```
npm install ele-tool
```

# Usage & Api
```javascript
var ele = require("ele-tool");

//ele(idOrEl)
ele('divResult') === document.getElementById('divResult') &&
    ele(document.getElementById('divResult')) === document.getElementById('divResult');

```
