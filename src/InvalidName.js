"use strict";

exports.handler = async (event, context) => {

    let errorMessage;
    const cause = JSON.parse(event.Cause);

    if (cause.errorMessage == "WrongName") {
        errorMessage = "I don't know how to greet this name";
    } else if (cause.errorMessage == "NoName") {
        errorMessage = "Please give me a name to greet";
    } else {
        errorMessage = "Unknown error";
    }

    return { message: errorMessage };
};