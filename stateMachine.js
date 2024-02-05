"use strict";

/*
 *	stateMachine.js - makes a state machine available to process lines of text
 *
 */

const {
  initContext,
  isHeading,
  isBlankLine,
  isBeginningOfLink,
  isContinuationOfLinkComments,
} = require("./lib");

/*
 *	stateMachine -
 *
 */
function stateMachine(scheme, lines) {
  let context = initContext(scheme);
  let returnContents = [];

  lines.forEach(function (line) {
    const heading = isHeading(line);
    const blankLine = isBlankLine(context.previousLineIsContent, line);
    const beginningOfLink = isBeginningOfLink(line);
    const continuationOfLinkComments = isContinuationOfLinkComments(
      context.previousLineIsContent
    );

    // probably shouldn't use this for validation... NaN is type 'number'  kind
    // of weird that all the other state functions return bools but this one
    // needs to use numbers, so this little if statement can work...
    if (typeof heading === "number") {
      context.link[`currentH${isHeading}`] = format(`h${isHeading}`, line);
      return;
    }

    if (beginningOfLink) {
      if (context.link) {
        context.link["comments"] = format("comments", context.link.rawComments);
        context.link["category"] = getCategoryString(context);
        links.push(context.link);
        context.link = {};
      }

      context.link["title"] = format("link title", line);
      context.link["url"] = format("link url", line);
      context.link["rawComments"] = format("additional text", line);
      context.previousLineIsContent = true;
      return;
    }

    if (blankLine) {
      if (context.previousLineIsContent) {
        context.link.rawComments = context.link.rawComments + "\n";
      }
      return;
    }

    if (isContinuationOfLinkComments) {
      context.link["rawComments"] = context.link.rawComments + line;
      return;
    }
  });
}

/* STATE FUNCTIONS */

module.exports = stateMachine;
