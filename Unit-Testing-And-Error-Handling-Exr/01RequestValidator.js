function requestValidator(obj){

    let validRequests = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /[A-Za-z0-9\.*]+/g;
    let msgPattern = /[<>\\&\'\"]+/g;

    if(!obj.hasOwnProperty('method') || !validRequests.includes(obj.method)){
      throw new Error ('Invalid request header: Invalid Method');
    }

    if(!obj.hasOwnProperty('uri') || !uriPattern.test(obj.uri) || obj.uri === ''){
      throw new Error ('Invalid request header: Invalid URI');
    }

    if(!obj.hasOwnProperty('version') || !validVersions.includes(obj.version)){
      throw new Error ('Invalid request header: Invalid Version');
    }

    if(!obj.hasOwnProperty('message') || msgPattern.test(obj.message)){
      throw new Error ('Invalid request header: Invalid Message')
    }

    return obj;
}

console.log(requestValidator({
  method: 'GET',
  uri: '',
  version: 'HTTP/1.1',
  message: ''
}
)
);