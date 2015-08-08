class RequestQueue {

    constructor() {
        this.requests = [];
    }

    addToQueue(request) {
        this.requests.push(request);
    }

}

let _RequestQueue = new RequestQueue();
export default _RequestQueue;