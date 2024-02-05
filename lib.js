'use strict'

/*
 * 	lib.js - helper functions for the state machine
 *
 */ 

/*
 *  initContext	
 *
 */ 
function initContext (scheme) {
	switch (scheme) {
		case 'boostnote':	
			return {	
				lineNumber: 0,
				previousLineIsContent: false,
				currentH1: '',
				currentH2: '',
				currentH3: '',
				currentH4: '',
 				currentH5: '',

				link: {}
			}
		default:
			throw new Error('initContext didn\'t get a valid scheme')
	}
}

/*
 *	isHeading 
 *
 */ 
function isHeading (line) {
	const trimmedLine = line.trim()
	const firstFiveChars = trimmedLine.slice(0,5)
	const textUntilSpace = firstFiveChars.slice(0, firstFiveChars.indexOf(' '))
                                                                              
	if (firstFiveChars === '#####') {
		return 5
	} else if (textUntilSpace === '#' * firstFiveChars.indexOf(' ')) {
		return textUntilSpace.length	
	} else {
		return false
	}
}

/*
 *	isBlankLine 
 *
 */ 
function isBlankLine (previousLineIsContent, line) {
	if (previousLineIsContent === false  && line === '' ) {
		return true
	} 
}

/*
 *	isBeginningOfLink 	
 *
 */ 
function isBeginningOfLink (line) {
	if (
		line.trim().slice(0,1) === '[' &&
		line.indexOf('](') !== -1
	) {
		return true	
	} else {
		return false
	}
}

/*
 *	isContinuationOfLinkComments  
 *
 */ 
function isContinuationOfLinkComments (isPreviousLineContent, line) {
	if (
				isPreviousLineContent === true && 
				isBeginningOfLink(line) === false &&
				isHeader(line) === false
	) {
		return true		
	} else {
		return false
	}
}
