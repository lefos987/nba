import q from 'q';

class RequestQueue {

    constructor() {
        this.requests = [];
    }

    addToQueue(request) {
        
        return q.fcall(() => {

            if(Array.isArray(request)) {
                request.forEach((req) => {
                    this.requests.push(req);
                });
            }

            else {
                this.requests.push(request);
            }

            return this.requests;
        });
    }

}

let _RequestQueue = new RequestQueue();
export default _RequestQueue;