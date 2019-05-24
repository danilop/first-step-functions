"use strict";

function NameError(message) {
    this.name = 'NameError';
    this.message = message;
}
NameError.prototype = new Error();

const validNames = ["Danilo", "Daniel", "Dani"];

exports.handler = async (event, context) => {

    if (!("name" in event)) {
        throw new NameError("NoName");
    } else if (validNames.indexOf(event.name) == -1) {
        throw new NameError("WrongName");
    } else {
        return event;
    }
};

