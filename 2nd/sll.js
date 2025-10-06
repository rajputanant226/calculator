class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertatstart(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode; 
        this.size++;
    }

    insertatindex(data, index) {
        if (index < 0 || index > this.size) {
            console.error('wrong index');
            return false;
        }

        if (index === 0) {
            this.insertatstart(data);
            return true;
        }

        const newNode = new Node(data);
        let current = this.head;
        let prev = null;
        let count = 0;

        while (count < index && current !== null) {
            prev = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        if (prev !== null) {
            prev.next = newNode;
        }

        this.size++;
        return true;
    }

    insertatlast(data) {
        const newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    removeatindex(index) {
        if (index < 0 || index >= this.size) {
            console.error('wrong index');
            return null;
        }

        let removed;
        let current = this.head;

        if (index === 0) {
            removed = current.data;
            this.head = current.next;
        } else {
            let prev = null;
            let count = 0;

            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }

            removed = current.data;
            prev.next = current.next;
        }

        this.size--;
        return removed;
    }

    isEmpty() {
        return this.size === 0;
    }

    getsize() {
        return this.size; 
    }

    printlist() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + '->';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}


const l = new SingleLinkedList();
l.insertatstart(10);
l.insertatstart(20);
l.printlist();
l.insertatindex(30, 1);  // Insert 30 at index 1
l.printlist();
l.insertatstart(40);
l.insertatlast(50);

l.printlist();  
l.removeatindex(0);
l.printlist(); 