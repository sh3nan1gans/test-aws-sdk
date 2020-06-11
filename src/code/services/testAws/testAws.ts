import 'core-js/stable';

function testAws(_: CbServer.BasicReq, resp: CbServer.Resp) {
  globalThis.log('inside micro');
  resp.success('done');
}

globalThis.testAws = testAws;
