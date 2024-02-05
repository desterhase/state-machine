'use strict';


function processLine(line, context) {
	// possible states of the line
	const heading = isHeading(line)	// returns heading level if true
	const beginningOfLink = isBeginningOfLink(line)
	const continuationOfLinkComments = isContinuationOfLinkComments(line)
	const blankLine = isBlankLine(line)


/* lib */

/* possible states for lines */

/*
 * isHeading
 */ 
function isHeading(line) {
	const trimmedLine = line.trim()
	const firstFiveChars = trimmedLine.slice(0, 5)
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
 * isContinuationOfLinkComments 
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

/*
 * isBeginningOfLink 
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

function isBlankLine (previousLineIsContent, line) {
	if (previousLineIsContent === false  && line === '' ) {
		return true
	} 
}


/*
 * foramt
 */ 
function format(type, input) {
	const trimmedLine = input.trim()
	switch (type) {
		case 'h1':
			return trimmedLine.slice(2)

		case 'h2':
			return trimmedLine.slice(3)

		case 'h3':
			return trimmedLine.slice(4)

		case 'h4':
			return trimmedLine.slice(5)

		case 'h5':
			return trimmedLine.slice(6)

		case 'link title':
			return /(?<=\[).+?(?=\])/.exec(trimmedLine)[0]

		case 'link url':
			return /(?<=\().+?(?=\))/.exec(trimmedLine)[0]

		case 'additional text':
			return line.slice(line.indexOf(')'))

		case 'comments':
			return input.trim() 

		default: 
			throw new Error('function format must be supplied a type')
	}
}

function getCategoryString (context) {
	let categoryString = ''
	
	if (context.currentH1) categoryString += `${context.currentH1} > ` 	
	if (context.currentH2) categoryString += `${context.currentH2} > ` 	
	if (context.currentH3) categoryString += `${context.currentH3} > ` 	
	if (context.currentH4) categoryString += `${context.currentH4} > ` 	
	if (context.currentH5) categoryString += `${context.currentH5} > `
	
	if (categoryString) {
		context.link.category = categoryString.slice(0, -3)
	} else {
		throw new Error('category string couldn\'t be built')
	}
}

 

