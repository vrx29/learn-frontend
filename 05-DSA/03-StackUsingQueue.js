function Queue() {
    let items = []

    this.enqueue = function(element){
        items.push(element)
    }
    this.dequeue = function(){
        return items.shift();
    }
    this.front = function(){
        return items[0]
    }
    this.rear = function(){
        return items[items.length - 1]
    }
    this.isEmpty = function(){
        return items.length == 0
    }
    this.size = function() {
        return items.length;
    }
    this.print = function(){
        console.log(items.toString())
    }
}



function Stack(){
    let queue = new Queue();

    this.push = function(elm){
        let size = queue.size();

        queue.enqueue(elm)

        for (let i = 0; i < size; i++){
            let x = queue.dequeue();
            queue.enqueue(x)
        }
    }

    this.pop = function(){
        
    }
}