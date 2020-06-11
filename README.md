# aws-sdk npm in ClearBlade

This repository demonstrates how to use a npm library like `aws-sdk` in the ClearBlade code engine. [cb-dev-kit](https://github.com/clearblade/cb-dev-kit) is used to transpile and bundle the JS for usage.

### Assets

The following pre-transpiled JS libraries are available in `code/libraries`:

1. aws
2. xmlhttprequest (consumed by aws)
3. domparser (also consumed by aws)

There is also an example service that uses the aws library in `code/services/testAwsWithLibrary/testAwsWithLibrary.js`

### Shims

This project uses a shim for proxying xhr requests to ClearBlade's [http library](https://github.com/ClearBlade/native-libraries/blob/master/http.md). The source for this shim is located in `src/shims/xhr/xmlhttprequest.ts`

### Polyfills

This project uses polyfills to make certain non-native features available in the code engine. These are located in `src/util/polyfills`

### Limitations

- Errors from AWS (i.e., permissions errors) aren’t returned properly. All errors are returned as a “NetworkingError”. However, the actual errors are logged in src/shims/xhr/xmlhttprequest.ts so if logging is enabled it should be easy to debug.
  - I believe this causes the SDK to attempt multiple retries (sometimes the retries use a different region so you need to look at the first error to see what really happened)
- Currently uses the browser version of the aws-sdk. Will look into supporting the node version but it might require more polyfills and/or shims for things like Buffers, streams, sockets, etc.
  - Note: the browser implementations are controlled by the `browser` field in the aws-sdk package.json
- AWS.S3.upload doesn’t work properly due to the Blob polyfill. Further investigation is needed to correct this

### Making changes to source

If you'd like to make changes to files in the `src` folder you'll need to rebuild the services or libraries, depending on what you're working on. Here are some example commands for rebuilding:

```
cb-dev-kit build -service=testAws
cb-dev-kit build -library=aws
cb-dev-kit build -library=xmlhttprequest
cb-dev-kit build -library=domparser
```
