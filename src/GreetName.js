"use strict";

exports.handler = async (event, context) => {

    let greeting;

    if ("name" in event) {
        greeting = "Hello " + event.name;
    } else {
        greeting = "Aye";
    }

    return { message: greeting };
};
