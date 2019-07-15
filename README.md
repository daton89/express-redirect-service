﻿# express-redirect-service

After a couple of hourse spent to make a simple nginx image running on docker (that worked till few months ago) i decided to build a simple http proxy to redirect old links.

The service uses `express` and `express-http-proxy` and can be easly configured with these env variables:

## Configuration

```sh
# the target of the proxy, it is required
export PROXY_URI=https://www.example.com

# we can wrap the request resolver url with prefix and suffix
export PREFIX=''
export SUFFIX=''

# the port where the service will run | default to 3000
```

