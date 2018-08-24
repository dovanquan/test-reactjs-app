const uuidv4 = require('uuid/v4');
let items = [
		    {
		    	id: uuidv4(),
		        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting ',
		        level: 1
		    },
		    {
		    	id: uuidv4(),
		        name: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
		        level: 2
		    },
		    {
		    	id: uuidv4(),
		        name: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
		        level: 2
		    }
		]

export default items;