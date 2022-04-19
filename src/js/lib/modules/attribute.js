import $ from '../core';

$.prototype.getAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        // if (!this[i].getAttribute(name)) {
        //     continue;
        // }

        return this[i].getAttribute(name);
    }

    return this;
};

$.prototype.setAttr = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        // if (this[i].getAttribute(name)) {
        //     continue;
        // }
        this[i].setAttribute(name, value); 
        
    }   

    return this;
};


$.prototype.removeAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        // if (!this[i].getAttribute(name)) {
        //     continue;
        // }

        this[i].removeAttribute(name); 
        
    }

    return this;
};

$.prototype.toggleAttr= function(name, value) {
    for (let i = 0; i < this.length; i++) {

        if (this[i].hasAttribute(name, value)) {
            this[i].removeAttribute(name, value);
        } else {
            this[i].setAttribute(name, value);
        }
        
    }

    return this;
};